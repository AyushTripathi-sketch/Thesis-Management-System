import React from "react";
import { Layout,Divider, Button, Select } from "antd";
import "../ConsentApp.css";
import scholar from "../../../images/scholar.png";

const { Content } = Layout;
const { Option } = Select;

function Consent() {
    function handleChange(value) {
        console.log(value);
      }
  return (
    <Content style={{ margin: "25px 25px" }}>
    <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 400 }}
      >
      <div style={{textAlign:'center'}}><h1>Consent Response Form</h1></div>
      <Divider />
      <div className="student-profile">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                <h3>Scholar Details</h3>
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
                <h3>Thesis Details</h3>
                  <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th width="30%">Title</th>
                            <td width="2%">:</td>
                            <td>Lorem Ipsum</td>
                          </tr>
                          <tr>
                            <th width="30%">Abstract</th>
                            <td width="2%">:</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
                          </tr>
                          <tr>
                            <th width="30%">Due Date of Giving Response</th>
                            <td width="2%">:</td>
                            <td>XX-XX-XXXX</td>
                          </tr>
                          <tr>
                            <th width="30%">Synopsis</th>
                            <td width="2%">:</td>
                            <td><Button>Click to View</Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <h1>Please Confirm Your Response</h1>
          <p>Select your response for the consent of evaluation of the respective thesis.</p>
          <div><h3>Your response : 
          <Select
                labelInValue
                defaultValue={{ value: 'Select' }}
                style={{ width: 120,marginLeft:'10px' }}
                onChange={handleChange}
            >
                <Option value="accepted">Accepted</Option>
                <Option value="unavailable">Unavailable</Option>
                <Option value="rejected">Rejected</Option>
            </Select>
            </h3>
            </div>
            <Divider />
            <div className="row">
                <div className="col" style={{textAlign:'left'}}>
                    <Button type="danger">Cancel</Button>
                </div>
                <div className='col' style={{textAlign:'right'}}>
                    <Button type="primary">I Confirm This Response</Button>
                </div>
            </div>
      </div>
    </Content>
  );
}

export default Consent;
