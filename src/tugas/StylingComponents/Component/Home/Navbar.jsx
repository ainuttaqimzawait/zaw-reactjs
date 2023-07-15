import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";

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
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}