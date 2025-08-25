import { IS_PROD } from "../../_share/const.js";
import prettifyHtml from "./prettifyHtml.js";
import minifyHtml from "./minifyHtml.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function registerTransforms(eleventyConfig) {
	if (IS_PROD) {
		eleventyConfig.addTransform("minifyHtml", minifyHtml);
	} else {
		eleventyConfig.addTransform("prettifyHtml", prettifyHtml);
	}
}
