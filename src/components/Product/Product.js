import React from "react";
import "../Style/Style.css";

const Product = ({ product }) => {
    const { name, img, price, about } = product;
    return (
        <div className="col-lg-3 py-4">
            <div className="fruit_container shadow rounded-3">
                <div className="image fruit_section_bg_color rounded-3">
                    <img className="w-100 p-3" src={img} alt="" />
                </div>
                <div className="fruit_info p-4 text-start">
                    <h4 className="m-1">{name}</h4>
                    <p className="m-1">{about}</p>
                    <h5 className="m-1">{price}</h5>
                    <hr />
                    <small className="m-1">a person</small>
                </div>
            </div>
        </div>
    );
};

export default Product;
