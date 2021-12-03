import React from 'react'
import {Button, Layout} from 'antd';
import "../index.css";
import "antd/dist/antd.css"
import {
    UploadOutlined
  } from '@ant-design/icons';
import MaterialTable from "material-table";
const {Content} = Layout;

const data = [
    {sno:1, type:"S", code:"MCC502", name:"XYZ"},
    {sno:2, type:"x", code:"MCC501", name:"RST"}
]
const columns = [
    { title: "S No.", field: "sno" },
    { title: "Course Type", field: "type" },
    { title: "Course Code", field: "code"},
    { title: "Course Name", field: "name"}
  ];

function Courses(){
    return (
          <Content style={{ margin: '25px 25px'}}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 400 }}>
              <div class="container-fluid">
                <p><b>Courses proposed in the current semester:</b></p>
                <MaterialTable title="" columns={columns} data={data}
                    options={{
                        toolbar:false , paging:false
                        }}
                />
                <br/>
                <br/>
                <h6 style={{color:"#334756",fontSize:"1.3rem",textAlign:"left"}}>Important note:</h6>
                <p>To avail course waiver you have to submit <a href="#"><b>PH1</b></a> form within the prescribed deadline.</p>
                <p><b>Deadline:</b></p>
              </div>
              <div class="container-fluid">
                  <Button type="primary" icon={<UploadOutlined/>}>FORM</Button>
              </div>
              </div>
          </Content>
    )
}

export default Courses;