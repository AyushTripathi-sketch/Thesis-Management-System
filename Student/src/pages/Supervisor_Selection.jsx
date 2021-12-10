import React,{useState} from 'react';
import { Button, Layout, Modal} from "antd";
import { SideBar, Headerr, Footerr } from "../components";
import { Selector } from '../components';
import '../index.css';
import "antd/dist/antd.css"
import MaterialTable from 'material-table';

const {Content} = Layout;

function Supervisor(){
    const [submitted, setSubmit] = useState(false);
    const [isModalVisible,setModalVisible] = useState(false);
    const [priorityList, setPriorityList] = useState([])
    const noOfSupervisor = 5;
    const rows=[];
    const data=[
      {sno:"1",name:'Oliver Hansen'},
      {sno:"2",name:'Van Henry'}
    ]
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kell'
    ]
    const columns=[
      {title:"Priority Order",field:"sno",sorting:true},
      {title:"Supervisor",field:"name",sorting:false}
    ]
    for(var i=1;i<=noOfSupervisor;i++){
      rows.push({
          key:i,
      })
    }

    function handleChange(props){
      const index = priorityList.findIndex((o, i) => {
          if (o.sno === `${props.id}`) {
              o.name = props.value;
              return true;
          }
      });
      console.log(index);
      if(index===-1){
          priorityList.push({
              sno: `${props.id}`,
              name:props.value
          })
      }

      priorityList.sort((o1, o2) => o1.sno>o2.sno);

      setPriorityList(priorityList);
    }

    function showUploadDialog() {
      setModalVisible(true);
    }

    function handleOk() {
      setSubmit(true);
      setModalVisible(false);
    }

    function handleCancel() {
      setModalVisible(false);
    }
    const col=[
      {title:"Priority Order", field:"key"},
      {title:"Supervisor",
      render: (rowData)=>(
        <Selector id={rowData.key} list={names} onChange={handleChange}></Selector>
      )}
    ]
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="site-layout">
          <Headerr />
          <Content style={{ margin: "25px 25px" }}>
            <div
              className="site-layout-background text-center"
              style={{ padding: 24, minHeight: 400 }}
            >
              {/* display when submitted is false */}
              <div
                className="container-fluid"
                style={{ display: submitted ? "none" : "inherit" }}
              >
                <p style={{ textAlign: "left", fontSize: "1.1rem" }}>
                  <b>NOTE: </b>The DPGC convener in consultation with scholars
                  and faculty member will assign Supervisor and co-supervisor
                  (if any) to all eligible scholars of the department.
                </p>
                <br />
                <br />
                <MaterialTable
                  columns={col}
                  data={rows}
                  style={{ margin: "0.5% 20%" }}
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
                <Button type="primary" size="large" onClick={showUploadDialog}>
                  Submit
                </Button>
              </div>
              <Modal
                title="Confirm Supervisor Selection"
                visible={isModalVisible}
                okText="Confirm"
                onOk={handleOk}
                onCancel={handleCancel}
                centered={true}
              >
                <div
                  className="container-fluid"
                  style={{ textAlign: "center" }}
                >
                  <h4 style={{ color: "#1890FF" }}>Selected List</h4>
                  <MaterialTable
                    columns={columns}
                    data={priorityList}
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
                  ></MaterialTable>
                </div>
              </Modal>

              {/* display when submitted is true */}
              <div
                className="container-fluid"
                style={{
                  marginTop: "15%",
                  textAlign: "center",
                  display: submitted ? "inherit" : "none",
                }}
              >
                <h3>Response Submitted!</h3>
              </div>
            </div>
          </Content>
          <Footerr />
        </Layout>
      </Layout>
    );
}

export default Supervisor;