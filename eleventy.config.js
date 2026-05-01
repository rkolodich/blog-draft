import {
	registerCollections,
	registerExtensions,
	registerFilters,
	registerLibraries,
	registerPlugins,
	registerTransforms,
} from "./_11ty/index.js";
import fg from "fast-glob";
import { DEV_PORT } from "./_share/const.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
	// Ignore files to prevent template building by 11ty
	["_share", "_11ty", "*.md", "*.js"].forEach((glob) => {
		eleventyConfig.ignores.add(glob);
	});

	// Watch on files which can't be processed by 11ty
	eleventyConfig.setWatchThrottleWaitTime(300);
	["_11ty", "_share"].forEach((glob) => {
		eleventyConfig.addWatchTarget(glob, { resetConfig: true });
	});

	// Copy files (.js and .scss files are compiled as template files)
	fg.sync(["assets/**", "!assets/{js,scss}"]).forEach((glob) => {
		eleventyConfig.addPassthroughCopy(glob);
	});

	// Set global permalinks to correct .html and .css files paths
	eleventyConfig.addGlobalData("permalink", () => {
		const correct = (path) =>
			path.replace("/views", "").replace("/scss", "/css");

		return (data) =>
			`${correct(data.page.filePathStem)}.${data.page.outputFileExtension}`;
	});

	// Set custom ports
	eleventyConfig.setServerOptions({
		port: DEV_PORT,
	});

	// Register eleventy needed configs
	registerCollections(eleventyConfig);
	registerExtensions(eleventyConfig);
	registerFilters(eleventyConfig);
	registerLibraries(eleventyConfig);
	registerPlugins(eleventyConfig);
	registerTransforms(eleventyConfig);

	return {
		dir: {
			output: "_site",
			includes: "_includes",
			layouts: "_layouts",
		},
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		templateFormats: ["md", "njk", "html", "scss", "js"],
	};
}
