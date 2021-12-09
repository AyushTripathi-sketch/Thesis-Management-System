import React, { Component } from "react";
import StepProgressComponent from "../components/StepProgressComponent";
import TableComp from "../components/TableComp";
import { Button, Layout, Modal } from "antd";
import { SideBar, Headerr, Footerr } from "../components";
import bytesToSize from "../utils/Utility_Conversions";
import "../index.css";
import "antd/dist/antd.css";
const { Content } = Layout;

export class ProgressReport extends Component {
  constructor(props) {
    super(props);

    this.applyPSSEnabled = true;
    this.fileInputButton = React.createRef();

    this.state = {
      isModalVisible: false,
      file: null,
    };
  }

  onFileSelect(event) {
    this.setState({ file: event.target.files[0] });
  }

  onBrowseClick() {
    this.fileInputButton.current.click();
  }

  showUploadDialog() {
    this.setState({
      isModalVisible: true,
    });
  }

  handleOk() {
    this.setState({
      isModalVisible: false,
    });
  }

  handleCancel() {
    this.setState({
      isModalVisible: false,
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="site-layout">
          <Headerr />
          <Content style={{ margin: "25px 25px" }}>
            <div>
              <div
                className="site-layout-backgroundm"
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "0",
                  backgroundColor: "white",
                  padding: "5%",
                  paddingTop: "0",
                }}
              >
                <StepProgressComponent
                  steps={[
                    "CE",
                    "RPS",
                    "JRF to SRF",
                    "PSS",
                    "Thesis Submission",
                    "Thesis Evaluation",
                    "Viva Voce",
                  ]}
                  accomplished={3}
                />
                <br />
                <br />
                <br />
                <TableComp
                  progData={[
                    {
                      serial: "1.",
                      type: "CE",
                      status: "S",
                      date: "21/09/2021",
                    },
                    {
                      serial: "2.",
                      type: "RPS",
                      status: "S",
                      date: "26/12/2021",
                    },
                    {
                      serial: "3.",
                      type: "Fellowship Status",
                      status: "SRF",
                      date: "31/01/2022",
                    },
                    {
                      serial: "4.",
                      type: "PSS",
                      status: "Pending",
                    },
                  ]}
                />
                <br />
                <div
                  style={{
                    marginTop: "24px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // eslint-disable-next-line no-dupe-keys
                    display: this.applyPSSEnabled ? "inherit" : "none",
                  }}
                >
                  <Button
                    type="primary"
                    onClick={() => this.showUploadDialog()}
                  >
                    Apply for Pre Submission Seminar
                  </Button>
                  <Modal
                    title="Submit PSS Application"
                    visible={this.state.isModalVisible}
                    okText="Submit"
                    onOk={() => this.handleOk()}
                    onCancel={() => this.handleCancel()}
                    centered={true}
                    width="40%"
                    style={{ minWidth: "500px", maxWidth: "900px" }}
                  >
                    <div>
                      <a
                        href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph6.pdf"
                        target="_blank"
                        style={{ fontSize: "large", fontWeight: "bold" }}
                        rel="noreferrer"
                      >
                        Click Here to download Form-PH6
                      </a>
                      <div style={{ height: "12px" }}></div>
                      <p>
                        IMPORTANT INSTRUCTIONS:
                        <br />
                        You may apply for a Pre-Submission Seminar only when at
                        least one research paper is accepted for
                        publication/published in SCI/SCIE/SSCI*/AHCI*/ABDC/MCI
                        Journals (Q1 or Q2) and the entire draft of the thesis
                        has cleared the plagiarism check as prescribed and is
                        certified by the supervisor for submission of the
                        thesis. The DSC will forward your application (Form No.
                        PH6) to the Academic Section, if the thesis is ready in
                        all respect.
                      </p>
                      <div style={{ paddingTop: "16px" }}>
                        <p style={{ fontSize: "large" }}>
                          Upload Filled Application:
                        </p>
                        <Button
                          type="primary"
                          onClick={() => this.onBrowseClick()}
                        >
                          Choose File
                        </Button>
                        <input
                          type="file"
                          name="file"
                          onChange={(event) => this.onFileSelect(event)}
                          style={{ display: "none" }}
                          ref={this.fileInputButton}
                        />
                        <p style={{ paddingTop: "4px" }}>
                          {this.state.file
                            ? `${this.state.file.name} (${bytesToSize(
                                this.state.file.size
                              )})`
                            : `No file chosen!`}
                        </p>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </div>
          </Content>
          <Footerr />
        </Layout>
      </Layout>
    );
  }
}

export default ProgressReport;
