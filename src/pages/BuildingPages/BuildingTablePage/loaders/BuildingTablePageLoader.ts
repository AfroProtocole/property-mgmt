import { API } from "aws-amplify";
import { getAuth } from "firebase/auth";
import { listBuildings } from "~/graphql/queries";
import { trimGraphQLTimeStamp } from "~/utils";

export async function BuildingTablePageLoader({ request }: any) {
  const auth = getAuth();
  const user = auth.currentUser;
  try {
    let allUserBuildings: any = await API.graphql({
      query: listBuildings,
      variables: {
        filter: { userID: { eq: user?.uid } },
      },
    });
    // console.log("favorite", allBookmarks.data.listFavorites.items);
    allUserBuildings.data.listBuildings.items.forEach((item: any) => {
      return trimGraphQLTimeStamp(item);
    });
    // console.log("Buildings", allUserBuildings.data.listBuildings.items);
    return {
      success: true,
      data: allUserBuildings.data.listBuildings.items || [],
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      error,
    };
  }
}
