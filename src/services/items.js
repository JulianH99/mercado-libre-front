import { constants } from "../contants";

// set apart http logic in separate functions
export const itemsService = {
	async getItems(search) {
		const urlQuery = encodeURIComponent(search);
		const res = await fetch(`${constants.baseUrl}/api/items?q=${urlQuery}`);
		return await res.json();
	},

	async getItem(id) {
		const res = await fetch(`${constants.baseUrl}/api/items/${id}`);
		return await res.json();
	},
};
