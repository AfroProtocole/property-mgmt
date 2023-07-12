import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

const AppLayout = ({
  TopNavigation,
  SideNavigation,
  SideAction,
  PageContent,
}: {
  TopNavigation: any;
  SideNavigation: any;
  SideAction: any;
  PageContent: any;
}) => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      {TopNavigation}
      <Layout
        style={{
          // padding: "0 24px 24px",
          display: "flex",
          height: "100%",
          maxHeight: 1000,
          alignContent: "space-between",
          // alignItems: "center",
          backgroundColor: "white",
        }}
        hasSider={true}
      >
        {SideNavigation}
        <Layout
          style={{
            backgroundColor: "white",
          }}
        >
          <Content style={{ height: "100%", overflow: "auto" }}>
            {PageContent}
          </Content>
          {SideAction}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
