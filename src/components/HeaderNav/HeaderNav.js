import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";
import "../Style/Style.css";

const HeaderNav = () => {
    return (
        <div>
            {/* className="border-bottom border" */}
            <Navbar
                className="py-2"
                collapseOnSelect
                expand="lg"
                bg="dark"
                variant="dark"
            >
                <Container>
                    <Navbar.Brand href="#home">Farmi Organic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/products">Products</CustomLink>
                            <CustomLink to="/manageInventory">
                                Manage Inventory
                            </CustomLink>
                            <CustomLink to="/addItem">Add Item</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                        </Nav>
                        <Nav>
                            {/* <CustomLink to="/deets">Log In</CustomLink> */}
                            <CustomLink eventKey={2} to="/login">
                                Log In
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default HeaderNav;
