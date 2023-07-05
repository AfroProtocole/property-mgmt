import { API } from "aws-amplify";
import { getAuth } from "firebase/auth";
import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { getProperty } from "~/graphql/queries";
import { trimGraphQLTimeStamp } from "~/utils";

export async function PropertyDetailsPageLoader({
  request,
  params,
}: LoaderFunctionArgs) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) redirect("/explore");
  try {
    let property: any = await API.graphql({
      query: getProperty,
      variables: {
        // input: {
        id: params.propertyID,
        // },
      },
    });
    console.log("favorite", property.data);
    console.log("properties", property.data.getProperty);
    return {
      success: true,
      data: trimGraphQLTimeStamp(property.data.getProperty) || {
        id: "",
        name: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        poBox: "",
        userID: "",
        organizationID: "",
      },
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      data: [],
      error,
    };
  }
}
