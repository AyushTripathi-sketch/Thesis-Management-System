import React, { useState, useEffect } from "react";
import { Divider, Layout, Form, Input, Button, Upload, message } from "antd";
import "../../StudentApp.css";
import { UploadOutlined } from "@ant-design/icons";
const { Content } = Layout;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: "${label} is required!",
};

function Submission() {

  const [thesisFL, setthesisFL] = useState([]);
  const [synopsisFL, setsynopsisFL] = useState([]);

  const handleThesisChange = ({ file, fileList }) => {
    fileList = fileList.slice(-1);
    setthesisFL(fileList)
  };

  const handleSynopsisChange = ({ file, fileList }) => {
    fileList = fileList.slice(-1);
    setsynopsisFL(fileList);
  }

  return (
    <Content style={{ margin: "25px 25px" }}>
      <div className="site-layout-background" style={{ padding: "10px" }}>
        <h2 style={{ paddingTop: "10px" }}>Thesis Submission</h2>
        <Divider />
        <Form
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "title"]}
            label="Title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "abstract"]}
            label="Abstract"
            style={{ flex: "0" }}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea style={{ height: "100px", float: "left" }} />
          </Form.Item>
          <Form.Item
            name={["user", "synopsis"]}
            label="Synopsis"
            style={{ flex: "0" }}
            rules={[
              {
                required: true,
                message: 'You must choose a Synopsis file!',
              },
              ({}) => ({
                validator(_, value) {
                  console.log(value);
                  if (!value || synopsisFL.length) {
                    return Promise.resolve()
                  }
                  return Promise.reject('You must choose a Synopsis file!');
                }
              })
            ]}
          >
            <Upload fileList={synopsisFL} onChange={handleSynopsisChange} beforeUpload={() => false} multiple={false}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name={["user", "thesis"]}
            label="Thesis"
            style={{ flex: "0" }}
            rules={[
              {
                required: true,
                message: 'You must choose a Thesis file!'
              },
              ({}) => ({
                validator(_, value) {
                  if (!value || thesisFL.length) {
                    return Promise.resolve()
                  }
                  return Promise.reject('You must choose a Thesis file!');
                }
              })
            ]}
          >
            <Upload fileList={thesisFL} onChange={handleThesisChange} beforeUpload={() => false}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              <a href="/st/thesis/confirmation">Save & Submit</a>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
}

export default Submission;
