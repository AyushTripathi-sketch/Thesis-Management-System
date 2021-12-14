import React from "react";
import { Layout } from "antd";
import { SideBar, Headerr, Footerr } from "../components";
import "../SupervisorApp.css";
import "antd/dist/antd.css";
import scholar from "../images/scholar.png";
const { Content } = Layout;

function Profile() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <Headerr />
        <Content style={{ margin: "25px 25px" }}>
          <div className="student-profile py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="card shadow-sm"
                    style={{ marginBottom: "20px" }}
                  >
                    <div className="card-header bg-transparent text-center">
                      <img
                        className="profile_img"
                        src={scholar}
                        alt="student dp"
                      />
                      <h3>Name</h3>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="pr-1">Scholar ID : </strong>19DRXXXX
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Department : </strong>XYZ
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Branch : </strong>XYZ
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                      <h3 className="mb-0">
                        <i className="far fa-clone pr-1"></i>General Information
                      </h3>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th width="30%">Email</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Contact</th>
                            <td width="2%">:</td>
                            <td>98745XXXXX</td>
                          </tr>
                          <tr>
                            <th width="30%">Registration Status</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Qualify Degree</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">XYZ</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div style={{ height: "26px" }}></div>
                  <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                      <h3 className="mb-0">
                        <i className="far fa-clone pr-1"></i>DSC Details
                      </h3>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th width="30%">Name (Chairman)</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Designation (Chairman)</th>
                            <td width="2%">:</td>
                            <td>98745XXXXX</td>
                          </tr>
                          <tr>
                            <th width="30%">
                              Area of Specialization (Chairmain)
                            </th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Member Department</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Sister Department</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Supervisor</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Co-Supervisor (Internal)</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Co-Supervisor (External)</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div style={{ height: "26px" }}></div>
                  <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                      <h3 className="mb-0">
                        <i className="far fa-clone pr-1"></i>Other Information
                      </h3>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th width="30%">Supervisor</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">Date of Joining</th>
                            <td width="2%">:</td>
                            <td>dd-mm-yyyy</td>
                          </tr>
                          <tr>
                            <th width="30%">XYZ</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">XYZ</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                          <tr>
                            <th width="30%">XYZ</th>
                            <td width="2%">:</td>
                            <td>XYZ</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
        <Footerr />
      </Layout>
    </Layout>
  );
}

export default Profile;