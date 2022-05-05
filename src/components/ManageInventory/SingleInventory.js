import React from "react";

const SingleInventory = ({ product }) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.price}</td>
            <td>{product.price}</td>
        </tr>
    );
};

export default SingleInventory;
