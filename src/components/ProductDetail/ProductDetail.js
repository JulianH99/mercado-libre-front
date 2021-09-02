import "./ProductDetail.scss";
import React from "react";
import { formatNumber } from "../../utils/number";

export const ProductDetail = ({ product }) => {
	return (
		<div className="ml-product-detail">
			<div className="ml-product-detail__content">
				<div className="ml-product-detail__picture">
					<img src={product.picture} alt={product.title} />
				</div>
				<div className="ml-product-detail__description">
					<h2>Descripción del producto</h2>
					<p>{product.description}</p>
				</div>
			</div>
			<div className="ml-product-detail__information">
				<span className="ml-product-detail__state-sold">
					{product.condition} - {product.sold_quantity} vendidos
				</span>
				<h1 className="ml-product-detail__name">{product.title}</h1>
				<span className="ml-product-detail__price">
					$ {formatNumber(product.price.amount)}
				</span>

				<button className="ml-product-detail__buy" aria-label="Comprar">
					Comprar
				</button>
			</div>
		</div>
	);
};
