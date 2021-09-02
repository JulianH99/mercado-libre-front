import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail/ProductDetail";
import { Spinner } from "../components/Spinner/Spinner";
import { itemsService } from "../services/items";

export const ItemDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		itemsService
			.getItem(id)
			.then((res) => setProduct(res.item))
			.then(() => setLoading(false));
	}, [id]);

	return (
		<section id="ml-product-detail">
			{loading && <Spinner />}

			{/* put the actual detail in a separate
			componentn to avoid cluttering a single page file */}
			{product.title && <ProductDetail product={product} />}
		</section>
	);
};
