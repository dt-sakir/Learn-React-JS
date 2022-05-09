import React, {Component} from 'react'
import {Outlet, Link} from "react-router-dom";
import {Nav, Navbar, Container} from "react-bootstrap";

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">eGen</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="table">Table</Nav.Link>
                            <Nav.Link as={Link} to="others">Others</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Outlet/>
            </div>
        )
    }
}
