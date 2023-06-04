import { Form, FormInstance } from "antd";
 import { useNavigate } from "react-router-dom";
import React from "react";
import { createUser as createUserMutation } from "../../../graphql/mutations";
import { Auth, API } from "aws-amplify";
import { User, UserForm } from "../types";

const useSignUpForm = ({
  formInstance,
}: {
  formInstance: FormInstance<any>;
}) => {
  const navigate = useNavigate();
  const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);

  const togglePopUpConfirm = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  const handlePopUpSubmit = () => {
    console.log("form instance", formInstance.getFieldValue("testing"));

    formInstance.submit();
    togglePopUpConfirm();
  };

  const handleSubmit = async (formData: UserForm) => {
    console.log("form data", formData);
    const title =
      formData.orgStatus == "none" || formData.orgStatus == "new"
        ? "owner"
        : "employee";
    const type =
      formData.orgStatus == "none" || formData.orgStatus == "new"
        ? "owner"
        : "employee";
    try {
      const params = {
        username: formData.username,
        password: formData.password,
      };
      const { user } = await Auth.signUp(
        params,
        formData.firstname,
        formData.middleName || "",
        formData.lastname
      );
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
    await API.graphql({
      query: createUserMutation,
      variables: {
        input: {
          title: title,
          type: type,
          firstName: formData.firstname,
          middleName: formData.middleName || "",
          lastName: formData.lastname,
          salary: "",
          organization:
            formData.orgStatus != "none" ? { orgName: "pending" } : null,
        },
      },
    });
    navigate("/testing", {
      state: { test: formData.firstname || "no testing" },
    });
  };

  return {
    isPopUpOpen,
    togglePopUpConfirm,
    handleSubmit,
    handlePopUpSubmit,
  };
};

export default useSignUpForm;
