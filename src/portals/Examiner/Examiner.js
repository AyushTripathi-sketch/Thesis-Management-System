import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr, Navbar, SideBar } from "../../CommonComponents";
import { EvaluationForm, Home, HonorariumForm } from "./components";
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
          <Route path="/eval" element={<EvaluationForm />} />
          <Route path="/hon" element={<HonorariumForm />} />
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}

export default Examiner;
