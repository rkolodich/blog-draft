import htmlmin from "html-minifier-terser";

function minifyHtml(content) {
	if ((this.page.outputPath || "").endsWith(".html")) {
		let minified = htmlmin.minify(content, {
			useShortDoctype: true,
			removeComments: true,
			collapseWhitespace: true,
		});

		return minified;
	}

	return content;
}

export default minifyHtml;
