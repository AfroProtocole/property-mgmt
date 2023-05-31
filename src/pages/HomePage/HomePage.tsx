import { Breadcrumb, Button } from "antd";
import { Content } from "antd/es/layout/layout";

const HomePage = () => {
  return (
    <>
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
        <Button> Create User</Button>
      </Content>
    </>
  );
};

export default HomePage;
