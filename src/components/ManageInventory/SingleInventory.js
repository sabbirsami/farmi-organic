import React, { useEffect, useState } from "react";

const SingleInventory = ({ product }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/product/")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            const url = `http://localhost:3000/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = products.filter(
                        (product) => product._id !== id
                    );
                    setProducts(remaining);
                    console.log(data);
                });
        }
    };
    return (
        <tr>
            <td>{product.name}</td>
            <td>
                <i>
                    <small>{product.supplier}</small>
                </i>
            </td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td className="p-0">
                <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-danger w-100 rounded-0"
                >
                    Delete Item
                </button>
            </td>
        </tr>
    );
};

export default SingleInventory;
