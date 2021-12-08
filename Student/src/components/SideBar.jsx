import React from 'react'
import { Layout, Menu} from 'antd';
import mainlogo from '../images/scholar.png'
import { Link } from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  AppstoreOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import "../index.css";
import "antd/dist/antd.css"

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{padding:"0 25%"}}>
            <span>
              {collapsed && <img src={mainlogo} alt="" style={{height:"45px",}}/>}
              {!collapsed && <h1 style={{color:"white"}}>TMS</h1>}
            </span>
          </div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">
                Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              <Link to="/profile">
                My Profile
              </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <Link to="#">
                Courses
              </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<DesktopOutlined />}>
              <Link to="/myprojectOverview">
                My Project
              </Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<PieChartOutlined />}>
              <Link to="/progress-report">
                Progress Report
              </Link>
            </Menu.Item>
            <SubMenu key="sub2" icon={<FileOutlined />} title="Thesis">
              <Menu.Item key="6">New</Menu.Item>
              <Menu.Item key="7">Pending</Menu.Item>
              <Menu.Item key="8">Completed</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<AppstoreOutlined />} title="More">
              <Menu.Item key="9">
                <Link to="/forms">
                  Forms
                </Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="course-waiver">
                  Course Waiver
                </Link>
              </Menu.Item>
              <Menu.Item key="11">
                <Link to="/supervisor-selection">
                  Supervisor selection
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
    );
  }
}

export default SideBar;
