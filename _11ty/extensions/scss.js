import path from "node:path";
import * as sass from "sass";
import postcss from "postcss";
import { default as postcssConfig } from "../../postcss.config.js";

async function transformCSS(content, path) {
	const res = await postcss(postcssConfig?.plugins).process(content, {
		from: path,
	});

	return await res.css;
}

const scss = {
	outputFileExtension: "css",
	compile(inputContent, inputPath) {
		const parsed = path.parse(inputPath);
		if (parsed.name.startsWith("_")) {
			return;
		}

		const result = sass.compileString(inputContent, {
			loadPaths: [parsed.dir || ".", this.config.dir.includes],
			style: "expanded",
		});

		this.addDependencies(inputPath, result.loadedUrls);

		return async () => transformCSS(result.css, inputContent);
	},
};

export default scss;
