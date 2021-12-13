import React, { useState } from "react";
import { Layout } from "antd";
import "../../SupervisorApp.css";
import "antd/dist/antd.css";
import { SideBar, Headerr, Footerr,Session,tableIcons } from "../../components";
import MaterialTable from "material-table";
const { Content } = Layout;

function Overview() {
  const [showSession,setShowSession]=useState(true);
  const columns=[
    {title:"Admission No.",field:"id"},
    {title:"Name",field:"name"},
    {title:"Department",field:"department"},
    {title:"Details",filed:"url",render:(rowData)=>(
      <a href={rowData.url}>View</a>
    )},
  ];
  const data=[
    {id:"19JE0215",name:"Ayush Tripathi",department:"Mathematics & Computing",url:"/st/profile"},
    {id:"19JE0215",name:"Mrinal Pathak",department:"Applied Physics",url:"/st/profile"},
    {id:"19JE0215",name:"Aditya Mishra",department:"Electrical",url:"/st/profile"},
    {id:"19JE0215",name:"Pattewar Darshan",department:"Mathematics & Computing",url:"/st/profile"}
  ]
  function handleClick(props){
    setShowSession(false);
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <Headerr />
        <Content style={{ margin: "25px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 400 }}
          >
            <Session onClick={handleClick} style={{display:showSession?"inherit":"none"}}/>
            <div className="container-fluid" style={{display:showSession?"none":"inherit"}} >
            <MaterialTable title="Scholars" columns={columns} data={data}
              icons={tableIcons}
              options={{
                    // toolbar: false,
                    search:true,
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
        <Footerr />
      </Layout>
    </Layout>
  );
}

export default Overview;