import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr } from "../../CommonComponents";
import { Home } from "./components";
import { Routes, Route } from "react-router-dom";

function Examiner() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
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
