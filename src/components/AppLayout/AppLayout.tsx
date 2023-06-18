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
    <Layout>
      {TopNavigation}
      <Layout
        style={{
          padding: "0 24px 24px",
          display: "flex",
          height: "100%",
          maxHeight: 1000,
        }}
        hasSider={true}
      >
        {SideNavigation}
        {PageContent}
        {SideAction}
      </Layout>
    </Layout>
  );
};

export default AppLayout;
