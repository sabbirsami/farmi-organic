import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import "../Style/Style.css";

const HeaderNav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="warning" variant="white">
                <Container>
                    <Navbar.Brand href="#home" className="fs-7 text-dark">
                        Farmi Organic
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="products">Products</CustomLink>
                        </Nav>
                        <Nav>
                            <CustomLink to="/login">Log in</CustomLink>
                            {/* <CustomLink eventKey={2} href="#memes">
                                Dank memes
                                
                            </CustomLink> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNav;
