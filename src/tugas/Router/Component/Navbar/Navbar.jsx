import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <Container className="p-2">
                    <Navbar.Brand href="#home" className="d-flex">
                        <img
                            src="image/foto.jpg"
                            width="50"
                            height="50"
                            className="d-inline-block align-top image-brand"
                            alt=""
                        />
                        <span className="nama-brand">AINUTTAQIM ZAWAIT</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="navbar-togle">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}