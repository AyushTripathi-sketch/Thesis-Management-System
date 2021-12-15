import React from "react";
import { Button, Layout } from "antd";
import "../StudentApp.css";
const { Content } = Layout;

function CourseWaiver() {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div class="container-fluid" style={{ textAlign: "center" }}>
          <h3 style={{ color: "#334756", textAlign: "center" }}>
            Important Note for Course Waiver
          </h3>
          <br />
          <br />
          <p
            style={{
              color: "#334756",
              fontSize: "1.3rem",
              textAlign: "left",
            }}
          >
            The scholar will get waiver of the courses only if:
          </p>
          <ul style={{ textAlign: "left" }}>
            <li>
              <p style={{ fontSize: "1.0rem" }}>
                The course offered in the current semester of Ph.D. is matching
                (80-100%) with the course cleared in master program
              </p>
            </li>
            <li>
              <p style={{ fontSize: "1.0rem" }}>
                A minimum of 60% marks or equivalent grade has been obtained in
                that course in master program.
              </p>
            </li>
          </ul>
          <br />
          <br />
          <a href="/st/courses">
            <Button
              size="large"
              syle={{ align: "center" }}
              type="primary submit"
            >
              Proceed
            </Button>
          </a>
        </div>
      </div>
    </Content>
  );
}

export default CourseWaiver;
