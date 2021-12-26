import React, { useState } from "react";
import { Layout } from "antd";
import "../StudentApp.css";
import { Session } from "../../../CommonComponents";
import MaterialTable from "material-table";
const { Content } = Layout;

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

function Courses(){
  const [showSession,setShowSession]=useState(true);
  function handleClick(props){
    setShowSession(false);
  }
    return (
      <Content style={{ margin: "25px 25px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 400 }}
        >
          <Session onClick={handleClick} style={{display:showSession?"inherit":"none",marginTop:"5%"}}/>
            <div className="container-fluid" style={{display:showSession?"none":"inherit"}} >
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
            </div>
          
        </div>
      </Content>
    );
  }

export default Courses;
