import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

const PropertyTablePage = () => {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Property</Breadcrumb.Item>
      </Breadcrumb>
      Property Table Page
    </>
  );
};

export default PropertyTablePage;
