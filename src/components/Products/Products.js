import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "../Style/Style.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="product_section">
            <Container>
                <div className="pt-5">
                    <h1 className="text-start pt-5 pb-2">
                        Some of the fresh fruit
                    </h1>
                </div>
                <Row>
                    {products.map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;
