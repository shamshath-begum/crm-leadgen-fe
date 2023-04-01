import React, { useState } from "react";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { toast } from 'react-toastify';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";

function LeadInfo() {
  let [firstName, setfirstName] = useState("");
  let [lastName, setlastName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [course, setCourse] = useState("");
  let [background, setBackground] = useState("");
  let [profession, setProfession] = useState("");
  let [preferredBatch, setPreferredBatch] = useState("");
  let [status, setStatus] = useState("");
  let [createdBy, setCreatedBy] = useState("");

  let navigate = useNavigate();
  let token = sessionStorage.getItem("token");

  let handleClick = async () => {
    try {
      let res = await axios.post(
        `${url}/lead-info`,
        {
          firstName,
          lastName,
          email,
          mobile,
          course,
          background,
          profession,
          preferredBatch,
          status,
          createdBy,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(res)
      // navigate('/display-lead')
      if (res.status === 201) {
        // sessionStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/dashboard");
      }
      console.log(res);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => setfirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              onChange={(e) => setlastName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile"
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter course"
              onChange={(e) => setCourse(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Background</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter background"
              onChange={(e) => setBackground(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Profession</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter profession"
              onChange={(e) => setProfession(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>PreferredBatch</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Batch"
              onChange={(e) => setPreferredBatch(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter status"
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>CreatedBy</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter creaters Name"
              onChange={(e) => setCreatedBy(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={() => handleClick()}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default LeadInfo;
