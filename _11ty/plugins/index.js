import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import readingtime from "@myxotod/eleventy-plugin-readingtime";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function registerPlugins(eleventyConfig) {
	eleventyConfig.addPlugin(readingtime, {
		wordsPerMinute: 200,
		suffixDisplay: false,
		prefixDisplay: false,
		verbose: false,
	});
	eleventyConfig.addPlugin(syntaxHighlight, {
		preAttributes: {
			"data-language": ({ language }) => language,
			tabindex: 0,
		},
	});
}
