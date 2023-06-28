import { FormInstance } from "antd";
import React from "react";
import { Auth, API } from "aws-amplify";
import { NewOrganizationForm } from "../../../../types";
import { createOrganization, updateUser } from "../../../../graphql/mutations";
import { getUser } from "../../../../graphql/queries";

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
      const organization = await API.graphql({
        query: createOrganization,
        variables: {
          input: {
            name: formData.name,
          },
        },
      });

      const userUpdate = await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: userid,
            organization: {
              //@ts-ignore
              id: organization.data.createOrganization.id,
              //@ts-ignore
              name: organization.data.createOrganization.name,
            },
            // //@ts-ignore
            // ...user.data.getUser,
          },
        },
      });
      console.log("organization created", organization);
      console.log("updated user", userUpdate);
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
