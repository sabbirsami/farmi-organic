import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Form, FormControl, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const AddItem = () => {
    const {
        register,
        handleSubmit,

        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        fetch("http://localhost:5000/product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result) {
                    reset();

                    toast.info("Product successfully added", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

                console.log("Success:", result);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };
    return (
        <div>
            <h1 className="pt-5">Add Item</h1>

            <Container>
                <div className="py-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* NAME INPUT  */}
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                                Product Name
                            </InputGroup.Text>
                            <FormControl
                                {...register("name", {
                                    required: true,
                                    maxLength: 20,
                                })}
                                // placeholder="Product Name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        {/* PRICE INPUT  */}
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <FormControl
                                {...register("price")}
                                placeholder="Price"
                                aria-label="Amount (to the nearest dollar)"
                            />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>

                        {/* QUANTITY INPUT  */}
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Quantity</InputGroup.Text>
                            <FormControl
                                {...register("quantity")}
                                aria-label="Amount (to the nearest dollar)"
                            />
                        </InputGroup>

                        {/* IMAGE INPUT  */}
                        <Form.Label
                            className="d-block text-start"
                            htmlFor="basic-url"
                        >
                            Your image URL
                        </Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                https://example.com/img.jpg
                            </InputGroup.Text>
                            <FormControl
                                {...register("img")}
                                id="basic-url"
                                aria-describedby="basic-addon3"
                            />
                        </InputGroup>

                        {/* SUPPLIER INPUT  */}
                        <InputGroup className="mb-3">
                            <InputGroup.Text>
                                <FontAwesomeIcon
                                    icon={faUser}
                                    style={{
                                        color: "black",
                                        // paddingLeft: "10px",
                                    }}
                                />
                            </InputGroup.Text>
                            <FormControl
                                {...register("supplier")}
                                placeholder="Supplier"
                                aria-label="Amount (to the nearest dollar)"
                            />
                        </InputGroup>

                        {/* DESCRIPTION INPUT  */}
                        <InputGroup>
                            <InputGroup.Text>Description</InputGroup.Text>
                            <FormControl
                                {...register("about", {
                                    required: true,
                                })}
                                as="textarea"
                                aria-label="With textarea"
                            />
                        </InputGroup>
                        <ToastContainer />

                        <input
                            type="submit"
                            value={"Add Product"}
                            className="btn btn-primary bg-gradient w-100 mt-4"
                        />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AddItem;
