import React from "react";
import { Layout } from "antd";
import { Navbar, Headerr, SideBar, Footerr } from "../../CommonComponents";
import { Home, Profile, Overview, Thesis, RPS, CE } from "./components";
import { Routes, Route } from "react-router-dom";
import menu from "./menu";

function Supervisor() {
  return (
    <>
      <Navbar menu={menu} />
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar menu={menu} />
        <Layout className="site-layout">
          <Headerr />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mygroupoverview" element={<Overview />} />
            <Route path="/thesis" element={<Thesis />} />
            <Route path="/rps" element={<RPS />} />
            <Route path="/ce" element={<CE />} />
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}
export default Supervisor;
