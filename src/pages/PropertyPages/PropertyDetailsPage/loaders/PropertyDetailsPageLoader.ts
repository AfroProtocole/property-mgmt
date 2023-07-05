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
        input: {
          id: params.propertyID,
        },
      },
    });
    console.log("favorite", property.data);
    property.data.getProperty.items.forEach((item: any) => {
      return trimGraphQLTimeStamp(item);
    });
    console.log("properties", property.data.getProperty.items);
    return {
      success: true,
      data: property.data.getProperty.items || [],
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      error,
    };
  }
}
