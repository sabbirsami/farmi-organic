import React from "react";
import "../Style/Style.css";
import { Container, Row } from "react-bootstrap";

const Login = () => {
    return (
        <div className="login_section d-flex justify-content-center align-items-center">
            <Container>
                <Row>
                    <div className="login-form ">
                        <div className="login_container">
                            <input
                                className="w-100"
                                type="email"
                                name="email"
                                id=""
                                placeholder="Your Email"
                            />
                            <input
                                className="w-100"
                                type="password"
                                name="password"
                                id=""
                                placeholder="Your Password"
                            />
                            <input
                                className="w-100"
                                type="submit"
                                value="Log in"
                            />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
