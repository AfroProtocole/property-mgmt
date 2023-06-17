import { Breadcrumb, Button, Card } from "antd";
import { Content } from "antd/es/layout/layout";
import { RightOutlined } from "@ant-design/icons";
import { MainBookmarkSetting } from "./components";
import React from "react";

const HomePage = () => {
  const [mainBookmark, setMainBookmark] = React.useState("");

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }} separator={<RightOutlined />}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          // padding: 24,
          margin: 0,
          minHeight: 280,
          // background: colorBgContainer,
        }}
      >
        <Card>
          <MainBookmarkSetting />
        </Card>
      </Content>
    </>
  );
};

export default HomePage;
