import React from "react";
import "../Style/Style.css";

const Product = ({ product }) => {
    const { name, img, price, about } = product;
    return (
        <div className="col-lg-3 pb-4">
            <div className="fruit_container shadow rounded-3">
                <div className="image fruit_section_bg_color rounded-3 mx-2">
                    <img className="w-100 p-3" src={img} alt="" />
                </div>
                <div className="fruit_info p-3 text-start">
                    <h3>{name}</h3>
                    <p>{about}</p>
                    <h4>{price}</h4>
                    <hr />
                    <small>a person</small>
                </div>
            </div>
        </div>
    );
};

export default Product;
