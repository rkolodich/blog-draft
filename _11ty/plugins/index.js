import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import readingtime from "@myxotod/eleventy-plugin-readingtime";
import sitemap from "@quasibit/eleventy-plugin-sitemap";
import dirOutput from "@11ty/eleventy-plugin-directory-output";

import { URL } from "../../_share/const.js";

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

	eleventyConfig.addPlugin(sitemap, {
		lastModifiedProperty: "modified",
		sitemap: {
			hostname: URL,
		},
	});

	eleventyConfig.setQuietMode(true);
	eleventyConfig.addPlugin(dirOutput, {
		columns: {
			filesize: true,
			benchmark: true,
		},
	});
}
