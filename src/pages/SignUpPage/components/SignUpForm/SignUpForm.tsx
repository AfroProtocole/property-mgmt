import { Button, Form, Input, Popconfirm, Select, Typography } from "antd";
import { useSignUpForm } from "../../hooks";

const orgStatusOptions = [
  {
    value: "Joing an organization",
    label: "Joing an organization",
    name: "joining",
  },
  {
    value: "Creating an organization",
    label: "Creating an organization",
    name: "new",
  },
  { value: "No Organization", label: "No Organization", name: "none" },
];

const SignUpForm = () => {
  const [formInstance] = Form.useForm();
  const formState = useSignUpForm({ formInstance });

    return (
      <>
        <Typography.Title level={1}>
          Enter User Information Below
        </Typography.Title>
        <div style={{ maxWidth: 400, width: "100%" }}>
          <Form form={formInstance} onFinish={formState.handleSubmit}>
            <Form.Item label="First Name" name={"firstName"}>
              <Input name="firstName" />
            </Form.Item>
            <Form.Item label="Middle Name" name={"middleName"}>
              <Input name="middleName" />
            </Form.Item>
            <Form.Item label="Last Name" name={"lastName"}>
              <Input name="lastName" />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input type="email" name="email" />
            </Form.Item>
            <Form.Item label="Username" name="username">
              <Input name="username" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password name="password" />
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
    );
};

export default SignUpForm;
