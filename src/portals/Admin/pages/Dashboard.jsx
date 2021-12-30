import React from "react";
import { Layout, Card, Col, Row } from "antd";
import { ColumnGraph,PieGraph } from "../components";

const { Content } = Layout;
const titleStyle = {backgroundColor:"#1A374D",color:"white"};
const innertitleStyle = {backgroundColor:"#2D4263",color:"white"};
function Dashboard() {
  
  return (
    <Content style={{ margin: "0 25px" }}>
      <div className="container">
        <Card title="Pre Submision Seminar" style={{ minHeight: 300 }} headStyle={titleStyle}>
          <Row gutter={[40, 40]}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Card
                type="inner"
                title="Applications"
                style={{ minHeight: 200 }}
                headStyle={innertitleStyle}
              >
                Inner Card content
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Card type="inner" title="Expected" style={{ minHeight: 200 }} headStyle={innertitleStyle}>
                Inner Card content
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Card type="inner" title="Conducted" style={{ minHeight: 200 }} headStyle={innertitleStyle}>
                Inner Card content
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="container">
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card title="Comprehensive Examination" style={{ minHeight: 450 }} headStyle={titleStyle}>
              <Row gutter={[40, 40]}>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card type="inner" title="Expected" style={{ minHeight: 250 }} headStyle={innertitleStyle}>
                    Inner Card content
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card type="inner" title="Conducted" style={{ minHeight: 250 }} headStyle={innertitleStyle}>
                    Inner Card content
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card title="Thesis Submitted" bordered={true} headStyle={titleStyle}>
              <ColumnGraph />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card title="Research Proposal Seminar" style={{ minHeight: 450}} headStyle={titleStyle}>
              <Row gutter={[40, 40]}>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card type="inner" title="Expected" style={{ minHeight: 250 }} headStyle={innertitleStyle}>
                    Inner Card content
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card type="inner" title="Conducted" style={{ minHeight: 250 }} headStyle={innertitleStyle}>
                    Inner Card content
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card title="Thesis Submitted" bordered={true} headStyle={titleStyle}>
              <ColumnGraph />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card
                title="Pending consent remainders"
                style={{ minHeight: 200 }}
                headStyle={titleStyle}
              >
                Inner Card content
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card title="Pending evaluation remainders" style={{ minHeight: 200 }} headStyle={titleStyle}>
                Inner Card content
              </Card>
            </Col>
          </Row>
      </div>
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
            className="outer-shadow"
              title="Theses under evalution"
              style={{ minHeight: 507 }}
              headStyle={titleStyle}
            >
              <ul>
                <li>Translational Data Analytics and Decision Science</li>
                <li>Resilient, Sustainable and Global Food Security for Health</li>
                <li>Prevention and Treatment of Chronic Brain Injury</li>
                <li>Personalized Food and Nutritional Metabolic Profiling to Improve Health.</li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
            className="outer-shadow"
              title="Evaluated Theses"
              style={{ minHeight: 200 }}
              headStyle={titleStyle}
            >
              <PieGraph />
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
}

export default Dashboard;
