import React, { useState } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Container, Row } from "react-bootstrap";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const SingUp = () => {
    // SIGN UP WITH GOOGLE
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    if (user || googleUser) {
        navigate("/");
    }
    if (loading || googleLoading) {
        return <Loading></Loading>;
    }
    let errorElement;
    if (error || googleError) {
        errorElement = (
            <div>
                <p className="text-danger">
                    Error: {error?.message} {googleError?.message}
                </p>
            </div>
        );
    }
    const handleSingUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    };
    return (
        <div>
            <div className="signup_section ">
                <Container>
                    <Row>
                        <h1 className="pt-5">Sing Up</h1>
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
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
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
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="form-control"
                                                    type="password"
                                                    name="password"
                                                    id=""
                                                    placeholder="Your Password"
                                                />
                                            </div>
                                            <div className="form-group text-start px-3 py-2">
                                                <label
                                                    htmlFor="password"
                                                    className="label py-2 px-3"
                                                >
                                                    Confirm Password
                                                </label>
                                                <input
                                                    className="form-control"
                                                    type="password"
                                                    name="password"
                                                    id=""
                                                    placeholder="Confirm Password"
                                                />
                                            </div>
                                            <p>{errorElement}</p>
                                            <div className="submit_section px-3 pt-2">
                                                <input
                                                    onClick={handleSingUp}
                                                    type="submit"
                                                    className=" btn btn-primary submit py-2 w-100 rounded-pill"
                                                    value="Sign Up"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="singUp">
                                    <h5>
                                        Already have an account?{" "}
                                        <Link to={"/login"}> Log In</Link>
                                    </h5>
                                </div>
                                <div className="singUp_with_google px-5 mx-3 py-2">
                                    <button
                                        className="btn btn-light w-100 shadow py-2 rounded-pill"
                                        onClick={() => signInWithGoogle()}
                                    >
                                        {" "}
                                        Sing Up with{" "}
                                        <span className="text-primary">
                                            Google
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SingUp;
