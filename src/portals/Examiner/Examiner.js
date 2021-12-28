import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr, SideBar, Navbar } from "../../CommonComponents";
import { Home } from "./components";
import { Routes, Route } from "react-router-dom";
import menu from "./menu";

function Examiner() {
  return (
    <>
      <Navbar menu={menu} />
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar menu={menu} />
        <Layout className="site-layout">
          <Headerr />
          <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}

export default Examiner;
