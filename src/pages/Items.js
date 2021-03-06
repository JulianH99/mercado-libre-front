import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";
import { ProductList } from "../components/ProductList/ProductList";
import { Spinner } from "../components/Spinner/Spinner";
import { itemsService } from "../services/items";
import { ItemDetail } from "./ItemDetail";

export const Items = () => {
	const location = useLocation();
	const search = new URLSearchParams(location.search).get("search");
	const [response, setResponse] = useState({});
	const [loading, setLoading] = useState(false);
	const match = useRouteMatch();

	useEffect(() => {
		// perform search only if the query param is not empty
		// so there is no error returned from backend
		if (search) {
			setLoading(true);
			itemsService
				.getItems(search)
				.then((res) => setResponse(res))
				.then(() => setLoading(false));
		}
	}, [search]);

	return (
		<div className="ml-items__container">
			<Breadcrumb paths={response.categories} />

			{loading && <Spinner />}

			<Switch>
				{/* use nested routing to view the breadcrumbs in the product
				detail page as well */}
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
