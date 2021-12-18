/* eslint-disable no-template-curly-in-string */
import React from "react";
import { Layout } from "antd";
import { Form, Input, Button } from "antd";
import MaterialTable from "material-table";
import { MyProjectNav } from "../../components";
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
  required: "${label} is required!",
};

const data = [
  {
    sr: "1",
    title: <a href='/st/myprojectForums/thread_title_id'>Doubt</a>,
    desc: "XYZ ABC POI MJK",
    by: "Aditya Mishra",
    date: "07/12/2021",
    replies: "2",
    vote: "21",
  },
];

const columns = [
  { title: "Sr. No.", field: "sr" },
  { title: "Thread Title", field: "title" },
  { title: "Description", field: "desc" },
  { title: "Posted By", field: "by" },
  { title: "Date", field: "date" },
  { title: "Replies", field: "replies" },
  { title: "Upvote", field: "vote" },
];

function Forums() {
  return (
    <Content style={{ margin: "25px 25px" }}>
      <MyProjectNav />
      <div
        className="site-layout-background row"
        style={{ padding: 24, minHeight: 400 }}
      >
        <div
          className="rounded border border-2"
          style={{ marginBottom: "10px" }}
        >
          <h2 className="text-secondary">
            <u>Create New Thread</u>
          </h2>
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
              name={["user", "description"]}
              label="Description"
              style={{ flex: "0" }}
            >
              <Input.TextArea style={{ height: "100px", float: "left" }} />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{ float: "center" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="rounded border border-2">
          <MaterialTable
            title=""
            columns={columns}
            data={data}
            options={{
              toolbar: false,
              paging: false,
            }}
            style={{ boxShadow: "none" }}
          />
        </div>
      </div>
    </Content>
  );
}

export default Forums;
