import React from "react";
import { Layout, Button, Form, Upload } from "antd";
import "../../SupervisorApp.css";
import scholar from "../../images/scholar.png";
import { LineGraph } from "../../../../CommonComponents";
import { UploadOutlined } from "@ant-design/icons";
const { Content } = Layout;

function ScholarDetails() {
  const [form] = Form.useForm();

  function onFinish(fileList) {
    console.log(fileList);
  }
  function onFinishFailed(errorInfo) {
    console.log(errorInfo);
  }
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div className="student-profile py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card shadow-sm" style={{ marginBottom: "20px" }}>
                <div className="card-header bg-transparent text-center">
                  <img className="profile_img" src={scholar} alt="student dp" />
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
              <div style={{ height: "26px" }}></div>
              <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0">
                    <i className="far fa-clone pr-1"></i>Project Details
                  </h3>
                </div>
                <div className="card-body pt-0">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th width="30%">Title</th>
                        <td width="2%">:</td>
                        <td>XYZ</td>
                      </tr>
                      <tr>
                        <th width="30%">Start Date</th>
                        <td width="2%">:</td>
                        <td>98745XXXXX</td>
                      </tr>
                      <tr>
                        <th width="30%">Group Members</th>
                        <td width="2%">:</td>
                        <td>XYZ</td>
                      </tr>
                      <tr>
                        <th width="30%">DSC Chairman</th>
                        <td width="2%">:</td>
                        <td>XYZ</td>
                      </tr>
                      <tr>
                        <th width="30%">Co-Supervisor</th>
                        <td width="2%">:</td>
                        <td>XYZ</td>
                      </tr>
                      <tr>
                        <th width="30%">Examination</th>
                        <td width="2%">:</td>
                        <td>XYZ</td>
                      </tr>
                    </tbody>
                  </table>
                  <h5>
                    <u>Progress</u>
                  </h5>
                  <LineGraph />
                </div>
              </div>

              <div style={{ height: "26px" }}></div>
              <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0">
                    <i className="far fa-clone pr-1"></i>DSC Proposal
                  </h3>
                </div>
                <div className="card-body pt-0">
                  <p>
                    <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph2.pdf">
                      <b>PH2</b>
                    </a>{" "}
                    NEEDS TO BE SUBMITTED FOR THE CONSTITUTION OF DOCTORAL
                    SCRUTINY COMMITTEE (DSC)
                  </p>
                  <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      name="PH2form"
                      label="Upload Form"
                      max={1}
                      action="/upload.do"
                    >
                      <Upload>
                        <Button icon={<UploadOutlined />}>
                          Click to Upload!
                        </Button>
                      </Upload>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>

              <div style={{ height: "26px" }}></div>
              <div className="card shadow-sm">
                <div className="card-header bg-transparent border-0">
                  <h3 className="mb-0">
                    <i className="far fa-clone pr-1"></i>PROPOSE COURSES
                  </h3>
                </div>
                <div className="card-body pt-0">
                  <p>
                    
                    SUBMIT
                    <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph3.pdf">
                      <b> PH3</b>
                    </a>{" "} TO  PROPOSE COURSES FOR 2nd SEMESTER.
                  </p>
                  <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      name="PH3form"
                      label="Upload Form"
                      max={1}
                      fieldProps={{
                        name: "file",
                      }}
                      action="/upload.do"
                    >
                      <Upload>
                        <Button icon={<UploadOutlined />}>
                          Click to Upload!
                        </Button>
                      </Upload>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
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
                        <th width="30%">Area of Specialization (Chairmain)</th>
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
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default ScholarDetails;
