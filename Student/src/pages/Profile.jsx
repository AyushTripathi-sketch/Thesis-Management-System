import React from 'react'
import { Avatar, Layout} from 'antd';
import {
  AntDesignOutlined
} from '@ant-design/icons';
import "../index.css";
import "antd/dist/antd.css"
const {Content} = Layout;

function Profile(){
    return (
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
    );
}

export default Profile;