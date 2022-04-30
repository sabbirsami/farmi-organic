import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{
                    fontSize: "20px",
                    padding: " 10px 20px",
                    fontWeight: "400",
                    textDecoration: "none",
                    color: match ? "white" : "black",
                    backgroundColor: match ? " #DD3B4B" : "",
                    borderRadius: match ? " 30px" : "none",
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;
