import React, { useState } from "react";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { toast } from 'react-toastify';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

  let handleClick = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${url}/users/login-user`, {
        email,
        password,
      });
      console.log(res);
      if (res.status === 200) {
        sessionStorage.setItem("token", res.data.token);
        sessionStorage.setItem("role", res.data.role);
        toast.success(res.data.message);
        navigate("/home");
      }
      console.log(res);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <>
      <div>
        <Card className="shadow col-lg-6 mx-auto mt-3">
          <div className="text-center mt-3">
            <h1>LEADS MANAGEMENT SYSTEM</h1>
            <h3>Welcome Back,Log In</h3>
            <h6>Hi,we are glad that you are back </h6>
          </div>
          <Form className="p-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              className="col-lg-12"
              variant="primary"
              onClick={(e) => handleClick(e)}
            >
              LOGIN
            </Button>
          </Form>
          <h5 style={{ textAlign: "center" }}>
            Don't have an Account?
            <NavLink to="/users/signup">
              <b>Sign Up</b>
            </NavLink>
          </h5>
          <h5 style={{ textAlign: "center" }}>
            Forgot Password?
            <NavLink to="/users/passwordreset">
              <b>Cliclk Here</b>
            </NavLink>
          </h5>
        </Card>
      </div>
    </>
  );
}

export default Login;
