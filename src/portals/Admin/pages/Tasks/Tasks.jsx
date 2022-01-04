import React from "react";
import { Layout, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
function Tasks() {

  const { Meta } = Card;
  
  return (
    <Content style={{ margin: "25px 25px" }}>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={6}>
      <Link to={'/ad/tasks/upload_form'}>
      <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px"}}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description="Upload Form"
      style={{fontSize:'2vw !important'}}
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={6}>
  <Link to={'/ad/tasks/ce'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description="Comprehensive Examination Eligibility list"
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={6}>
  <Link to={'/ad/tasks/rps'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description="Research Proposal Seminar Eligibility list"
    />
  </Card>
  </Link>
  </Col>
  
  <Col span={6}>
  <Link to={'/ad/tasks/pss'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description="Pre-Submission Seminar Eligibility list"
    />
  </Card>
  </Link>
  </Col>

  <Col span={6}>
  <Link to={'/ad/tasks/request_thesis_consent'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description="Request for Evaluation Consent"
    />
  </Card>
  </Link>
  </Col>

  <Col span={6}>
  <Link to={'/ad/tasks/request_thesis_evaluation'}>
  <Card
      hoverable
      className="rounded"
    style={{ maxWidth: 200, textAlign: 'center', margin:"10px" }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
  >
    <Meta
      description="Request for Thesis Evaluation"
    />
  </Card>
  </Link>
  </Col>

    </Row>
    </Content>
  );
}

export default Tasks;
