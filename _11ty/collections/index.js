import { posts, postsByYear } from "./posts.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function registerCollections(eleventyConfig) {
	/** Each collection should starts with $ to point that is custom collection */
	eleventyConfig.addCollection("$posts", posts);
	eleventyConfig.addCollection("$postsByYear", postsByYear);
}
