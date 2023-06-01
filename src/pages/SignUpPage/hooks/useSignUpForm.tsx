import { Form, FormInstance } from "antd";
 import { useNavigate } from "react-router-dom";
 import React from "react";

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
     formInstance.submit();
     togglePopUpConfirm();
   };

   const handleSubmit = (formData: any) => {
     navigate("/testing", {
       state: { test: formData.testing || "no testing" },
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
