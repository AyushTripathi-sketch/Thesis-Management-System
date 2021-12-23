import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import MaterialTable from "material-table";
import { MyProjectNav } from "../../components";
const { Content } = Layout;

const columns = [
  { title: "Sr No", field: "sr" },
  { title: "Action", field: "action" },
  { title: "Status: Completed", field: "comp" },
  { title: "Status: Incomplete", field: "incom" },
  { title: "Due Date", field: "date" },
];

//Phase 1
const data1 = [
  {
    sr: "1",
    action: "First meeting: Basics, agreements and getting ready",
    comp: "Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan",
    incom: "NAN",
    date: "XX/XX/XXXX",
  },
  {
    sr: "2",
    action: "Peer Review - Project Plan",
    comp: "Incomplete",
    incom: "Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan",
    date: "XX/XX/XXXX",
  },
  {
    sr: "3",
    action: "Submit Project Plan",
    comp: "Incomplete",
    incom: "Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan",
    date: "XX/XX/XXXX",
  },
  {
    sr: "4",
    action: "Approval of Project Plan",
    comp: "Incomplete",
    incom: "Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan",
    date: "XX/XX/XXXX",
  },
  {
    sr: "5",
    action:
      "Thesis text including: Research problem, aim and question(s) method",
    comp: "Incomplete",
    incom: "Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan",
    date: "XX/XX/XXXX",
  },
];

//Phase 2
const data2 = [
  {
    sr: "1",
    action: "Data Collection",
    comp: "Incomplete",
    incom: "Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan",
    date: "XX/XX/XXXX",
  },
];

//Phase 3
const data3 = [
  {
    sr: "1",
    action: "Thesis text including: results, discussion and conclusions",
    comp: "Incomplete",
    incom: "Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan",
    date: "XX/XX/XXXX",
  },
];

//Phase 4
const data4 = [
  {
    sr: "1",
    action: "Submit Final Seminar Thesis",
    comp: "Incomplete",
    incom: "Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan",
    date: "XX/XX/XXXX",
  },
  {
    sr: "2",
    action: "Final Seminar",
    comp: "Incomplete",
    incom: "Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan",
    date: "XX/XX/XXXX",
  },
  {
    sr: "3",
    action: "Final Thesis - Revised version",
    comp: "Incomplete",
    incom: "Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan",
    date: "XX/XX/XXXX",
  },
];

//Phase 5
const data5 = [
  { sr: "1", 
  action: "Grading", 
  comp: "Incomplete", 
  incom: "Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan",
  date: "XX/XX/XXXX" },
];

function ActivityPlan() {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <MyProjectNav />
      <h3
        style={{
          background: "#002140",
          color: "white",
          marginTop: "20px",
          paddingLeft: "20px",
        }}
      >
        Activity Plan
      </h3>
      <div className="site-layout-background" style={{ padding: "20px" }}>
        <div>
          <h4
            style={{
              marginBottom: "0",
              paddingLeft: "20px",
              background: "#002140",
              color: "white",
            }}
          >
            Phase 1: Research Questions and Decision
          </h4>
          <MaterialTable
            title=""
            columns={columns}
            data={data1}
            options={{
              toolbar: false,
              paging: false,
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
        <div>
          <h4
            style={{
              marginBottom: "0",
              paddingLeft: "20px",
              background: "#002140",
              color: "white",
            }}
          >
            Phase 2: Implementation
          </h4>
          <MaterialTable
            title=""
            columns={columns}
            data={data2}
            options={{
              toolbar: false,
              paging: false,
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
        <div>
          <h4
            style={{
              marginBottom: "0",
              paddingLeft: "20px",
              background: "#002140",
              color: "white",
            }}
          >
            Phase 3: Result discussing and Conclusion
          </h4>
          <MaterialTable
            title=""
            columns={columns}
            data={data3}
            options={{
              toolbar: false,
              paging: false,
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
        <div>
          <h4
            style={{
              marginBottom: "0",
              paddingLeft: "20px",
              background: "#002140",
              color: "white",
            }}
          >
            Phase 4: Final Seminar
          </h4>
          <MaterialTable
            title=""
            columns={columns}
            data={data4}
            options={{
              toolbar: false,
              paging: false,
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
        <div>
          <h4
            style={{
              marginBottom: "0",
              paddingLeft: "20px",
              background: "#002140",
              color: "white",
            }}
          >
            Phase 5: Grading
          </h4>
          <MaterialTable
            title=""
            columns={columns}
            data={data5}
            options={{
              toolbar: false,
              paging: false,
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
      </div>
    </Content>
  );
}

export default ActivityPlan;