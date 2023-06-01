import { useLocation } from "react-router-dom";

const CreateOrganizationPage = () => {
  const { state } = useLocation();

  return <>{state.test}</>;
};

export default CreateOrganizationPage;
