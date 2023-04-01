import React, { useEffect, useState } from "react";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";

function ManageLead() {
  let { id } = useParams();

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

  // let token = sessionStorage.getItem("token");

  let navigate = useNavigate();
  // let [leads, setLeads] = useState([]);
  // let [inputdata, setInputData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   mobile: "",
  //   course: "",
  //   background: "",
  //   profession: "",
  //   preferredBatch: "",
  //   status: "",
  //   createdBy: "",
  // });
  // let setInputValue = (e) => {
  //   let { name, value } = e.target;
  //   setInputData({ ...inputdata, [name]: value });
  // };

  let handleClick = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.put(`${url}/manage-lead/${id}`, {
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
      });
      console.log(res);

      if (res.status === 200) {
        // sessionStorage.setItem("token", res.data.token);
        toast.success(res.data.message);
        navigate("/home");
      }
      console.log(res);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  let getData = async () => {
    try {
      let res = await axios.get(`${url}/manage-lead/${id}`);

      if (res.status === 200) {
        setfirstName(res.data.lead.firstName);
        setlastName(res.data.lead.lastName);
        setEmail(res.data.lead.email);
        setMobile(res.data.lead.mobile);
        setCourse(res.data.lead.course);
        setBackground(res.data.lead.background);
        setCreatedBy(res.data.lead.createdBy);
        setPreferredBatch(res.data.lead.preferredBatch);
        setProfession(res.data.lead.profession);
        setStatus(res.data.lead.status);
        console.log(res.data.lead);
      }
      // navigate("/home");
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.status === 401) handleLogout();
    }
  };

  let handleLogout = async () => {
    sessionStorage.clear();
    navigate("/users/login-user");
  };

  useEffect(() => {
    if (id) {
      getData();
    } else {
      handleLogout();
    }
  }, [id]);

  return (
    <>
      <div className="container-fluid">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Background</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter background"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Profession</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter profession"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>PreferredBatch</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Batch"
              value={preferredBatch}
              onChange={(e) => setPreferredBatch(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Created By</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter creaters Name"
              value={createdBy}
              onChange={(e) => setCreatedBy(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={(e) => handleClick(e)}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default ManageLead;
