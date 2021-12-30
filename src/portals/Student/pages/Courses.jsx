import React, { useState, useContext } from "react";
import { Layout } from "antd";
import AuthContext from "../../../context/auth/authContext";
import CoursesContext from "../../../context/courses/coursesContext";
import "../StudentApp.css";
import { Session } from "../../../CommonComponents";
import MaterialTable from "material-table";
import Spinner from "../../../CommonComponents/Spinner";
const { Content } = Layout;

const data = [
  { sno: 1, type: "S", code: "MCC502", name: "XYZ" },
  { sno: 2, type: "x", code: "MCC501", name: "RST" },
];
const columns = [
  { title: "S No.", field: "sno" },
  { title: "Course Code", field: "course_code" },
  { title: "Course Name", field: "course_name" },
  { title: "Department", field: "department" },
];

function Courses(){
  const [showSession,setShowSession]=useState(true);

  const authContext = useContext(AuthContext);
  const coursesContext = useContext(CoursesContext);
  const {
    courses,
    loading,
    error,
    loadCourses,
  } = coursesContext;
  const admn = authContext.user.dataValues.admn;

  function handleClick(props){
    console.log(props);
    setShowSession(false);
    loadCourses(admn, props.Semester.value, props.Year.value);
  }

  if (loading && !showSession) {
    return <Spinner/>
  }

    return (
      <Content style={{ margin: "25px 25px" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24 }}
        >
          <Session onClick={handleClick} style={{display:showSession?"inherit":"none",marginTop:"5%"}}/>
            <div className="container-fluid" style={{display:showSession?"none":"inherit"}} >
            <MaterialTable
            title=""
            columns={columns}
            data={courses}
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
