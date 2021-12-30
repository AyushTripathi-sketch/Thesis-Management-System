import React from "react";
import { Divider, Layout, Button, Upload, message  } from "antd";
import scholar from "../../images/scholar.png";
import MaterialTable from "material-table";
import { tableIcons } from "../../../../CommonComponents";
const { Content } = Layout;



function ThesisDetails() {
    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text",
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    const columns = [
        { title: "S No.", field: "sno" },
        { title: "Application for", field: "purpose" },
        { title: "Form No", field: "code" },
        {
          title: "Download",
          field: "url",
          render: (rowData) => (
            <a href={rowData.url}>
              <img
                alt=""
                class="icon"
                src="https://img.icons8.com/fluent/48/000000/pdf.png"
              />
            </a>
          ),
        },
      {
        title: "Upload Form",
        filed: "url",
        render: (rowData) => (
          <>
            <Upload {...props}>
              <Button type="primary">Upload</Button>
            </Upload>
          </>
        ),
      },
    ];
    const data = [
      {
        sno: 1,
        purpose: "COPYRIGHT AND CONSENT FORM",
        code: "PH10",
        url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph10.pdf",
    
      },
      {
        sno: 2,
        purpose: "CERTIFICATE FOR CLASSIFIED DATA",
        code: "PH11",
        url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph11.pdf",
    
      },
      {
        sno: 3,
        purpose: "CERTIFICATE REGARDING ENGLISH CHECKING",
        code: "PH12",
        url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph12.pdf",
    
      },
      {
        sno: 4,
        purpose: "CERTIFICATE FROM THE SUPERVISOR(S)",
        code: "PH13",
        url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph13.pdf",
    
      },
      {
        sno: 5,
        purpose: "Format for Submission of Suggested Panel of Examiners for Evaluation of Ph.D. Thesis",
        code: "PH8",
        url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph8.pdf",
    
      },
    ];
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: "10px", height: "100%" }}
      >
      <div className="text-center">
      <h2>Thesis Submission</h2>
      </div>
        <Divider />
        <div className="student-profile py-4">
            <div className="container" style={{marginTop:"0"}}>
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
                            <th width="30%">Synopsis</th>
                            <td width="2%">:</td>
                            <td><Button>Click to View</Button></td>
                          </tr>
                          <tr>
                            <th width="30%">Thesis</th>
                            <td width="2%">:</td>
                            <td><Button>Click to View</Button></td>
                          </tr>
                          <tr>
                            <th width="30%">Reports</th>
                            <td width="2%">:</td>
                            <td><Button href="/sp/thesis/results/Adm_No">Click to View</Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center">
        <MaterialTable
            title="Thesis"
            columns={columns}
            data={data}
            icons={tableIcons}
            options={{
              toolbar: false,
              paging: false,
              draggable: false,
              sorting: false,
              headerStyle: {
                backgroundColor: "#002140",
                color: "#FFFFFF",
                fontWeight: "bold",
                fontFamily: "Open Sans",
              },
            }}
          />
          <br />
          <br />
            <Button type="primary">Submit</Button>
          </div>
      </div>
    </Content>
  );
}

export default ThesisDetails;
