import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
    const history = useNavigate();

    return (
        <header className={styles.header}>
            <p className="logo-header">TrustWork.AI</p>
            <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link
                    style={{ color: "black" }}
                    onClick={() => {
                        history("/talent");
                    }}
                    className="page-scroll"
                >
                    Hire Talent
                </Nav.Link>
                <Nav.Link
                    style={{ color: "black" }}
                    onClick={() => {
                        history("/payments");
                    }}
                >
                    Payments
                </Nav.Link>
                <Nav.Link
                    style={{ color: "black" }}
                    onClick={() => {
                        history("/contact");
                    }}
                >
                    Contact Us
                </Nav.Link>
            </Nav>
        </header>
    );
};

export default Header;
