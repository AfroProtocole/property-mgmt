import { Form, FormInstance } from "antd";
import React from "react";

const useSignUpForm = ({
  formInstance,
}: {
  formInstance: FormInstance<any>;
}) => {
  const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);

  const togglePopUpConfirm = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  const handlePopUpSubmit = () => {
    formInstance.submit();
    togglePopUpConfirm();
  };

  const handleSubmit = (formData: any) => {};

  return {
    isPopUpOpen,
    togglePopUpConfirm,
    handleSubmit,
    handlePopUpSubmit,
  };
};

export default useSignUpForm;
