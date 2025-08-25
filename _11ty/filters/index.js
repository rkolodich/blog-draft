import ariaCurrentPageAttr from "./ariaCurrentPageAttr.js";
import isCurrentPage from "./isCurrentPage.js";
import toDate from "./toDate.js";
import toDateTime from "./toDateTime.js";
import toISODate from "./toISODate.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export function registerFilters(eleventyConfig) {
	eleventyConfig.addFilter("ariaCurrentPageAttr", ariaCurrentPageAttr);
	eleventyConfig.addFilter("isCurrentPage", isCurrentPage);
	eleventyConfig.addFilter("toDate", toDate);
	eleventyConfig.addFilter("toDateTime", toDateTime);
	eleventyConfig.addFilter("toISODate", toISODate);
}
