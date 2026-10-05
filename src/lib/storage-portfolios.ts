import matter from "gray-matter";

export interface StoragePortfolio {
	slug: string;
	title: string;
	description: string;
	heroImage: string;
	coverImage: string;
	bannerPosition: string;
	coverPosition: string;
	clients: string[];
	location: string;
	images: string[][];
	imageLayout: string;
	order: number;
	body: string;
}

const url = import.meta.env.SUPABASE_URL;
const key = import.meta.env.SUPABASE_ANON_KEY;
const bucket = "portfolios";
const headers = { apikey: key, Authorization: `Bearer ${key}` };
const publicUrl = (path: string) => `${url}/storage/v1/object/public/${bucket}/${path.split("/").map(encodeURIComponent).join("/")}`;

export async function getStoragePortfolios(): Promise<StoragePortfolio[]> {
	if (!url || !key) throw new Error("Missing Supabase environment variables.");
	const root = await fetch(`${url}/storage/v1/object/list/${bucket}`, { method: "POST", headers: { ...headers, "Content-Type": "application/json" }, body: JSON.stringify({ prefix: "", limit: 100, offset: 0 }) });
	if (!root.ok) throw new Error("Could not list portfolio folders.");
	const folders = (await root.json() as { name: string; id: string | null }[]).filter((entry) => entry.id === null);
	const portfolios = await Promise.all(folders.map(async ({ name: slug }) => {
		const response = await fetch(publicUrl(`${slug}/index.md`));
		if (!response.ok) return null;
		try {
			const parsed = matter(await response.text());
			const data = parsed.data as Omit<StoragePortfolio, "slug" | "body" | "heroImage" | "coverImage" | "bannerPosition" | "coverPosition" | "images" | "imageLayout"> & { heroImage: string; coverImage?: string; bannerPosition?: string; coverPosition?: string; images: string[][]; imageLayout?: string };
			const imagePath = (path: string) => publicUrl(`${slug}/${path.replace(/^\.\//, "")}`);
			return { slug, title: data.title, description: data.description, heroImage: imagePath(data.heroImage), coverImage: imagePath(data.coverImage ?? data.heroImage), bannerPosition: data.bannerPosition ?? "center", coverPosition: data.coverPosition ?? "center", clients: data.clients ?? [], location: data.location ?? "", images: (data.images ?? []).map((group) => group.map(imagePath)), imageLayout: data.imageLayout ?? "1:1:1:1:1", order: data.order ?? 0, body: parsed.content };
		} catch {
			console.warn(`Skipping invalid portfolio metadata: ${slug}`);
			return null;
		}
	}));
	return portfolios.filter((portfolio): portfolio is StoragePortfolio => portfolio !== null).sort((a, b) => a.order - b.order);
}
