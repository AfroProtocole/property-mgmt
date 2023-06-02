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
    <div style={{ maxWidth: 600, width: "100%" }}>
      <Typography.Title level={1}>
        Enter User Information Below
      </Typography.Title>
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
        <Form.Item label="Organization Status" name={"orgStatus"}>
          <Select options={orgStatusOptions} />
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
  );
};

export default SignUpForm;
