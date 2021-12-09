import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { SideBar, Headerr, Footerr, MyProjectNav } from '../../components'
const { Content } = Layout;

function ActivityPlan() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <Headerr />
        <Content style={{ margin: "25px 25px" }}>
          <MyProjectNav />
          <div></div>
        </Content>
        <Footerr />
      </Layout>
    </Layout>
  );
}

export default ActivityPlan;
