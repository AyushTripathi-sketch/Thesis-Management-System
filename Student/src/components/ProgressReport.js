import React, { Component } from "react";
import StepProgressComponent from "./StepProgressComponent";
import TableComp from "./TableComp";

export class ProgressReport extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default ProgressReport;
