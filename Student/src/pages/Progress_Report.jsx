import React, { Component } from "react";
import StepProgressComponent from "../components/StepProgressComponent";
import TableComp from "../components/TableComp";
import { Layout} from 'antd';
import "../index.css";
import "antd/dist/antd.css";
const { Content } = Layout;

export class ProgressReport extends Component {
  render() {
    return (
      <Content style={{ margin: '25px 25px'}}>
        <div>
        <div className="site-layout-backgroundm" style={{position:"relative", display:"flex", flexDirection:"column", minWidth:"0", backgroundColor:"white", padding:"5%", paddingTop:"0"}}>
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
        <br/>
        <br/>
        <br/>
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
        </div>
      </div>
      </Content>
    );
  }
}

export default ProgressReport;
