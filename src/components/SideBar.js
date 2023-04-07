import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Card from "react-bootstrap/Card";

import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function SideBar() {
  const [role, setRole] = useState("");

  useEffect(() => {
    let res = sessionStorage.getItem("role");
    console.log(res);
    setRole(res);
  }, []);

  return (
    <>
      <div style={{ height: "735px" }}>
        <ListGroup variant="flush">
          <Card.Header>
            <h3 style={{ textAlign: "center" }}>SIDEBAR</h3>
          </Card.Header>

          <ListGroup.Item style={{ height: "50px" }}>
            <NavLink
              style={{ color: "black", textDecoration: "none" }}
              to="/dashboard"
            >
              <b>Dashboard</b>
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
            <NavDropdown
              title="LEADS"
              id="basic-nav-dropdown"
              style={{ height: "100px" }}
            >
              <NavDropdown.Item>
                <NavLink to="/dashboard">
                  <b>DisplayLeads</b>
                </NavLink>
              </NavDropdown.Item>
              {role === "salesRep" ? (
                <NavDropdown.Item>
                  <NavLink to="/lead-info">
                    <b>Add Lead</b>
                  </NavLink>
                </NavDropdown.Item>
              ) : (
                ""
              )}

              <NavDropdown.Item>
                <NavLink to="/display-lead">
                  <b>Manage lead</b>
                </NavLink>{" "}
              </NavDropdown.Item>
            </NavDropdown>
          </ListGroup.Item>

          <ListGroup.Item>
            <NavDropdown
              title="LEADS STATUS"
              id="basic-nav-dropdown"
              style={{ height: "100px" }}
            >
              <NavDropdown.Item>
                <NavLink style={{ textDecoration: "none" }} to="/dashboard">
                  InComing
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink style={{ textDecoration: "none" }} to="/dashboard">
                  Converted
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink style={{ textDecoration: "none" }} to="/dashboard">
                  Closed
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default SideBar;
