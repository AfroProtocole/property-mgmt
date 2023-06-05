import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { SignUpForm } from "./components/";
import { Authenticator } from "@aws-amplify/ui-react";
import { Content } from "antd/es/layout/layout";

const SignUpPage = () => {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Sign-Up</Breadcrumb.Item>
      </Breadcrumb>

      {/* <Authenticator>
        <div
          className="SignIn"
          slot="sign-in"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundSize: "cover",
            maxHeight: "height",
            maxWidth: "width",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "grid",
              gap: "5%",
              backgroundColor: "rgba(222, 184, 135, 0.5)",
              padding: "10px",
              gridAutoColumns: "30%",
            }}
          >
            <div
              style={{
                display: "-ms-inline-grid",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></div>
          </div>
        </div>
      </Authenticator> */}
      <Content>
        <SignUpForm />
      </Content>
    </>
  );
};

export default SignUpPage;
