import React, { useState } from 'react';
import { Button,Layout,notification} from 'antd';
import "../index.css";
import "antd/dist/antd.css"
import {
  NotificationOutlined
} from '@ant-design/icons';

const { Header } = Layout;

const openNotification = placement => {
  notification.info({
    message: `Notification ${placement}`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    placement,
  });
};

function Headerr(){
  const [size, setSize] =useState(window.innerWidth)
  React.useEffect(() => {
    function handleResize() {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
  })
  console.log("Window",size);
  if(size < 767){
    return(
        <Header className="site-layout-background" style={{ padding: 0,height:"fit-content"}}>
          <span><img src="https://moodle.iitism.ac.in/pluginfile.php/1/core_admin/logo/0x150/1633851416/IIT_ISM_Logo.png" alt="Indian Institute of Technology (ISM) Dhanbad" style={{height:"65px",display:"inline",marginLeft:"20px"}}/>
          <h3 style={{color:"#396EB0",display:"inline"}}>IIT (ISM) Dhanbad</h3></span>
          <div style={{float: 'right', margin: '10px',width:'130px',height:'35px'}}>
        <Button onClick={openNotification}><NotificationOutlined /></Button>
        <Button type="primary" danger style={{float: 'right',marginTop:'15px'}}>
            <a href='/'>Log Out</a>
        </Button>
        </div>
        </Header>
    );
  }else{
    return(
      <Header className="site-layout-background" style={{ padding: 0}}>
        <span><img src="https://moodle.iitism.ac.in/pluginfile.php/1/core_admin/logo/0x150/1633851416/IIT_ISM_Logo.png" alt="Indian Institute of Technology (ISM) Dhanbad" style={{height:"65px",display:"inline",marginLeft:"20px"}}/>
        <h3 style={{color:"#396EB0",display:"inline"}}>Indian Institute of Technology (ISM), Dhanbad</h3></span>
        <div style={{float: 'right', margin: '10px',width:'130px',height:'35px'}}>
        <Button onClick={openNotification}><NotificationOutlined /></Button>
        <Button type="primary" danger style={{float: 'right',marginTop:'15px'}}>
            <a href='/'>Log Out</a>
        </Button>
        </div>
      </Header>
  );
  }
}

export default Headerr;
