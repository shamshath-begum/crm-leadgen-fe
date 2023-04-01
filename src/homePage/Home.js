import React from "react";
import Body from "../components/Body";
import SideBar from "../components/SideBar";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <Card className="shadow mt-5 p-5 ">
          <div className="text-center">
            <h1>LEADS MANAGEMENT SYSTEM</h1>
            <br />
            <br />
          </div>
          <div className="row">
            <div className="col-lg-3">
              <Card className="shadow">
                <SideBar />
              </Card>
            </div>
            <div className="col-lg-9">
              <Card className=" shadow">
                <Body />
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Home;
