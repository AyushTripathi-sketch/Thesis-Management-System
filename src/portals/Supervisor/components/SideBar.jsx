import React, {useEffect, useState} from 'react'
import { Layout, Menu} from 'antd';
import mainlogo from '../images/scholar.png'
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  AppstoreOutlined,
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons';
import "../SupervisorApp.css";
import "antd/dist/antd.css"

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideBar(){
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('/sp/home');

  function onCollapse(collapsed) {
    console.log(collapsed);
    setCollapsed(collapsed);
  }
  useEffect(() => {
    setSelectedKey(window.location.pathname)
  });
  return (
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" style={{padding:"0 25%"}}>
          <span>
            {collapsed && <img src={mainlogo} alt="" style={{height:"45px",}}/>}
            {!collapsed && <h1 style={{color:"white"}}>TMS</h1>}
          </span>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['/sp/home']} selectedKeys={[selectedKey]} mode="inline">
          <Menu.Item key="/sp/home" icon={<HomeOutlined />}>
            <Link to="/sp/home">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="/sp/profile" icon={<UserOutlined />}>
            <Link to="/sp/profile">
              My Profile
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
  );
}


export default SideBar;
