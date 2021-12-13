import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import mainlogo from "../images/scholar.png";
import { Link } from "react-router-dom";
import {
  FileOutlined,
  TeamOutlined,
  HomeOutlined,
  UserOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import "../SupervisorApp.css";
import "antd/dist/antd.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("/sp/home");

  function onCollapse(collapsed) {
    console.log(collapsed);
    setCollapsed(collapsed);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setSelectedKey(window.location.pathname);
  });
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" style={{ padding: "0 25%" }}>
        <span>
          {collapsed && (
            <img src={mainlogo} alt="" style={{ height: "45px" }} />
          )}
          {!collapsed && <h1 style={{ color: "white" }}>TMS</h1>}
        </span>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["/sp/home"]}
        selectedKeys={[selectedKey]}
        mode="inline"
      >
        <Menu.Item key="/sp/home" icon={<HomeOutlined />}>
          <Link to="/sp/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="/sp/profile" icon={<UserOutlined />}>
          <Link to="/sp/profile">My Profile</Link>
        </Menu.Item>
        <Menu.Item key="/sp/mygroupoverview" icon={<TeamOutlined />}>
          <Link to="/sp/mygroupoverview">My Group</Link>
        </Menu.Item>
        <Menu.Item key="/sp/thesis" icon={<FileOutlined />}>
          <Link to="/sp/thesis">Submitted Thesis</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="More">
          <Menu.Item key="/sp/ce">
            <Link to="/sp/ce">Comprehensive examination</Link>
          </Menu.Item>
          <Menu.Item key="/sp/rps">
            <Link to="/sp/rps">Research Proposal Seminar</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SideBar;
