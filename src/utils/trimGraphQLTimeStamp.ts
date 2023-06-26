export const trimGraphQLTimeStamp = (graphqlObj: any) => {
  try {
    delete graphqlObj["createdAt"];
    delete graphqlObj["updatedAt"];
    return graphqlObj;
  } catch (error) {
    return graphqlObj;
  }
};
