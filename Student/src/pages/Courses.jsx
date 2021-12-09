import React,{Component} from 'react'
import {Button, Layout} from 'antd';
import { SideBar, Headerr, Footerr } from "../components";
import bytesToSize from "../utils/Utility_Conversions";
import "../index.css";
import "antd/dist/antd.css"
import {
    UploadOutlined
  } from '@ant-design/icons';
import MaterialTable from "material-table";
const {Content} = Layout;

const data = [
    {sno:1, type:"S", code:"MCC502", name:"XYZ"},
    {sno:2, type:"x", code:"MCC501", name:"RST"}
]
const columns = [
    { title: "S No.", field: "sno" },
    { title: "Course Type", field: "type" },
    { title: "Course Code", field: "code"},
    { title: "Course Name", field: "name"}
  ];

export class Courses extends Component {
  constructor(props) {
    super(props);

    this.fileInputButton = React.createRef();

    this.state = {
      file: null,
      isSubmitted: false,
    };
  }

  onFileSelect(event) {
    this.setState({ file: event.target.files[0] });
  }

  onBrowseClick() {
    this.fileInputButton.current.click();
  }

  onSubmitClick(){
    this.setState({
      isSubmitted: true
    })
  }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="site-layout">
          <Headerr />
          <Content style={{ margin: "25px 25px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 400 }}
            >
              <div
                class="container-fluid"
                style={{ display: this.state.isSubmitted ? "none" : "inherit" }}
              >
                <p>
                  <b>Courses proposed in the current semester:</b>
                </p>
                <MaterialTable
                  title=""
                  columns={columns}
                  data={data}
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
                <h6
                  style={{
                    color: "#334756",
                    fontSize: "1.3rem",
                    textAlign: "left",
                  }}
                >
                  Important note:
                </h6>
                <p>
                  To avail course waiver you have to submit{" "}
                  <a href="https://www.iitism.ac.in/~academics/assets/acad_forms/ph6.pdf">
                    <b>PH1</b>
                  </a>{" "}
                  form within the prescribed deadline.
                </p>
                <p>
                  <b>Deadline:</b>
                </p>
                <Button
                  type="primary"
                  onClick={() => this.onBrowseClick()}
                  icon={<UploadOutlined />}
                >
                  FORM
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
                <Button
                  type="primary"
                  disabled={this.state.file ? false : true}
                  onClick={() => this.onSubmitClick()}
                >
                  Submit
                </Button>
              </div>
              <div
                className="container-fluid"
                style={{
                  marginTop: "15%",
                  textAlign: "center",
                  display: this.state.isSubmitted ? "inherit" : "none",
                }}
              >
                <h3>You have submitted your response!</h3>
              </div>
            </div>
          </Content>
          <Footerr />
        </Layout>
      </Layout>
    );
  }
}

export default Courses;

