import React from "react";
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

const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function Submission() {
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
              },
            ]}
          >
            <Upload {...props}>
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
              },
            ]}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <span style={{ paddingRight: "20px" }} />
            <Button type="primary" htmlType="submit">
              <a href="/st/thesis-sub-confirmation">Save & Submit</a>
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
}

export default Submission;
