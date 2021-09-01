import "./Product.scss";
import React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils/number";

export const Product = ({ product }) => {
	return (
		<div className="ml-product">
			<Link to={`/items/${product.id}`} className="ml-product__picture">
				<img src={product.picture} alt={product.title}></img>
			</Link>
			<div className="ml-product__content">
				<div className="ml-product__content-left">
					<p className="ml-product__price">
						$ {formatNumber(product.price.amount)}
					</p>
					<Link to={`/items/${product.id}`} className="ml-product__title-link">
						<h2 className="ml-product__title">{product.title}</h2>
					</Link>
				</div>
				<div className="ml-product__content-right">
					<p className="ml-product__city">{product.city}</p>
				</div>
			</div>
		</div>
	);
};
