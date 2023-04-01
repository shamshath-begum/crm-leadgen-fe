import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../App";
import { useParams } from "react-router-dom";

function ForgotPassword() {
  let [password, setPassword] = useState("");
  let [message, setMessage] = useState(false);

  let { id, token } = useParams();

  const validUser = async () => {
    let res = await axios.get(`${url}/users/forgotpassword/${id}/${token}`);
    console.log(res);
    if (res.status === 201) {
      toast.success("Valid User");
    } else {
      toast.error("Invalid User");
    }
  };

  useEffect(() => {
    validUser();
  }, [token]);
  let handleClick = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${url}/users/${id}/${token}`, { password });
      console.log(res);
      if (res.status === 201) {
        setPassword("");
        setMessage(true);
      } else {
        toast.error(" Token expired generate new Token");
      }
    } catch (error) {
      toast.error(error.response.message);
    }
  };

  return (
    <>
      <div>
        <h1>hello</h1>
        <Card className="shadow col-lg-6 mx-auto mt-5">
          <div className="text-center mt-5">
            <h2>Enter Your New Password</h2>
          </div>
          {message ? (
            <p
              style={{ color: "red", textAlign: "center", fontWeight: "bold" }}
            >
              Password updated Successfully
            </p>
          ) : (
            " "
          )}
          <Form className="p-5">
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
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
              {" "}
              Send
            </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default ForgotPassword;
