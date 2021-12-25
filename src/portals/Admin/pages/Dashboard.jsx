import React from "react";
import { Layout, Card, Col, Row } from "antd";
import { ColumnGraph, PieGraph } from "../components";

const { Content } = Layout;
const titleStyle = { backgroundColor: "#1A374D", color: "white" };
const innertitleStyle = { backgroundColor: "#2D4263", color: "white" };
function Dashboard() {
  return (
    <Content style={{ margin: "0 25px" }}>
      <div className="container">
        <Card
        className="outer-shadow"
          title="Pre Submision Seminar"
          style={{ minHeight: 300 }}
          headStyle={titleStyle}
        >
          <Row gutter={[40, 40]}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Card
                className="shadow"
                type="inner"
                title="Applications"
                headStyle={innertitleStyle}
              >
                <div style={{ height: "120px", overflowY: "auto" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Card className="shadow" type="inner" title="Expected" headStyle={innertitleStyle}>
                <div style={{ height: "120px", overflowY: "auto" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8}>
              <Card className="shadow" type="inner" title="Conducted" headStyle={innertitleStyle}>
                <div style={{ height: "120px", overflowY: "auto" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
      <div className="container">
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
            className="outer-shadow"
              title="Comprehensive Examination"
              style={{ minHeight: 450 }}
              headStyle={titleStyle}
            >
              <Row gutter={[40, 40]}>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                  className="shadow"
                    type="inner"
                    title="Expected"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                  className="shadow"
                    type="inner"
                    title="Conducted"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
            className="outer-shadow"
              title="Thesis Submitted"
              bordered={true}
              headStyle={titleStyle}
            >
              <ColumnGraph />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row gutter={[40, 40]}>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
            className="outer-shadow"
              title="Research Proposal Seminar"
              style={{ minHeight: 450 }}
              headStyle={titleStyle}
            >
              <Row gutter={[40, 40]}>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                  className="shadow"
                    type="inner"
                    title="Expected"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </div>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12}>
                  <Card
                  className="shadow"
                    type="inner"
                    title="Conducted"
                    headStyle={innertitleStyle}
                  >
                    <div style={{ height: "250px", overflowY: "auto" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco.
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12}>
            <Card
            className="outer-shadow"
              title="Thesis Submitted"
              bordered={true}
              headStyle={titleStyle}
            >
              <ColumnGraph />
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
            className="outer-shadow"
              title="Pending consent remainders"
              headStyle={titleStyle}
            >
              <div style={{ height: "150px", overflowY: "auto" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
            className="outer-shadow"
              title="Pending evaluation remainders"
              headStyle={titleStyle}
            >
              <div style={{ height: "150px", overflowY: "auto" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
            className="outer-shadow"
              title="Thesis under evalution"
              style={{ minHeight: 507 }}
              headStyle={titleStyle}
            >
              Inner Card content
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Card
            className="outer-shadow"
              title="Evaluated Thesises"
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
