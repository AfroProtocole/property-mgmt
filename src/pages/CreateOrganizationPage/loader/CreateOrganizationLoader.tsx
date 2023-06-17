import { API } from "aws-amplify";
import { getFavorite } from "../../../graphql/queries";

export default async function CreateOrganizationLoader({ request }: any) {
  const allBookmarks = await API.graphql({
    query: getFavorite,
    variables: {
      id: "",
    },
  });
  console.log("favorite");
  return { allBookmarks };
}
