import scss from "./scss.js";
import js from "./js.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function registerExtensions(eleventyConfig) {
	eleventyConfig.addExtension("scss", scss);
	eleventyConfig.addExtension("js", js);
}
