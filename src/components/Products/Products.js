import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import "../Style/Style.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://cryptic-ridge-39056.herokuapp.com/product")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="product_section">
            <Container>
                <div className="pt-4">
                    <h1 className="text-start pt-5 pb-1">
                        Some of the fresh fruit
                    </h1>
                    <span className="text-start d-block m-0">
                        ---------------
                    </span>
                </div>
                <Row>
                    {products.map((product) => (
                        <Product key={product._id} product={product}></Product>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;
