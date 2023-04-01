import React, { useEffect, useState } from "react";
import { url } from "../App";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";

function DashboardLeasdInfo() {
  let { id } = useParams();
  let token = sessionStorage.getItem("token");

  let [leads, setLeads] = useState([]);

  let navigate = useNavigate();

  let getData = async () => {
    try {
      let res = await axios.get(`${url}/display-lead`);

      if (res.status === 200) {
        setLeads(res.data.leads);
        console.log(res.data.leads);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      if (error.response.status === 401) handleLogout();
    }
  };

  let handleLogout = async () => {
    sessionStorage.clear();
    navigate("/users/login-user");
  };
  console.log(leads);
  useEffect(() => {
    if (token) {
      getData();
    } else {
      handleLogout();
    }
  }, []);

  let handleEdit = (e) => {
    navigate(`/manage-lead/${e._id}`);
  };

  let handleDelete = () => {};
  return (
    <>
      <div className="container-fluid">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>

              {/* <th>Email</th> */}
              {/* <th>Mobile</th> */}
              <th>Course</th>
              <th>Background</th>
              {/* <th>Profession</th> */}
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
                  <td>{e.firstName + e.lastName}</td>
                  {/* <td>{}</td> */}
                  {/* <td>{e.email}</td> */}
                  {/* <td>{e.mobile}</td> */}
                  <td>{e.course}</td>
                  <td>{e.background}</td>
                  {/* <td>{e.profession}</td> */}
                  <td>{e.preferredBatch}</td>
                  <td>{e.status}</td>
                  <td>
                    <Button onClick={(e) => handleEdit(e)}>Edit</Button>
                    &nbsp;&nbsp;
                    <Button>Delete</Button>
                  </td>
                  {/* <td>{new Date(e.createdAt).toLocaleDateString('en-UK')}</td> */}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button variant="danger" onClick={() => handleLogout()}>
          Logout
        </Button>
      </div>
    </>
  );
}

export default DashboardLeasdInfo;
