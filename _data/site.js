import childProcess from "node:child_process";

const buildDate = new Date();
const buildISODate = buildDate.toISOString();
const buildTimestamp = +buildDate;
const buildVersion = process.env.npm_package_version;

/**
 * @see https://www.aleksandrhovhannisyan.com/blog/eleventy-build-info/#3-getting-the-latest-commit-hash
 */
let buildHash = "";
try {
	buildHash = childProcess.execSync("git rev-parse HEAD").toString().trim();
} catch (error) {
	console.error(error);
}

export default {
	eleventyLink: "https://www.11ty.dev/",

	dir: "ltr",
	lang: "ru",

	copyright: {
		from: 2025,
		to: buildDate.getFullYear(),
	},

	buildDate,
	buildISODate,
	buildTimestamp,
	buildVersion,
	buildHash,

	title: "Блог",
	shortTitle: "Блог",
};
