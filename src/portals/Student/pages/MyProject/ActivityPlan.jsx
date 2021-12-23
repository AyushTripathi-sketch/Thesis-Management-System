import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import MaterialTable from "material-table";
import { MyProjectNav } from "../../components";
import { tableIcons } from "../../../../CommonComponents";
import Save from '@material-ui/icons/Save';
const { Content } = Layout;

const columns = [
  { title: "Sr No", field: "sr",editable: 'never'},
  { title: "Action", field: "action",editable: 'never'},
  { title: "Due Date", field: "date",editable: 'never'},
  { title: "Status", field: "status", lookup: {0: 'Incomplete',1:'Complete'}},
];

//Phase 1
const data1 = [
  {
    sr: "1",
    action: "First meeting: Basics, agreements and getting ready",
    status: 1,
    date: "XX/XX/XXXX",
  },
  {
    sr: "2",
    action: "Peer Review - Project Plan",
    status: 0,
    date: "XX/XX/XXXX",
  },
  {
    sr: "3",
    action: "Submit Project Plan",
    status: 0,
    date: "XX/XX/XXXX",
  },
  {
    sr: "4",
    action: "Approval of Project Plan",
    status: 0,
    date: "XX/XX/XXXX",
  },
  {
    sr: "5",
    action:
      "Thesis text including: Research problem, aim and question(s) method",
    status: 0,
    date: "XX/XX/XXXX",
  },
];

//Phase 2
const data2 = [
  {
    sr: "1",
    action: "Data Collection",
    status: 0,
    date: "XX/XX/XXXX",
  },
];

//Phase 3
const data3 = [
  {
    sr: "1",
    action: "Thesis text including: results, discussion and conclusions",
    status: 0,
    date: "XX/XX/XXXX",
  },
];

//Phase 4
const data4 = [
  {
    sr: "1",
    action: "Submit Final Seminar Thesis",
    status: 0,
    date: "XX/XX/XXXX",
  },
  {
    sr: "2",
    action: "Final Seminar",
    status: 0,
    date: "XX/XX/XXXX",
  },
  {
    sr: "3",
    action: "Final Thesis - Revised version",
    status: 0,
    date: "XX/XX/XXXX",
  },
];

//Phase 5
const data5 = [
  { sr: "1", action: "Grading", status: 0, date: "XX/XX/XXXX" },
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
            icons={tableIcons} 
            actions={[
          {
          icon: Save,
          tooltip: 'Save Status',
          onClick: (event, rowData) => alert("You saved the status")
          }
          ]}
            options={{
              toolbar: false,
              paging: false,
            actionsColumnIndex: -1
            }}
            style={{ boxShadow: "none" }}
            cellEditable={{
          onCellEditApproved: (newValue) => {
          return new Promise((resolve) => {
            console.log('newValue: ' + newValue);
            setTimeout(resolve, 1000);
          });
        }
      }}
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
            icons={tableIcons} 
            actions={[
          {
          icon: Save,
          tooltip: 'Save Status',
          onClick: (event, rowData) => alert("You saved the status")
          }
          ]}
            options={{
              toolbar: false,
              paging: false,
            actionsColumnIndex: -1
            }}
            style={{ boxShadow: "none" }}
            cellEditable={{
          onCellEditApproved: (newValue) => {
          return new Promise((resolve) => {
            console.log('newValue: ' + newValue);
            setTimeout(resolve, 1000);
          });
        }
      }}
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
            icons={tableIcons} 
            actions={[
          {
          icon: Save,
          tooltip: 'Save Status',
          onClick: (event, rowData) => alert("You saved the status")
          }
          ]}
            options={{
              toolbar: false,
              paging: false,
            actionsColumnIndex: -1
            }}
            style={{ boxShadow: "none" }}
            cellEditable={{
          onCellEditApproved: (newValue) => {
          return new Promise((resolve) => {
            console.log('newValue: ' + newValue);
            setTimeout(resolve, 1000);
          });
        }
      }}
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
            icons={tableIcons} 
            actions={[
          {
          icon: Save,
          tooltip: 'Save Status',
          onClick: (event, rowData) => alert("You saved the status")
          }
          ]}
            options={{
              toolbar: false,
              paging: false,
            actionsColumnIndex: -1
            }}
            style={{ boxShadow: "none" }}
            cellEditable={{
          onCellEditApproved: (newValue) => {
          return new Promise((resolve) => {
            console.log('newValue: ' + newValue);
            setTimeout(resolve, 1000);
          });
        }
      }}
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
            icons={tableIcons} 
            actions={[
          {
          icon: Save,
          tooltip: 'Save Status',
          onClick: (event, rowData) => alert("You saved the status")
          }
          ]}
            options={{
              toolbar: false,
              paging: false,
            actionsColumnIndex: -1
            }}
            style={{ boxShadow: "none" }}
            cellEditable={{
          onCellEditApproved: (newValue) => {
          return new Promise((resolve) => {
            console.log('newValue: ' + newValue);
            setTimeout(resolve, 1000);
          });
        }
      }}
          />
        </div>
      </div>
    </Content>
  );
}

export default ActivityPlan;
