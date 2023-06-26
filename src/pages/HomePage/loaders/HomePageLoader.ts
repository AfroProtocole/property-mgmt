import { API } from "aws-amplify";
import { auth, db } from "~/lib/firebase";
import { getAuth } from "firebase/auth";
import { log } from "console";
import { listFavorites } from "~/graphql/queries";
import { trimGraphQLTimeStamp } from "~/utils";

export async function HomePageLoader({ request }: any) {
  const auth = getAuth();
  const user = auth.currentUser;
  const idFromDYnamo = "hgRliVrjzZMI3hKbK82aRe5Wupq2";
  console.log("user id", user?.uid);
  try {
    let allBookmarks: any = await API.graphql({
      query: listFavorites,
      variables: {
        filter: { userID: { eq: user?.uid } },
      },
    });
    // console.log("favorite", allBookmarks.data.listFavorites.items);
    allBookmarks.data.listFavorites.items.forEach((item: any) => {
      return trimGraphQLTimeStamp(item);
    });
    return {
      success: true,
      data: allBookmarks.data.listFavorites.items || [],
    };
  } catch (error) {
    return {
      success: false,
      data: [],
      error,
    };
  }
}

export async function HomePageAction({ request }: any) {
  const formData = await request.formData();
  const payload = formData.get("body");
  console.log("payload", payload);
  return {};
}
