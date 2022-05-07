import React from "react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const MyItem = () => {
    const [userProduct, setUserProduct] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        const email = user?.email;
        console.log(email);
        fetch(`http://cryptic-ridge-39056.herokuapp.com/product?email=${email}`)
            .then((res) => res.json())
            .then((data) => setUserProduct(data));
    }, []);
    return (
        <div>
            <h1>My Item {userProduct.length}</h1>
        </div>
    );
};

export default MyItem;
