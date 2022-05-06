import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useProductDetail from "../hooks/useProductDetail";
import useProducts from "../hooks/useProducts";

const ProductDetail = () => {
    const { productId } = useParams();
    const [singleProduct] = useProductDetail(productId);
    // const [product, setProduct] = useProducts([]);
    // const { quantity } = product;
    // const handleDelivered = (id) => {
    //     const newQuantity = parseFloat(quantity) - 1;
    //     setProduct.quantity(newQuantity);
    // };
    return (
        <div>
            <Container>
                <Row className="p-5">
                    <div className="col-lg-6">
                        <div className="py-5">
                            <div className="product_body py-5">
                                <div className="product_info text-start">
                                    <h1 className="ps-2">
                                        Name: {singleProduct.name}
                                    </h1>
                                    <p className="ps-2">
                                        <b>Description:</b>{" "}
                                        {singleProduct.about}
                                    </p>
                                    <b className="ps-2">
                                        Quantity: {singleProduct.quantity}
                                    </b>
                                    <b className="d-block ps-2">
                                        Price: ${singleProduct.price}
                                    </b>
                                    <p className="d-block ps-2">
                                        <b> Supplier:</b>{" "}
                                        <i>{singleProduct.supplier}</i>
                                    </p>
                                </div>
                                <div className="add_stock text-start">
                                    <Form>
                                        <Form.Group
                                            className="mb-2"
                                            controlId="exampleForm.ControlInput1"
                                        >
                                            <Form.Label className="ps-2">
                                                Add stock
                                            </Form.Label>
                                            <Form.Control
                                                className=" rounded-pill w-50"
                                                type="number"
                                            />
                                        </Form.Group>
                                        <input
                                            type="submit"
                                            value={"Add Stock"}
                                            className="btn btn-primary bg-gradient rounded-pill ms-2"
                                        />
                                        <button
                                            // onClick={handleDelivered}
                                            className="btn btn-primary bg-gradient rounded-pill ms-2"
                                        >
                                            Delivered
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product_img py-4">
                            <img
                                className="w-100 p-5"
                                src={singleProduct.img}
                                alt=""
                            />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetail;
