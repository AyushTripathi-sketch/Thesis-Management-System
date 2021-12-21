import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr,SideBar} from "../../CommonComponents";
import { AddScholar,AddSupervisor,AddExaminer,Dashboard,Home,AddNew, Details } from "./components";
import { Routes, Route } from "react-router-dom";
import menu from "./menu";

function Admin() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar menu={menu}/>
      <Layout className="site-layout">
        <Headerr />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details />} />
        <Route path="/add_new" element={<AddNew />} />
          <Route path="/add_new/scholar" element={<AddScholar />} />
          <Route path="/add_new/supervisor" element={<AddSupervisor />} />
          <Route path="/add_new/examiner" element={<AddExaminer />} />
        </Routes>
        <Footerr />
      </Layout>
    </Layout>
  );
}

export default Admin;
