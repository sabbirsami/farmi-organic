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
