import path from "node:path";
import * as esbuild from "esbuild";
import { IS_PROD, ROOT_FOLDER } from "../../_share/const.js";

async function buildJS(file) {
	const result = await esbuild.build({
		target: "es6",
		entryPoints: [file],
		minify: IS_PROD,
		bundle: true,
		metafile: true,
		write: false,
		sourcemap: !IS_PROD,
	});

	return {
		imports: Object.keys(result.metafile.inputs),
		text: result.outputFiles[0].text,
	};
}

const js = {
	outputFileExtension: "js",
	async compile(inputContent, inputPath) {
		const parsed = path.parse(inputPath);
		if (parsed.name.startsWith("_") || parsed.dir.includes("_11ty")) {
			return;
		}

		const result = await buildJS(inputPath);
		const imports = result.imports.map((s) => path.join(ROOT_FOLDER, s));
		this.addDependencies(inputPath, imports);

		return () => result.text;
	},
};

export default js;
