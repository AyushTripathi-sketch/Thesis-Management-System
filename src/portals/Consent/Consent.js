import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr } from "../../CommonComponents";
import { Consent } from "./components";
import { Routes, Route } from "react-router-dom";

function Examiner() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout className="site-layout">
          <Headerr />
          <Routes>
          <Route path="/thesis_id/examiner_id" element={<Consent />} />
          </Routes>
          <Footerr />
        </Layout>
      </Layout>
    </>
  );
}

export default Examiner;
