import { FormInstance } from "antd";
import React from "react";
import { Auth, API } from "aws-amplify";
import { NewOrganizationForm } from "../../../types";
import { createOrganization } from "../../../graphql/mutations";
import { getUser } from "../../../graphql/queries";
import { GraphQLList, GraphQLNonNull } from "graphql";

const useCreateOrganizationPage = ({
  formInstance,
}: {
  formInstance: FormInstance<any>;
}) => {
  const [isPopUpOpen, setIsPopUpOpen] = React.useState(false);
  const userid = "6b4e7561-6eb4-407c-aeed-fb8b4803efad";

  const togglePopUpConfirm = () => {
    setIsPopUpOpen(!isPopUpOpen);
  };

  const handlePopUpSubmit = () => {
    console.log("form instance", formInstance.getFieldValue("testing"));

    formInstance.submit();
    togglePopUpConfirm();
  };

  const handleSubmit = async (formData: NewOrganizationForm) => {
    try {
      const user = await API.graphql({
        query: getUser,
        variables: {
          id: userid,
        },
      });
      console.log("user", user);

      const ownerList = [user];
      const val = await API.graphql({
        query: createOrganization,
        variables: {
          input: {
            name: formData.name,
            //@ts-ignore
            owners: {},
          },
        },
      });
      console.log("organization created", val);
    } catch (error) {
      console.log("error using api", error);
    }
  };

  return {
    isPopUpOpen,
    togglePopUpConfirm,
    handleSubmit,
    handlePopUpSubmit,
  };
};

export default useCreateOrganizationPage;
