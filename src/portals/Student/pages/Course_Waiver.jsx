import React, { useState } from "react";
import { Button, Layout, Form, Upload } from "antd";
import "../StudentApp.css";
import { UploadOutlined } from "@ant-design/icons";
import MaterialTable from "material-table";
const { Content } = Layout;

function CourseWaiver() {
  const [form] = Form.useForm();
  const [displayCourses,setDisplayCourses] = useState(false);
  function onFinish(values) {
    console.log("Success:", values);
  }

  function onFinishFailed(errorInfo) {
    console.log("Failed:", errorInfo);
  }

  function handleClick(){
    setDisplayCourses(true);
  }

  const data = [
    { sno: 1, type: "S", code: "MCC502", name: "XYZ" },
    { sno: 2, type: "x", code: "MCC501", name: "RST" },
  ];
  const columns = [
    { title: "S No.", field: "sno" },
    { title: "Course Type", field: "type" },
    { title: "Course Code", field: "code" },
    { title: "Course Name", field: "name" },
  ];
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div class="container-fluid" style={{ textAlign: "center",display:displayCourses?"none":"inherit" }}>
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
            <Button name="proceed" onClick={handleClick} size="large" syle={{ align: "center" }} type="primary">
              Proceed
            </Button>
        </div>
        <div
          class="container-fluid"
          style={{ display: displayCourses? "inherit" : "none" }}
        >
          <p>
            <b>Courses proposed in the current semester:</b>
          </p>
          <MaterialTable
            title=""
            columns={columns}
            data={data}
            options={{
              toolbar: false,
              paging: false,
              draggable: false,
              sorting: false,
              headerStyle: {
                backgroundColor: "#002140",
                color: "#FFFFFF",
                fontWeight: "bold",
                fontFamily: "Open Sans",
              },
            }}
          />
          <br />
          <br />
          <h6
            style={{
              color: "#334756",
              fontSize: "1.3rem",
              textAlign: "left",
            }}
          >
            Important note:
          </h6>
          <p>
            To avail course waiver you have to submit{" "}
            <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph6.pdf">
              <b>PH1</b>
            </a>{" "}
            form within the prescribed deadline.
          </p>
          <p>
            <b>Deadline:</b>
          </p>
          <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
              name="PH1form"
              label="Upload Form"
              max={1}
              fieldProps={{
                name: "file",
              }}
              action="/upload.do"
            >
              <Upload>
                <Button icon={<UploadOutlined />}>Click to Upload!</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Content>
  );
}

export default CourseWaiver;
