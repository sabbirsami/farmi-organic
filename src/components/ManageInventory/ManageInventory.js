import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import SingleInventory from "./SingleInventory";

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://cryptic-ridge-39056.herokuapp.com/product")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div>
            <Container>
                <div className="py-5">
                    <h1>Welcome to manage inventory</h1>
                    <div className="py-4">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <SingleInventory
                                        key={product._id}
                                        product={product}
                                    ></SingleInventory>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ManageInventory;
