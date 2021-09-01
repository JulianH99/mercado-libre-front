import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { ProductList } from "../components/ProductList/ProductList";
import { itemsService } from "../services/items";

export const Items = () => {
	const location = useLocation();
	const search = new URLSearchParams(location.search).get("search");
	const [response, setResponse] = useState({});

	useEffect(() => {
		itemsService.getItems(search).then((res) => setResponse(res));
	}, [search]);

	return (
		<div className="ml-items__container">
			<Breadcrumb paths={response.categories} />
			<ProductList products={response.items} />
		</div>
	);
};
