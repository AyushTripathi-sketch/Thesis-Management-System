import React,{useContext, useEffect, useState} from "react";
import { Layout } from "antd";
import AuthContext from "../../../context/auth/authContext";
import DscContext from "../../../context/dsc/dscContext";
import ProfessorContext from "../../../context/professor/professorContext";
import "../StudentApp.css";
import "antd/dist/antd.css";
import scholar from "../images/scholar.png";
import Spinner from "../../../CommonComponents/Spinner";
const { Content } = Layout;

function Profile() {
  const authContext = useContext(AuthContext);
  const dscContext = useContext(DscContext);
  const professorContext = useContext(ProfessorContext);
  const {dscDetails,chairman,members,getDscDetails} = dscContext;
  const {supervisorDetails,chairmanDetails,membersDetails,co_supervisorDetails,getProfDetails} = professorContext;
  const {user} = authContext;
  const {admn,name,photo,department,email,branch,contact,fellowship_status,qualification_degree,status,registration_date,dscId,supervisorId,co_supervisorId,address} = user.dataValues;
  useEffect(()=>{
    if(dscId!==null)getDscDetails(dscId);
    if(supervisorId!==null)getProfDetails(supervisorId,"supervisorDetails");
    if(co_supervisorId!==null)getProfDetails(co_supervisorId,"co_supervisorDetails");
    //eslint-disable-next-line
  },[]);
  useEffect(()=>{
      if(chairman!==null) getProfDetails(chairman,"chairmanDetails");
      if(members.length!==0) members.forEach(member=>{if(member!==null)getProfDetails(member,"membersDetails")});
  },[chairman,members]);

  if(supervisorId!==null||co_supervisorId!==null){
  if(supervisorDetails===null||co_supervisorDetails===null) return <Spinner/>
  if(dscId!==null){
  if(dscDetails===null||chairmanDetails===null||members.length===0)return <Spinner/>
  }
  }

  return (
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
                        src={photo}
                        alt="student dp"
                      />
                      <h3>{name}</h3>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="pr-1">Scholar ID : </strong>{admn}
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Department : </strong>{department}
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Branch : </strong>{branch}
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
                            <td>{email}</td>
                          </tr>
                          <tr>
                            <th width="30%">Contact</th>
                            <td width="2%">:</td>
                            <td>{contact}</td>
                          </tr>
                          <tr>
                            <th width="30%">Registration Status</th>
                            <td width="2%">:</td>
                            <td>{status}</td>
                          </tr>
                          <tr>
                            <th width="30%">Qualify Degree</th>
                            <td width="2%">:</td>
                            <td>{qualification_degree}</td>
                          </tr>
                          <tr>
                            <th width="30%">Fellowship Status</th>
                            <td width="2%">:</td>
                            <td>{fellowship_status}</td>
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
                            <td>{dscId!==null?chairmanDetails.name:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">Designation (Chairman)</th>
                            <td width="2%">:</td>
                            <td>{dscId!==null?dscDetails.designation:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">
                              Area of Specialization (Chairmain)
                            </th>
                            <td width="2%">:</td>
                            <td>{dscId!==null?dscDetails.areaofspecialization:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">Member Department</th>
                            <td width="2%">:</td>
                            <td>{dscId!==null?dscDetails.memberdepartment:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">Sister Department</th>
                            <td width="2%">:</td>
                            <td>{dscId!==null?dscDetails.sisterdepartment:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">Supervisor</th>
                            <td width="2%">:</td>
                            <td>{supervisorId!==null?supervisorDetails.name:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">Co-Supervisor</th>
                            <td width="2%">:</td>
                            <td>{co_supervisorId!==null?co_supervisorDetails.name:"NA"}</td>
                          </tr>
                          <tr>
                            <th width="30%">Members</th>
                            <td width="2%">:</td>
                            <td>{dscId!==null?membersDetails.map(member=>{return(member.name+",")}):"NA"}</td>
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
                            <th width="30%">Date of Joining</th>
                            <td width="2%">:</td>
                            <td>{registration_date}</td>
                          </tr>
                          <tr>
                            <th width="30%">Address</th>
                            <td width="2%">:</td>
                            <td>{address}</td>
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

  );
}

export default Profile;
