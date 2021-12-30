import React, {useEffect,useContext,useState } from "react";
import StepProgressComponent from "../components/StepProgressComponent";
import TableComp from "../components/TableComp";
import { Button, Layout, Modal } from "antd";
import bytesToSize from "../../../utils/Utility_Conversions";
import "../StudentApp.css";
import "antd/dist/antd.css";
import AuthContext from "../../../context/auth/authContext";
import Spinner from "../../../CommonComponents/Spinner";
import ProgressReportContext from "../../../context/progressReport/progressReportContext";
import axios from "axios";
const { Content } = Layout;

function ProgressReport(){
  
const authContext = useContext(AuthContext);
const progressReportContext = useContext(ProgressReportContext);
const {user} = authContext;
const {admn} = user.dataValues;
const {  
  ceRep,
  rpsRep,
  pssRep,
  thesisEvaluationRep,
  vivaVoiceRep,
  progressReport,getReports,getProgressDetails} = progressReportContext;
  const [applyPSSEnabled] = useState(true);
  const [fileInputButton] = useState(React.createRef());
  const [state,setState] = useState({ isModalVisible: false,file: null});
useEffect(()=>{
    getReports(admn,"ceRep");
    getReports(admn,"rpsRep");
    getReports(admn,"pssRep");
    getReports(admn,"thesisEvaluation");
    getReports(admn,"vivaVoiceRep");
    getProgressDetails(admn);
    //eslint-disable-next-line
  },[]);
  if(progressReport===null) return <Spinner/>
  const{comprehensive_exam_status,rps_status,fellowship_status,pss_status,phd_degree,viva_voice_status,thesis_submission_status,thesis_evaluation_status}=progressReport;
  let status = [comprehensive_exam_status,rps_status,fellowship_status,pss_status,thesis_submission_status,thesis_evaluation_status,viva_voice_status,phd_degree];
  let n=0,i;
  for(i=0;i<status.length-1;i++){
    if(status[i]==="S"||status[i]==="SRF"||status[i]==="submitted"||status[i]==="awarded"||status[i]==="evaluated"){
      n++;
    }
  }
  console.log(progressReport);
    function onFileSelect(e){
      setState({...state, file: e.target.files[0] });
    }

    function onBrowseClick(){
      fileInputButton.current.click();
    }
    
    function showUploadDialog(){
      setState({
        ...state,
        isModalVisible: true,
      });
    }

    function handleOk() {
      try {
        const formData = new FormData();
        formData.append('scholarId', admn);
        formData.append('supervisor', user.dataValues.supervisorId);
        formData.append('file', state.file);
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        };
        axios.post('http://localhost:3000/api/pssRequest/add', formData, config).then((res) => {
          setState({
            ...state,
            file: null,
            isModalVisible: false,
          });
        })
      } catch (error) {
        console.error(error);
      }
    }

    function handleCancel() {
      setState({
        ...state,
        isModalVisible: false,
      });
    }

    return (
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
                "Viva Voice",
                "PhD Degree"
              ]}
              accomplished={n}
            />
            <br />
            <br />
            <br />
            <TableComp
              progData={[
                {
                  serial: "1.",
                  type: "CE",
                  status:comprehensive_exam_status,
                  date: (comprehensive_exam_status==="S"?"hi":"-"),
                  file: 'files/course_waiver_requests/19DR001.pdf',
                },
                {
                  serial: "2.",
                  type: "RPS",
                  status:rps_status,
                  date: (rps_status==="S"?"hi":"-"),
                  file: 'files/course_waiver_requests/19DR001.pdf'
                },
                // {
                //   serial: "3.",
                //   type: "Fellowship Status",
                //   status: fellowshipStatus,
                //   date: (fellowshipStatus="SRF"?fellowshipRep.date:"-"),
                // },
                {
                  serial: "3.",
                  type: "PSS",
                  status:pss_status,
                  date: (pss_status==="S"?pssRep.date:"-"),
                },

                {
                  serial: "4.",
                  type: "Thesis Evaluation",
                  status:thesis_evaluation_status,
                  date: (thesis_evaluation_status==="evaluated"?thesisEvaluationRep.date:"-"),
                  file: 'files/course_waiver_requests/19DR001.pdf'
                },
                {
                  serial: "5.",
                  type: "Viva Voice",
                  status:viva_voice_status,
                  date: (viva_voice_status==="S"?vivaVoiceRep.date:"-"),
                  file: 'files/course_waiver_requests/19DR001.pdf'
                },
                // {
                //   serial: "5.",
                //   type: "PhD Degree",
                //   status: phdStatus,
                //   date: "31/01/2022",
                // },
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
                display:applyPSSEnabled ? "inherit" : "none",
              }}
            >
              <Button type="primary" onClick={() => showUploadDialog()}>
                Apply for Pre Submission Seminar
              </Button>
              <Modal
                title="Submit PSS Application"
                visible={state.isModalVisible}
                okText="Submit"
                onOk={() => handleOk()}
                onCancel={() => handleCancel()}
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
                    Journals (Q1 or Q2) and the entire draft of the thesis has
                    cleared the plagiarism check as prescribed and is certified
                    by the supervisor for submission of the thesis. The DSC will
                    forward your application (Form No. PH6) to the Academic
                    Section, if the thesis is ready in all respect.
                  </p>
                  <div style={{ paddingTop: "16px" }}>
                    <p style={{ fontSize: "large" }}>
                      Upload Filled Application:
                    </p>
                    <Button type="primary" onClick={() => onBrowseClick()}>
                      Choose File
                    </Button>
                    <input
                      type="file"
                      name="file"
                      onChange={(event) => onFileSelect(event)}
                      style={{ display: "none" }}
                      ref={fileInputButton}
                    />
                    <p style={{ paddingTop: "4px" }}>
                      {state.file
                        ? `${state.file.name} (${bytesToSize(
                            state.file.size
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
    );
  }

export default ProgressReport;
