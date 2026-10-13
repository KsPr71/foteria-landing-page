import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
	"Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
	"Access-Control-Allow-Methods": "POST, OPTIONS",
	"Access-Control-Allow-Origin": "*",
};

const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
	status,
	headers: { ...corsHeaders, "Content-Type": "application/json" },
});

Deno.serve(async (request) => {
	if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
	if (request.method !== "POST") return json({ error: "Method not allowed" }, 405);

	const authorization = request.headers.get("Authorization");
	if (!authorization?.startsWith("Bearer ")) return json({ error: "Unauthorized" }, 401);

	const supabaseUrl = Deno.env.get("SUPABASE_URL");
	const publishableKey = Deno.env.get("SUPABASE_ANON_KEY");
	const deployHookUrl = Deno.env.get("FOTERIA_VERCEL_DEPLOY_HOOK_URL") ?? Deno.env.get("VERCEL_DEPLOY_HOOK_URL");
	const adminEmail = Deno.env.get("VERCEL_DEPLOY_ADMIN_EMAIL")?.toLowerCase();
	if (!supabaseUrl || !publishableKey || !deployHookUrl || !adminEmail) {
		console.error("Missing Vercel redeploy function secrets.");
		return json({ error: "Function is not configured" }, 500);
	}

	const supabase = createClient(supabaseUrl, publishableKey, {
		global: { headers: { Authorization: authorization } },
	});
	const { data: { user }, error } = await supabase.auth.getUser();
	if (error || !user || user.email?.toLowerCase() !== adminEmail) return json({ error: "Forbidden" }, 403);

	try {
		const response = await fetch(deployHookUrl, { method: "POST" });
		const responseBody = await response.text();
		console.log(JSON.stringify({ event: "vercel_deploy_hook", status: response.status, response: responseBody }));
		if (!response.ok) {
			console.error("Vercel deploy hook failed", response.status, responseBody);
			return json({ error: "Vercel deploy hook failed" }, 502);
		}
		return json({ ok: true });
	} catch (error) {
		console.error("Could not call Vercel deploy hook", error);
		return json({ error: "Could not call Vercel deploy hook" }, 502);
	}
});
