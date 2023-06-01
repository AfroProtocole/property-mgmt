import { Button, Form, Input, Popconfirm } from "antd";
import { useSignUpForm } from "../../hooks";

const SignUpForm = () => {
  const [formInstance] = Form.useForm();
  const formState = useSignUpForm({ formInstance });

  return (
    <>
      <Form form={formInstance} onFinish={formState.handleSubmit}>
        <Form.Item>
          <Input value={"testing data"} disabled={true} name="testing"></Input>
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
    </>
  );
};

export default SignUpForm;
