import React from "react";
import { useParams } from "react-router-dom";
import useProductDetail from "../hook/useProductDetail";

const ProductDetail = () => {
    const { productId } = useParams();
    const [product] = useProductDetail(productId);
    return (
        <div>
            <h2>{product.name}</h2>
            <h1>Hello {product.name}</h1>
        </div>
    );
};

export default ProductDetail;
