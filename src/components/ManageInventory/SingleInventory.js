import React from "react";

const SingleInventory = ({ product }) => {
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
                <button className="btn btn-danger w-100 rounded-0">
                    Delete Item
                </button>
            </td>
        </tr>
    );
};

export default SingleInventory;
