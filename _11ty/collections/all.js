/** Correct way to use all collection */
export function all(collectionApi) {
	const items = collectionApi.getFilteredByGlob("views/**/*.md");

	return items;
}
