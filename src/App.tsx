import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { SideNavigation, TopNavigation } from "./components";
import { Content } from "antd/es/layout/layout";
import { SideActions } from "./components/SideActions";

const App: React.FC = () => {
  return (
    <Layout>
      <TopNavigation />
      <Layout>
        <Layout style={{ padding: "0 24px 24px" }} hasSider={true}>
          <SideNavigation />

          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              // background: colorBgContainer,
            }}
          >
            Content
          </Content>
          <SideActions />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
