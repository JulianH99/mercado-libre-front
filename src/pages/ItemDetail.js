import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail/ProductDetail";
import { itemsService } from "../services/items";
import { formatNumber } from "../utils/number";

export const ItemDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});

	useEffect(() => {
		itemsService.getItem(id).then((res) => setProduct(res.item));
	}, [id]);

	return (
		<section id="ml-product-detail">
			{product.title ? (
				<ProductDetail product={product} />
			) : (
				<div>
					<p>Cargando...</p>
				</div>
			)}
		</section>
	);
};
