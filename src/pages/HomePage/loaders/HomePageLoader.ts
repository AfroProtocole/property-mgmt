import { API } from "aws-amplify";
import { getFavorite } from "../../../graphql/queries";

export async function HomePageLoader({ request }: any) {
  const allBookmarks = await API.graphql({
    query: getFavorite,
    variables: {
      id: "dfdfdfdfd",
    },
  });
  console.log("favorite");
  return { allBookmarks };
}

export async function HomePageAction({ request }: any) {
  const allBookmarks = await API.graphql({
    query: getFavorite,
    variables: {
      id: "dfdfdfdfd",
    },
  });
  console.log("favorite");
  return { allBookmarks };
}
