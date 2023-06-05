import { Breadcrumb, Button, Form, Input, Popconfirm, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { HomeOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { useCreateOrganizationPage } from "./hooks";

const CreateOrganizationPage = () => {
  const { state } = useLocation();
  const [formInstance] = Form.useForm();
  const formState = useCreateOrganizationPage({ formInstance });

  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>New Organization</Breadcrumb.Item>
      </Breadcrumb>
      <Content>
        <>
          <Typography.Title level={1}>
            Enter Organization Information Below
          </Typography.Title>
          <div style={{ maxWidth: 400, width: "100%" }}>
            <Form form={formInstance} onFinish={formState.handleSubmit}>
              <Form.Item label="Name" name={"name"}>
                <Input name="name" />
              </Form.Item>
              <Form.Item>
                <Popconfirm
                  title={"Confirm changes"}
                  onConfirm={formState.handlePopUpSubmit}
                >
                  <Button type="primary" onClick={formState.togglePopUpConfirm}>
                    Submit
                  </Button>
                </Popconfirm>
              </Form.Item>
            </Form>
          </div>
        </>
      </Content>
    </>
  );
};

export default CreateOrganizationPage;
