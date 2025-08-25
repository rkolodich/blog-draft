import prettier from "prettier";

export function prettifyHtml(content) {
	if ((this.page.outputPath || "").endsWith(".html")) {
		let prettified = prettier.format(content, { parser: "html" });
		return prettified;
	}

	return content;
}

export default prettifyHtml;
