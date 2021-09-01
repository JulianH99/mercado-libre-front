import { constants } from "../contants";

export const itemsService = {
	getItems(search) {
		const urlQuery = encodeURIComponent(search);
		return fetch(`${constants.baseUrl}/api/items?q=${urlQuery}`).then((res) =>
			res.json()
		);
	},
};
