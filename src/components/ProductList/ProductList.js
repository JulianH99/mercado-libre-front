import "./ProductList.scss";

import React from "react";
import { Product } from "../Product/Product";

export const ProductList = ({ products = [] }) => {
	return (
		<section className="ml-products-section">
			<ul className="ml-products-list">
				{products.map((product) => (
					<li key={product.id} className="ml-products-list__item">
						<Product product={product} />
					</li>
				))}
			</ul>
		</section>
	);
};
