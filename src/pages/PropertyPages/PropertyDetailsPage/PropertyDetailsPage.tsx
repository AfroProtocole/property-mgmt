import { useLoaderData } from "react-router-dom";
import { LoaderData, property } from "~/types";

const PropertyDetailsPage = () => {
  const loaderData = useLoaderData as unknown as LoaderData<property>;
  return <></>;
};

export default PropertyDetailsPage;
