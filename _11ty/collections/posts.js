export function posts(collectionApi) {
	const items = collectionApi.getFilteredByGlob("views/posts/*/*.md");
	return items.sort((a, b) => +b.date - +a.date);
}

export function postsByYear(collectionApi) {
	let items = posts(collectionApi);

	items = items.reduce((acc, item) => {
		const year = item.date.getFullYear();
		let list = acc.get(year);
		if (!list) {
			list = [];
			acc.set(year, list);
		}
		list.push(item);
		return acc;
	}, new Map());

	return [...items.entries()]
		.map(([year, items]) => ({ year, items }))
		.sort((a, b) => +b.year - +a.year);
}
