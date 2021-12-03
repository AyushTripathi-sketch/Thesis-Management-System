import React from 'react';
import { Layout, Button} from 'antd';
import "../index.css";
import "antd/dist/antd.css"

const { Header } = Layout;

function Headerr(){
    return(
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <span><img src="https://moodle.iitism.ac.in/pluginfile.php/1/core_admin/logo/0x150/1633851416/IIT_ISM_Logo.png" alt="Indian Institute of Technology (ISM) Dhanbad" style={{height:"65px",display:"inline",marginLeft:"20px"}}/>
          <h3 style={{color:"#396EB0",display:"inline"}}>Indian Institute of Technology (ISM), Dhanbad</h3></span>
          <Button type="primary" danger style={{float: 'right', margin: '10px'}}>
            Log Out
          </Button>
        </Header>
    );
}

export default Headerr;
