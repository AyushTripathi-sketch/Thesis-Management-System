import React from "react";
import { Button, Layout, Upload, message } from "antd";
import "../SupervisorApp.css";
import "antd/dist/antd.css";
import { tableIcons } from "../../../CommonComponents";
import MaterialTable from "material-table";
const { Content } = Layout;

function Overview() {
  const props = {
    name: "file",
    action: "https://run.mocky.io/v3/47d903b5-36e6-49ab-af80-ed864af71c16",
    
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const columns = [
    { title: "Admission No.", field: "id" },
    { title: "Name", field: "name" },
    { title: "Department", field: "department" },
    {
      title: "Details",
      field: "url",
      render: (rowData) => <a href={rowData.url}>View</a>,
    },
    {
      title: "Upload Result",
      filed: "url",
      render: (rowData) => (
        <>
          <Upload {...props}>
            <Button type="primary">Upload</Button>
          </Upload>
        </>
      ),
    },
  ];
  const data = [
    {
      id: "19JE0215",
      name: "Ayush Tripathi",
      department: "Mathematics & Computing",
      url: "/st/profile",
    },
    {
      id: "19JE0215",
      name: "Mrinal Pathak",
      department: "Applied Physics",
      url: "/st/profile",
    },
    {
      id: "19JE0215",
      name: "Aditya Mishra",
      department: "Electrical",
      url: "/st/profile",
    },
    {
      id: "19JE0215",
      name: "Pattewar Darshan",
      department: "Mathematics & Computing",
      url: "/st/profile",
    },
  ];
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div className="container-fluid">
          <h4 style={{ color: "#334756", fontSize: "1.2rem", margin: "3% 0" }}>
            List of Scholars elligible for Research Proposal Seminar
          </h4>
          <p>
            *Download{" "}
            <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph5.pdf">
              <b>PH5</b>
            </a>{" "}
            form and fill it to upload the result of Research Proposal Seminar
          </p>
          <MaterialTable
            title="Thesis"
            columns={columns}
            data={data}
            icons={tableIcons}
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
          <div className="container text-center">
            <Button type="primary">Submit</Button>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Overview;
