import React from 'react';
import 'antd/dist/antd.css';
import { Button, Space} from 'antd';
import MaterialTable from "material-table";
import { Link } from 'react-router-dom';

const data = [
  {project:'Lorem Ipsum', 
  date: 'Jan 2,2021', 
  students:'Aditya Mishra, Ayush Tripathi, Mrinal Pathak, Pattawar Darshan', 
  sup:'XYZ',
  coSup:'ABC',
  dscc:'QWERTY',
  exam:'Feb 2,2022'
}
]

const columns = [
  { title: "My Project", field: "project" },
  { title: "Start Date", field: "date" },
  { title: "Students", field: "students"},
  { title: "Supervisor", field: "sup"},
  { title: "Co-Supervisor", field: "coSup"},
  { title: "DSC Chairman", field: "dscc"},
  { title: "Examination", field: "exam"}
];

function MyProjectNav() {
  return (
    <div>
    <Space style={{marginBottom: '10px'}}>
      <Button type="primary">
        <Link to='/st/myprojectOverview'>
          Overview
        </Link>
      </Button>
      <Button type="primary">
        <Link to='/st/myprojectActivityPlan'>
          Activity Plan
        </Link>
      </Button>
      <Button type="primary">
        <Link to='/st/myprojectForums'>
          Forums
        </Link>
      </Button>
      <Button type="primary">
        <Link to='/st/myprojectFinal'>
         Final Seminar
        </Link>
      </Button>
    </Space>

    <MaterialTable title="" columns={columns} data={data}
                    options={{
                        toolbar:false , paging:false
                        }}
                />
      </div>
  );
}

export default MyProjectNav;