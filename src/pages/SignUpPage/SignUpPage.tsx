import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { SignUpForm } from "./components/";

const SignUpPage = () => {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Sign-Up</Breadcrumb.Item>
      </Breadcrumb>
      <SignUpForm />
    </>
  );
};

export default SignUpPage;
