import React, { useContext } from "react";
import { Layout, Divider } from "antd";
import "../SupervisorApp.css";
import scholar from "../images/scholar.png";
import AuthContext from "../../../context/auth/authContext";
const { Content } = Layout;

function Profile() {
  const authContext = useContext(AuthContext);
  const {user} = authContext;
  const {profId,name, department, branch, email, photo} = user.dataValues;
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div className="container">
          <div style={{ width: "100%", height: "auto", padding: "1%" }}>
            <div>
              <img
                style={{
                  margin: "0 5% 2% 0",
                  float: "left",
                  width: "170px",
                  height: "150 px",
                }}
                src={ photo ? photo : scholar }
                alt="Scholar"
              />
            </div>
            <div style={{ margin: "0 auto" }}>
              <p>
                <strong>Professor ID :</strong>{profId}
              </p>
              <p>
                <strong>Name :</strong>{name}
              </p>
              <p>
                <strong>Department :</strong>{department}
              </p>
              <p>
                <strong>Email :</strong>{email}
              </p>
            </div>
          </div>
          <Divider />
          <h2>
            <u>
              <strong>Upcoming/Expected Events</strong>
            </u>
          </h2>
          <div className="container">
            <div>
              <p>
                <strong>Date</strong> : Upcoming Comprehensive Exam
              </p>
              <p>
                <strong>Date </strong> : Upcoming Research Proposal seminar
              </p>
              <p>
                <strong>Date </strong> : Pre-submission Seminar
              </p>
              <p>
                <strong>Date </strong> : Thesis Submission
              </p>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Profile;
