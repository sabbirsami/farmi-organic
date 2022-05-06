import { useEffect, useState } from "react";

const useProductDetail = (productId) => {
    const [singleProduct, setProduct] = useState({});
    console.log(singleProduct);

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;

        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);
    return [singleProduct];
};

export default useProductDetail;
