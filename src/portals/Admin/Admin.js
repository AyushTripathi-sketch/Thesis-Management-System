import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr } from "../../CommonComponents";
import { AddScholar,AddSupervisor,AddExaminer } from "./components";
import { Routes, Route } from "react-router-dom";

function Admin() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <Headerr />
        <Routes>
          <Route path="/addscholar" element={<AddScholar />} />
          <Route path="/addsupervisor" element={<AddSupervisor />} />
          <Route path="/addexaminer" element={<AddExaminer />} />
        </Routes>
        <Footerr />
      </Layout>
    </Layout>
  );
}

export default Admin;
