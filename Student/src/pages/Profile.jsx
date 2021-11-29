import React from 'react'
import { Avatar, Layout} from 'antd';
import {
  AntDesignOutlined
} from '@ant-design/icons';
import "../index.css";
import "antd/dist/antd.css"
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
              <div>
                <Avatar size={{
                  xs: 24,
                  sm: 32,
                  md: 40,
                  lg: 64,
                  xl: 80,
                  xxl: 100,
                }} icon={<AntDesignOutlined />} />
              </div>
            </div>
          </Content>
          <Footerr />
        </Layout>
      </Layout>
    );
}

export default Profile;