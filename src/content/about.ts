import { URLS, type URLMetadata } from "./urls";

export const ABOUT_FOOTER_CONTENT: {
	text: string;
	links: (URLMetadata & { displayName: string })[];
} = {
	text: "Making music as Toko Makai and Max Fung. Coding professionally since 2021. A lifelong musician, artist, tinkerer, and designer. Fortunate to work with thoughtful people on meaningful projects to bring creative and technical ideas to life.",
	links: [
		{ ...URLS.INSTAGRAM_TOKO_MAKAI, displayName: "Toko Makai" },
		{ ...URLS.INSTAGRAM_MAX_FUNG, displayName: "Max Fung" },
	],
};
