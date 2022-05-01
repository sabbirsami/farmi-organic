import React from "react";
import "../Style/Style.css";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        // d-flex justify-content-center align-items-center
        <div className="login_section ">
            <Container>
                <Row>
                    <div className="login-form justify-content-center align-items-center">
                        <div className="col-lg-7 mx-auto">
                            <div className="form-container">
                                <form action="">
                                    <div className="login_container p-4 p-lg-5">
                                        <div className="form-group text-start px-3 py-2">
                                            <label
                                                htmlFor="email"
                                                className=" label py-2 px-3"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                id=""
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        <div className="form-group text-start px-3 py-2">
                                            <label
                                                htmlFor="password"
                                                className="label py-2 px-3"
                                            >
                                                Your Password
                                            </label>
                                            <input
                                                className="form-control"
                                                type="password"
                                                name="password"
                                                id=""
                                                placeholder="Your Password"
                                            />
                                        </div>
                                        <div className="submit_section px-3 pt-2">
                                            <input
                                                type="submit"
                                                className=" btn btn-primary submit py-2 w-100 rounded-pill"
                                                value="Log in"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="singUp">
                                <h5>
                                    Don't have an account?{" "}
                                    <Link to={"singup"}>
                                        {" "}
                                        Create an Account
                                    </Link>
                                </h5>
                            </div>
                            <div className="singUp_with_google px-5 mx-3 py-2">
                                <button className="btn btn-light w-100 shadow py-2 rounded-pill">
                                    {" "}
                                    Log in with{" "}
                                    <span className="text-primary">Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
