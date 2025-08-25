import markdownIt from "markdown-it";
import markdownItImageFigures from "markdown-it-image-figures";
import markdownItBlockquoteCite from "@comtext/markdown-it-blockquote-cite";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function registerLibraries(eleventyConfig) {
	const md = markdownIt();
	md.use(markdownItImageFigures, {
		figcaption: true,
		lazy: true,
		async: true,
	});
	md.use(markdownItBlockquoteCite);
	eleventyConfig.setLibrary("md", md);
}
