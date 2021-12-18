import React, { useState } from "react";
import { Layout } from "antd";
import { tableIcons } from "../../../../CommonComponents";
import "../../SupervisorApp.css";
import MaterialTable from "material-table";
const { Content } = Layout;

function MyProject() {
  const [showSession,setShowSession]=useState(true);
  const columns=[
    {title:"Title",field:"title",filed:"url"},
    {title:"Group Members",field:"gm"},
    {title:"DSC Chairman",field:"dsc"},
    {title:"Co-Supervisor",field:"cos"},
    {title:"Start date",field:"sd"},
    {title:"Examination",field:"ex"},
    {title:"Details",filed:"url",render:(rowData)=>(
      <a href={rowData.url}>View</a>
    )},
  ];
  const data=[
    {title:'XYZ',
    gm:'A,B,C,D',
    dsc:'xyz',
    cos:'abc',
    sd:'date',
    ex:'date',
    url:'/sp/myproject/project_id'
  }]
  
  return (
        <Content style={{ margin: "25px 25px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 400 }}
          >
            <div className="container-fluid" >
            <MaterialTable title="My Project" columns={columns} data={data}
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
  );
}

export default MyProject;