const correctPath = (str) => str.replace(/^\/|\/$/g, "");

export default function isCurrentPage(url, pageUrl) {
	return correctPath(pageUrl ?? this.ctx.page.url) === correctPath(url);
}
