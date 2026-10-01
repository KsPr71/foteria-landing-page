import sitioConfig from "@config/sitio-config";

export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		twitter: string; // used for twitter cards when sharing a blog post on twitter
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: sitioConfig["site-name"],
	// Your website's title and description (meta fields)
	title: sitioConfig["site-title"],
	description: sitioConfig["site-description"],
	useViewTransitions: true,
	// Your information!
	author: {
		name: sitioConfig["site-author-name"],
		email: sitioConfig["site-author-email"],
		twitter: sitioConfig["site-twitter"],
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: sitioConfig["site-default-image-src"],
		alt: sitioConfig["site-default-image-alt"],
	},
};

export default siteData;
