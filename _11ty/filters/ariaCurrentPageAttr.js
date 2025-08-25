import isCurrentPage from "./isCurrentPage.js";

export default function ariaCurrentPageAttr(url, pageUrl) {
	const current = isCurrentPage.call(this, url, pageUrl);
	return current ? 'aria-current="page"' : "";
}
