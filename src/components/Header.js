import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: "rgb(10, 108, 236)" }}>
        <Container>
          <Navbar.Brand>
            <h2 style={{ color: "white", textAlign: "center" }}>
              LEADS MANAGEMENT SYSTEM
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/users/signup" style={{ color: "white" }}>
                SIGNUP
              </Nav.Link>
              <Nav.Link href="/users/login-user" style={{ color: "white" }}>
                LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
