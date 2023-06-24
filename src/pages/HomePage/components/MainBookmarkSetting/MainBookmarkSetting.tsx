import { SettingOutlined } from "@ant-design/icons";
import { Button, Checkbox, Divider, Form, Popover, Row } from "antd";
import React from "react";
import { useLoaderData, useSubmit } from "react-router-dom";
import { favorites } from "~/types";

type LoaderData = { data: favorites[] };
const MainBookmarkSetting = () => {
  const loaderData = useLoaderData() as unknown as LoaderData;
  console.log("from settings", loaderData);
  const [formInstance] = Form.useForm();
  let initialValues: any = {};
  loaderData.data.map((favorite: favorites) => {
    return (initialValues[favorite.favID] = true);
  });
  const submit = useSubmit();
  const [showSettingPopUp, setShowSettingsPop] = React.useState(false);
  const toggleSettingPopUp = () => setShowSettingsPop(!showSettingPopUp);

  const resetForm = () => {
    formInstance.resetFields();
  };

  const handleSubmit = () => {
    const formattedFormData = loaderData.data.filter((favorite: favorites) => {
      return !formInstance.getFieldValue(favorite.favID);
    });
    submit({ body: JSON.stringify(formattedFormData) }, { method: "post" });
  };

  return (
    <Popover
      title="Edit bookmarks"
      content={
        <Form
          form={formInstance}
          initialValues={initialValues}
          onFinish={handleSubmit}
        >
          {loaderData.data.map((favorite: favorites) => {
            return (
              <Row>
                <Form.Item name={favorite.favID} valuePropName="checked">
                  <Checkbox>
                    {favorite.favType + " - " + favorite.name}
                  </Checkbox>
                </Form.Item>
              </Row>
            );
          })}
          <Divider />
          <Row>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Row>
          <Row>
            <Form.Item>
              <Button type="primary" ghost onClick={resetForm}>
                Reset
              </Button>
            </Form.Item>
          </Row>
        </Form>
      }
      open={showSettingPopUp}
    >
      <SettingOutlined onClick={toggleSettingPopUp} />
    </Popover>
  );
};

export default MainBookmarkSetting;
