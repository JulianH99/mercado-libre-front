import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { ProductList } from "../components/ProductList/ProductList";
import { itemsService } from "../services/items";
import { ItemDetail } from "./ItemDetail";

export const Items = () => {
	const location = useLocation();
	const search = new URLSearchParams(location.search).get("search");
	const [response, setResponse] = useState({});
	const match = useRouteMatch();

	useEffect(() => {
		if (search) {
			itemsService.getItems(search).then((res) => setResponse(res));
		}
	}, [search]);

	return (
		<div className="ml-items__container">
			<Breadcrumb paths={response.categories} />

			<Switch>
				<Route path={`${match.path}/:id`}>
					<ItemDetail />
				</Route>
				<Route path={match.path}>
					<ProductList products={response.items} />
				</Route>
			</Switch>
		</div>
	);
};
