import React, { useEffect, useState } from "react";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";

function DisplayLeads() {
  let token = sessionStorage.getItem("token");

  let [leads, setLeads] = useState([]);

  let navigate = useNavigate();

  let getData = async () => {
    console.log("hello");
    try {
      let res = await axios.get(`${url}/display-lead`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 200) {
        setLeads(res.data.leads);
        toast.success("Lead Added Successfully");

        console.log(res.data.leads);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.status === 401) handleLogout();
    }
  };

  let deleteLead = async (id) => {
    try {
      let res = await axios.delete(`${url}/delete/${id}`);
      if (res.status === 200) {
        console.log(res);
        getData();
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  let handleLogout = async () => {
    sessionStorage.clear();
    navigate("/users/login-user");
  };

  useEffect(() => {
    if (token) {
      getData();
    } else {
      handleLogout();
    }
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Course</th>
              <th>Background</th>
              <th>Profession</th>
              <th>PreferredBatch</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {leads?.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.email}</td>
                  <td>{e.mobile}</td>
                  <td>{e.course}</td>
                  <td>{e.background}</td>
                  <td>{e.profession}</td>
                  <td>{e.preferredBatch}</td>
                  <td>{e.status}</td>
                  <td>
                    <Button onClick={() => navigate(`/manage-lead/${e._id}`)}>
                      Edit
                    </Button>
                    &nbsp;&nbsp;
                    <Button onClick={() => deleteLead(e._id)}>Delete</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button variant="danger" onClick={() => navigate("/home")}>
          Home
        </Button>
      </div>
    </>
  );
}

export default DisplayLeads;
