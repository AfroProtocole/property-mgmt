import { API } from "aws-amplify";
import { auth, db } from "~/lib/firebase";
import { getAuth } from "firebase/auth";
import { log } from "console";
import { listFavorites } from "~/graphql/queries";

export async function HomePageLoader({ request }: any) {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log("user id", user?.uid);
  try {
    const allBookmarks = await API.graphql({
      query: listFavorites,
      variables: {
        and: { userID: user?.uid },
      },
    });
    console.log("favorite");
    return {
      success: true,
      data: allBookmarks || [],
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
  // const allBookmarks = await API.graphql({
  //   query: listFavorites,
  //   variables: {
  //     and: { id: "dfdfdfdfd" },
  //   },
  // });
  // console.log("favorite");
  // return { allBookmarks };
}
