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
import "../StudentApp.css";
import "antd/dist/antd.css"

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideBar(){
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('/st/home');

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
        <Menu theme="dark" defaultSelectedKeys={['/st/home']} selectedKeys={[selectedKey]} mode="inline">
          <Menu.Item key="/st/home" icon={<HomeOutlined />}>
            <Link to="/st/home">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="/st/profile" icon={<UserOutlined />}>
            <Link to="/st/profile">
              My Profile
            </Link>
          </Menu.Item>
          <Menu.Item key="#" icon={<DesktopOutlined />}>
            <Link to="#">
              Courses
            </Link>
          </Menu.Item>
          <Menu.Item key="/st/myprojectOverview" icon={<DesktopOutlined />}>
            <Link to="/st/myprojectOverview">
              My Project
            </Link>
          </Menu.Item>
          <Menu.Item key="/st/progress-report" icon={<PieChartOutlined />}>
            <Link to="/st/progress-report">
              Progress Report
            </Link>
          </Menu.Item>
          <SubMenu key="sub2" icon={<FileOutlined />} title="Thesis">
            <Menu.Item key="/st/thesis-submission">
              <Link to="/st/thesis-submission">
                Submission
              </Link>
            </Menu.Item>
            <Menu.Item key="7">Completed</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<AppstoreOutlined />} title="More">
            <Menu.Item key="/st/forms">
              <Link to="/st/forms">
                Forms
              </Link>
            </Menu.Item>
            <Menu.Item key="/st/course-waiver">
              <Link to="/st/course-waiver">
                Course Waiver
              </Link>
            </Menu.Item>
            <Menu.Item key="/st/supervisor-selection">
              <Link to="/st/supervisor-selection">
                Supervisor selection
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
  );
}


export default SideBar;
