import React, { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import MaterialTable from "material-table";
import { MyProjectNav } from "../../components";
import { Selector, tableIcons } from "../../../../CommonComponents";
import Save from '@material-ui/icons/Save';
const { Content } = Layout;

//Phase 1
const data11 = [
  {
    id:1,
    sr: "1",
    action: "First meeting: Basics, agreements and getting ready",
    status:"Incomplete",
    date: "XX/XX/XXXX",
  },
  {
    id:2,
    sr: "2",
    action: "Peer Review - Project Plan",
    status:"Incomplete",
    date: "XX/XX/XXXX",
  },
  {
    id:3,
    sr: "3",
    action: "Submit Project Plan",
    status:"Incomplete",
    date: "XX/XX/XXXX",
  },
  {
    id:4,
    sr: "4",
    action: "Approval of Project Plan",
    status:"Incomplete",
    date: "XX/XX/XXXX",
  },
  {
    id:5,
    sr: "5",
    action:
      "Thesis text including: Research problem, aim and question(s) method",
      status:"Incomplete",
    date: "XX/XX/XXXX",
  },
];

//Phase 2
const data22 = [
  {
    id:6,
    sr: "1",
    action: "Data Collection",
    status:"Incomplete",
    date: "XX/XX/XXXX",
  },
];

//Phase 3
const data33 = [
  {
    id:7,
    sr: "1",
    action: "Thesis text including: results, discussion and conclusions",
    status:"Incomplete",
    date: "XX/XX/XXXX",
  },
];

//Phase 4
const data44 = [
  {
    id:8,
    sr: "1",
    action: "Submit Final Seminar Thesis",
    status:"Incomplete",
    date: "XX/XX/XXXX",
  },
  {
    id:9,
    sr: "2",
    action: "Final Seminar",
    status:"Incomplete",
    date: "XX/XX/XXXX",
  },
  {
    id:10,
    sr: "3",
    action: "Final Thesis - Revised version",
    status:"Incomplete",
    date: "XX/XX/XXXX",
  },
];

//Phase 5
const data55 = [
  { id:11,sr: "1", action: "Grading",status:"Incomplete",date: "XX/XX/XXXX" },
];

function ActivityPlan() {
  const options =["Incomplete","Completed"];
  const [data1,setdata1] = useState(data11);
  const [data2,setdata2] = useState(data22);
  const [data3,setdata3] = useState(data33);
  const [data4,setdata4] = useState(data44);
  const [data5,setdata5] = useState(data55);
  function handleChange(props){
    let found=false;
    if(!found){
      data1.find((item)=>{
        if(item.id===props.id){
          item.status=props.value;
          setdata1(data1);
          found = true;
          return true;
        }
      });
    }
    if(!found){
      data2.find((item)=>{
        if(item.id===props.id){
          item.status=props.value;
          setdata2(data2);
          found = true;
          return true;
        }
      });
    }
    if(!found){
      data3.find((item)=>{
        if(item.id===props.id){
          item.status=props.value;
          setdata3(data3);
          found = true;
          return true;
        }
      });
    }
    if(!found){
      data4.find((item)=>{
        if(item.id===props.id){
          item.status=props.value;
          setdata4(data4);
          found = true;
          return true;
        }
      });
    }
    if(!found){
      data5.find((item)=>{
        if(item.id===props.id){
          item.status=props.value;
          setdata5(data5);
          found = true;
          return true;
        }
      });
    }
    console.log(props.id,props.value);
  }
  function handleClick(event,rowData){
    console.log(rowData);
    alert("You saved the status");
  }
  const columns = [
    { title: "Sr No", field: "sr",editable: 'never'},
    { title: "Action", field: "action",editable: 'never'},
    { title: "Due Date", field: "date",editable: 'never'},
    { title: "Status",field:"status",
      render: (rowData) => (
        rowData.status==="Incomplete"?
        <Selector
          id={rowData.id}
          list={options}
          placeholder="Incomplete"
          style={{ width: "150px", height: "40px" }}
          onChange={handleChange}
        ></Selector>:<p>Completed</p>
      )
    },
  ];
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
          onClick: handleClick
          }
          ]}
            options={{
              toolbar: false,
              paging: false,
              draggable:false,
              sorting:false,
            actionsColumnIndex: -1
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
            icons={tableIcons} 
            actions={[
          {
          icon: Save,
          tooltip: 'Save Status',
          onClick: handleClick
          }
          ]}
            options={{
              toolbar: false,
              paging: false,
              sorting:false,
              draggable:false,
            actionsColumnIndex: -1
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
            icons={tableIcons} 
            actions={[
          {
          icon: Save,
          tooltip: 'Save Status',
          onClick: handleClick
          }
          ]}
            options={{
              toolbar: false,
              paging: false,
              sorting:false,
              draggable:false,
            actionsColumnIndex: -1
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
            icons={tableIcons} 
            actions={[
          {
          icon: Save,
          tooltip: 'Save Status',
          onClick: handleClick
          }
          ]}
            options={{
              toolbar: false,
              paging: false,
              sorting:false,
              draggable:false,
            actionsColumnIndex: -1
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
            icons={tableIcons} 
            actions={[
          {
          icon: Save,
          tooltip: 'Save Status',
          onClick: handleClick
          }
          ]}
            options={{
              toolbar: false,
              paging: false,
              sorting:false,
              draggable:false,
            actionsColumnIndex: -1
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
      </div>
    </Content>
  );
}

export default ActivityPlan;
