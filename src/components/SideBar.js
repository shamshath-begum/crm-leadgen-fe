import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function SideBar() {
  const [role, setRole] = useState("");
  let navigate = useNavigate();

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

          <ListGroup.Item style={{ height: "50px" }}>Dashboard</ListGroup.Item>
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
                <NavLink onClick={() => navigate("/incoming-leads")}>
                  InComing
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink onClick={() => navigate("/converted-leads")}>
                  Converted
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink onClick={() => navigate("/closed-leads")}>
                  Closed
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </ListGroup.Item>

          <ListGroup.Item>
            <NavDropdown title="REPORT" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Lead Report
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Fees Report
              </NavDropdown.Item>
            </NavDropdown>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default SideBar;
