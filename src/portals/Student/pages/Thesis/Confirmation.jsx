import React from "react";
import { Divider, Layout, Button } from "antd";
import scholar from "../../images/scholar.png";
const { Content } = Layout;

function Confirmation() {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <div
        className="site-layout-background"
        style={{ padding: "10px", height: "100%" }}
      >
        <h2 style={{ paddingTop: "10px" }}>Review and Submit</h2>
        <Divider />
        <div className="container">
          <div style={{ width: "100%", height: "auto", padding: "1%" }}>
            <div>
              <img
                style={{
                  marginRight: "20px",
                  float: "left",
                  width: "40%",
                  maxWidth: "150px",
                  height: "150 px",
                }}
                src={scholar}
                alt="Scholar"
              />
            </div>
            <div style={{ margin: "0 auto" }}>
              <p>
                <b>Scholar ID: </b>XXXXXX
              </p>
              <p>
                <b>Name: </b>XXXXXX
              </p>
              <p>
                <b>Branch: </b>XXXXXX
              </p>
              <p>
                <b>Department: </b>XXXXXX
              </p>
              <p>
                <b>Title: </b>XXXXXX
              </p>
              <p>
                <b>Abstract: </b>XXXXXX
              </p>
              <p>
                <b>Synopsis: </b>
                <Button>Click to View</Button>
              </p>
              <p>
                <b>Thesis: </b>
                <Button>Click to View</Button>
              </p>
            </div>
          </div>
          <div style={{ float: "right", padding: "10px" }}>
            <Button type="primary" htmlType="submit">
              <a href="/st/thesis-submission">Edit</a>
            </Button>
            <span style={{ paddingRight: "20px" }} />
            <Button type="primary" htmlType="submit">
              <a href="/st/home">Submit</a>
            </Button>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Confirmation;
