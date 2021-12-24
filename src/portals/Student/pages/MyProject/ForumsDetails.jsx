import React from "react";
import { Layout, Divider,Button } from "antd";
const { Content } = Layout;

function ForumsDetails() {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background container-fluid"
        style={{ padding: 24, minHeight: 400 }}
      >
      <div className="row">
        <div className='col-2' style={{padding:'10px'}}>
            <Button type="primary"><a href='/st/myprojectForums'>Back</a></Button>
        </div>
        <div className="col-10">
            <h2>Title will be written here</h2>
            <p><b>By: Aditya</b><br /></p>
        </div>
        </div>
        <Divider />
        <div className="row" style={{borderBottom:'1px solid black'}}>
        <div className='col-2' style={{padding:'10px'}}>
            
        </div>
        <div className="col-10">
            <p>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
        </div>
        </div>
        <h2><u>Comments</u></h2>
        
        <div className="rounded border" style={{marginTop:'10px', padding:'10px'}}>
            <p><b>Aditya</b></p>
            <p>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
        </div>
        <div className="rounded border" style={{marginTop:'10px', padding:'10px'}}>
            <p><b>Darshan</b></p>
            <p>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
        </div>
      </div>
    </Content>
  );
}

export default ForumsDetails;
