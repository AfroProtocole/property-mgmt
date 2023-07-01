import { API } from "aws-amplify";
import { getAuth } from "firebase/auth";
import { listProperties } from "~/graphql/queries";
import { trimGraphQLTimeStamp } from "~/utils";

export async function PropertyTablePageLoader({ request }: any) {
  const auth = getAuth();
  const user = auth.currentUser;
  try {
    let allUserProperties: any = await API.graphql({
      query: listProperties,
      variables: {
        filter: { userID: { eq: user?.uid } },
      },
    });
    // console.log("favorite", allBookmarks.data.listFavorites.items);
    allUserProperties.data.listProperties.items.forEach((item: any) => {
      return trimGraphQLTimeStamp(item);
    });
    console.log("properties", allUserProperties.data.listProperties.items);
    return {
      success: true,
      data: allUserProperties.data.listProperties.items || [],
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      error,
    };
  }
}
