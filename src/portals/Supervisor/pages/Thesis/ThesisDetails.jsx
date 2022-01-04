import React, { useState,useContext,useEffect }  from "react";
import { useParams } from 'react-router-dom';
import { Divider, Layout, Button, Upload, message, Spin  } from "antd";
import scholar from "../../images/scholar.png";
import MaterialTable from "material-table";
import AssignedThesisContext from "../../../../context/assignedThesis/assignedThesisContext";
import ScholarContext from "../../../../context/scholar/scholarContext";
import Spinner from "../../../../CommonComponents/Spinner";
import { tableIcons } from "../../../../CommonComponents";
import axios from "axios";
import { useRef } from "react";
const { Content } = Layout;



function ThesisDetails() {
  const{Adm_No,id} = useParams();
  const scholarContext = useContext(ScholarContext);
  const assignedThesisContext = useContext(AssignedThesisContext);
  const { scholarDetails, getScholarDetails } = scholarContext;
  const{assignedThesis,getAssignedThesisDetailsById,checked} = assignedThesisContext;
  const [isUploaded, setIsUploaded] = useState(false);
  const [downloading, setdownloading] = useState(false);
  const [fileLists, setfileLists] = useState([]);
  const upRef1 = useRef(null);
  const upRef2 = useRef(null);
  const upRef3 = useRef(null);
  const upRef4 = useRef(null);
  const upRef5 = useRef(null);
  const upRefs = [upRef1, upRef2, upRef3, upRef4, upRef5];

  useEffect(()=>{
    getAssignedThesisDetailsById(id);
    getScholarDetails(Adm_No);
  },[]);
  if(assignedThesis===null || scholarDetails===null) return <Spinner/>

  const { name, photo, department, branch } = scholarDetails;
  const { title, abstract, file, synopsis } = assignedThesis.draft;

  const onSynopsisDownloadClick = async () => {
    setdownloading(true);
    try {
      let synopsisFile = await axios.get(`/api/draft/downloadFile/${synopsis}`, {responseType: 'blob'});
      synopsisFile = URL.createObjectURL(new Blob([synopsis.data], {type:synopsisFile.data.type}));
      let tempLink = document.createElement('a');
      tempLink.href = synopsisFile;
      tempLink.setAttribute('download', `${Adm_No}-Synopsis`);
      tempLink.click();
    } catch (error) {
      console.log(error);
      alert('Some error occurred!')
    } finally {
      setdownloading(false);
    }
  }

  const onThesisDownloadClick = async () => {
    setdownloading(true);
    try {
      let thesis = await axios.get(`/api/draft/downloadFile/${file}`, {responseType: 'blob'});
      thesis = URL.createObjectURL(new Blob([thesis.data], {type:thesis.data.type}));
      let tempLink = document.createElement('a');
      tempLink.href = thesis;
      tempLink.setAttribute('download', `${Adm_No}-Thesis`);
      tempLink.click();
    } catch (error) {
      console.log(error);
      alert('Some error occurred!');
    } finally {
      setdownloading(false);
    }
  }

  const onFormsSubmit = () => {
    if (fileLists.length === 5) {
      upRefs.forEach(e => console.log(e))
      setIsUploaded(true);
    }
  };

  const handleFormsChange = ({ file, fileList }) => {
    setfileLists([...fileLists, file]);
  };
    
  const columns = [
      { title: "S No.", field: "sno" },
      { title: "Application for", field: "purpose" },
      { title: "Form No", field: "code" },
      {
        title: "Download",
        field: "url",
        render: (rowData) => (
          <a href={rowData.url} target={'_blank'}>
            <img
              alt=""
              class="icon"
              src="https://img.icons8.com/fluent/48/000000/pdf.png"
            />
          </a>
        ),
      },
    {
      title: "Upload Form",
      filed: "url",
      render: (rowData) => (
        <>
        { isUploaded ? <div>Uploaded</div> :
          <Upload ref={upRefs[rowData.sno-1]} onChange={handleFormsChange} beforeUpload={() => false} multiple={false}>
            <Button disabled={isUploaded} type="primary">Upload</Button>
          </Upload>
        }
        </>
      ),
    },
  ];
    const data = [
      {
        sno: 1,
        purpose: "COPYRIGHT AND CONSENT FORM",
        code: "PH10",
        url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph10.pdf",
    
      },
      {
        sno: 2,
        purpose: "CERTIFICATE FOR CLASSIFIED DATA",
        code: "PH11",
        url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph11.pdf",
    
      },
      {
        sno: 3,
        purpose: "CERTIFICATE REGARDING ENGLISH CHECKING",
        code: "PH12",
        url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph12.pdf",
    
      },
      {
        sno: 4,
        purpose: "CERTIFICATE FROM THE SUPERVISOR(S)",
        code: "PH13",
        url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph13.pdf",
    
      },
      {
        sno: 5,
        purpose: "Format for Submission of Suggested Panel of Examiners for Evaluation of Ph.D. Thesis",
        code: "PH8",
        url: "https://www.iitism.ac.in/~academics/assets/acad_forms/ph8.pdf",
    
      },
    ];
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: "10px", height: "100%" }}
      >
      <div className="text-center">
      <h2>Thesis Submission</h2>
      </div>
        <Divider />
        <div className="student-profile py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div
                    className="card shadow-sm"
                    style={{ marginBottom: "20px" }}
                  >
                    <div className="card-header bg-transparent text-center">
                      <img
                        className="profile_img"
                        src={photo ? photo : scholar}
                        alt="student dp"
                      />
                      <h3>{name}</h3>
                    </div>
                    <div className="card-body">
                      <p className="mb-0">
                        <strong className="pr-1">Scholar ID : </strong>{Adm_No}
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Department : </strong>{department}
                      </p>
                      <p className="mb-0">
                        <strong className="pr-1">Branch : </strong>{branch}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card shadow-sm">
                    <div className="card-header bg-transparent border-0">
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <th width="30%">Title</th>
                            <td width="2%">:</td>
                            <td>{title}</td>
                          </tr>
                          <tr>
                            <th width="30%">Abstract</th>
                            <td width="2%">:</td>
                            <td>{abstract}</td>
                          </tr>
                          <tr>
                            <th width="30%">Synopsis</th>
                            <td width="2%">:</td>
                            <td><Button onClick={onSynopsisDownloadClick}>Click to View</Button></td>
                          </tr>
                          <tr>
                            <th width="30%">Thesis</th>
                            <td width="2%">:</td>
                            <td><Button onClick={onThesisDownloadClick}>Click to View</Button></td>
                          </tr>
                          <tr>
                            <th width="30%">Reports</th>
                            <td width="2%">:</td>
                            <td><Button href={`/sp/thesis/results/${Adm_No}/${id}`}>Click to View</Button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center">
        <MaterialTable
            title="Thesis"
            columns={columns}
            data={data}
            icons={tableIcons}
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
            <Button disabled={isUploaded || fileLists.length != 5} type="primary" onClick={onFormsSubmit}>Submit</Button>
          </div>
      </div>
    </Content>
  );
}

export default ThesisDetails;
