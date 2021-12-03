import React from 'react'
import { Avatar, Layout, Divider} from 'antd';
import {
  AntDesignOutlined
} from '@ant-design/icons';
import "../index.css";
import "antd/dist/antd.css";
import scholar from "../images/scholar.png";
import { Headerr,Footerr, SideBar } from '../components';
const {Content} = Layout;

function Profile(){
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar/>  
        <Layout className="site-layout">
          <Headerr />
          <Content style={{ margin: '25px 25px'}}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 400 }}>
            <div className="container">
		 	<div style={{width: "100%",height: 'auto', padding: '1%'}}>
		 		<div>
		 			<img style={{margin: '0 5% 2% 0', float: 'left', width: '170px', height: '150 px'}} src={scholar} alt="Scholar" />
		 		</div>
		 		<div style={{margin: '0 auto'}}>
		 			<p><strong>Admission No :</strong>19DRXXXX</p>
		 			<p><strong>Name :</strong>XYZ ABC</p>
		 			<p><strong>Department :</strong>LOREM IPSUM</p>
		 			<p><strong>Branch :</strong>ASTRONOMY</p>
		 			<p><strong>Email :</strong>19DRXXXX.astro@iitism.ac.in</p>
		 		</div>
		 	</div>
  <Divider />
  <h2><u><strong>Upcoming/Expected Events</strong></u></h2>
	     <div className="container">
		 		<div>
		 			<p><strong>Date</strong> : Upcoming Comprehensive Exam</p>
		 			<p><strong>Date </strong> : Upcoming Research Proposal seminar</p>
		 			<p><strong>Date </strong> : Pre-submission Seminar</p>
		 			<p><strong>Date </strong> : Thesis Submission</p>
		 		</div>
	</div>
	
            </div>
            </div>
          </Content>
          <Footerr />
        </Layout>
      </Layout>
    );
}

export default Profile;