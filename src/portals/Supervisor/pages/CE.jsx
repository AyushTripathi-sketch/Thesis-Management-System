import React, { useContext, useState, useEffect } from "react";
import { Button, Layout, Upload, message } from "antd";
import "../SupervisorApp.css";
import AuthContext from "../../../context/auth/authContext";
import { Selector, tableIcons } from "../../../CommonComponents";
import MaterialTable from "material-table";
import Spinner from "../../../CommonComponents/Spinner";
import axios from "axios";
const { Content } = Layout;

function Overview() {
  const authContext = useContext(AuthContext);
  const {user} = authContext;
  const {profId} = user.dataValues;

  const [isUploaded, setIsUploaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [scholars, setScholars] = useState([]);
  const [ceDetails, setCeDetails] = useState([]);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/professor/ceEligible/${profId}`);
      setScholars(res.data.scholars);
      setCeDetails(res.data.ceDetails);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData()
  }, []);
  const options =["Satisfactory","Unsatisfactory"];

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        setIsUploaded(true);
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
    { title: "Status",field:"status",
    render: (rowData) => (
      rowData.status==="Unsatisfactory"?
      <Selector
        id={rowData.id}
        list={options}
        placeholder="Unsatisfactory"
        style={{ width: "150px", height: "40px" }}
        // onChange={handleChange}
      ></Selector>:<p>Satisfactory</p>
    )
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
  let data = scholars.map( (element, index) => {
    return {
      id: element.scholar.admn,
      name: element.scholar.name,
      department: element.scholar.department,
      url: `/sp/mygroupoverview/${element.scholar.admn}`,
    };
  });
  
  if (loading) {
    return <Spinner />
  } else {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div className="container-fluid">
          <h4 style={{ color: "#334756", fontSize: "1.2rem", margin: "3% 0" }}>
            List of Scholars elligible for Comprehensive Examination
          </h4>
          <p>
            *Download{" "}
            <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph4.pdf">
              <b>PH4</b>
            </a>{" "}
            form and fill it to upload the result of Comprehensive
            Examination
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
}

export default Overview;
