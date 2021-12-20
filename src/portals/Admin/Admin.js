import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr,SideBar} from "../../CommonComponents";
import { AddScholar,AddSupervisor,AddExaminer,Dashboard } from "./components";
import { Routes, Route } from "react-router-dom";
import menu from "./menu";

function Admin() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar menu={menu}/>
      <Layout className="site-layout">
        <Headerr />
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
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
