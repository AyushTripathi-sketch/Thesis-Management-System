import React from "react";
import { Layout } from "antd";
import { Headerr, Footerr,SideBar, Navbar} from "../../CommonComponents";
import { AddScholar,AddSupervisor,AddExaminer,Dashboard,AddNew, Details, Scholar,Supervisor,Examiner, Thesis, ThesisDetails} from "./components";
import { Routes, Route } from "react-router-dom";
import menu from "./menu";

function Admin() {
  return (
    <>
      <Navbar menu={menu}/>
      <Layout style={{ minHeight: "100vh" }}>
      <SideBar menu={menu}/>
      <Layout className="site-layout">
        <Headerr />
        <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details />}/>
        <Route path="/details/scholar" element={<Scholar/>}/>
        <Route path="/details/supervisor" element={<Supervisor/>}/>
        <Route path="/details/examiner" element={<Examiner/>}/>
        <Route path="/details/thesis" element={<Thesis/>}/>
        <Route path="/details/thesis/thesis_id" element={<ThesisDetails/>}/>
        <Route path="/add_new" element={<AddNew />} />
        <Route path="/add_new/scholar" element={<AddScholar />} />
        <Route path="/add_new/supervisor" element={<AddSupervisor />} />
        <Route path="/add_new/examiner" element={<AddExaminer />} />
        </Routes>
        <Footerr />
      </Layout>
    </Layout>
    </>
  );
}

export default Admin;
