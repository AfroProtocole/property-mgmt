/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
        }
        nextToken
      }
      createdAt
      updatedAt
      blogPostsId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      post {
        id
        title
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        blogPostsId
      }
      content
      createdAt
      updatedAt
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        post {
          id
          title
          createdAt
          updatedAt
          blogPostsId
        }
        content
        createdAt
        updatedAt
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      name
      owners {
        items {
          id
          title
          type
          firstName
          middleName
          lastName
          salary
          createdAt
          updatedAt
          organizationOwnersId
          organizationEmployeesId
        }
        nextToken
      }
      employees {
        items {
          id
          title
          type
          firstName
          middleName
          lastName
          salary
          createdAt
          updatedAt
          organizationOwnersId
          organizationEmployeesId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owners {
          nextToken
        }
        employees {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      title
      type
      firstName
      middleName
      lastName
      salary
      organization {
        id
        name
        owners {
          nextToken
        }
        employees {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      organizationOwnersId
      organizationEmployeesId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        type
        firstName
        middleName
        lastName
        salary
        organization {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        organizationOwnersId
        organizationEmployeesId
      }
      nextToken
    }
  }
`;
export const getTenant = /* GraphQL */ `
  query GetTenant($id: ID!) {
    getTenant(id: $id) {
      id
      firstName
      middleName
      lastName
      unit {
        id
        name
        number
        city
        state
        country
        zipCode
        poBox
        building {
          id
          name
          number
          city
          state
          country
          zipCode
          poBox
          createdAt
          updatedAt
          propertyBuildingsId
        }
        tenant {
          id
          firstName
          middleName
          lastName
          createdAt
          updatedAt
        }
        serviceRequests {
          nextToken
        }
        createdAt
        updatedAt
        buildingUnitsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        middleName
        lastName
        unit {
          id
          name
          number
          city
          state
          country
          zipCode
          poBox
          createdAt
          updatedAt
          buildingUnitsId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      name
      city
      state
      country
      zipCode
      poBox
      buildings {
        items {
          id
          name
          number
          city
          state
          country
          zipCode
          poBox
          createdAt
          updatedAt
          propertyBuildingsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        city
        state
        country
        zipCode
        poBox
        buildings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBuilding = /* GraphQL */ `
  query GetBuilding($id: ID!) {
    getBuilding(id: $id) {
      id
      name
      number
      city
      state
      country
      zipCode
      poBox
      property {
        id
        name
        city
        state
        country
        zipCode
        poBox
        buildings {
          nextToken
        }
        createdAt
        updatedAt
      }
      units {
        items {
          id
          name
          number
          city
          state
          country
          zipCode
          poBox
          createdAt
          updatedAt
          buildingUnitsId
        }
        nextToken
      }
      createdAt
      updatedAt
      propertyBuildingsId
    }
  }
`;
export const listBuildings = /* GraphQL */ `
  query ListBuildings(
    $filter: ModelBuildingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuildings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        number
        city
        state
        country
        zipCode
        poBox
        property {
          id
          name
          city
          state
          country
          zipCode
          poBox
          createdAt
          updatedAt
        }
        units {
          nextToken
        }
        createdAt
        updatedAt
        propertyBuildingsId
      }
      nextToken
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
      id
      name
      number
      city
      state
      country
      zipCode
      poBox
      building {
        id
        name
        number
        city
        state
        country
        zipCode
        poBox
        property {
          id
          name
          city
          state
          country
          zipCode
          poBox
          createdAt
          updatedAt
        }
        units {
          nextToken
        }
        createdAt
        updatedAt
        propertyBuildingsId
      }
      tenant {
        id
        firstName
        middleName
        lastName
        unit {
          id
          name
          number
          city
          state
          country
          zipCode
          poBox
          createdAt
          updatedAt
          buildingUnitsId
        }
        createdAt
        updatedAt
      }
      serviceRequests {
        items {
          id
          dateCreated
          dateCompleted
          note
          createdAt
          updatedAt
          unitServiceRequestsId
        }
        nextToken
      }
      createdAt
      updatedAt
      buildingUnitsId
    }
  }
`;
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        number
        city
        state
        country
        zipCode
        poBox
        building {
          id
          name
          number
          city
          state
          country
          zipCode
          poBox
          createdAt
          updatedAt
          propertyBuildingsId
        }
        tenant {
          id
          firstName
          middleName
          lastName
          createdAt
          updatedAt
        }
        serviceRequests {
          nextToken
        }
        createdAt
        updatedAt
        buildingUnitsId
      }
      nextToken
    }
  }
`;
export const getServiceRequest = /* GraphQL */ `
  query GetServiceRequest($id: ID!) {
    getServiceRequest(id: $id) {
      id
      requestor {
        id
        firstName
        middleName
        lastName
        unit {
          id
          name
          number
          city
          state
          country
          zipCode
          poBox
          createdAt
          updatedAt
          buildingUnitsId
        }
        createdAt
        updatedAt
      }
      handler {
        id
        title
        type
        firstName
        middleName
        lastName
        salary
        organization {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        organizationOwnersId
        organizationEmployeesId
      }
      unit {
        id
        name
        number
        city
        state
        country
        zipCode
        poBox
        building {
          id
          name
          number
          city
          state
          country
          zipCode
          poBox
          createdAt
          updatedAt
          propertyBuildingsId
        }
        tenant {
          id
          firstName
          middleName
          lastName
          createdAt
          updatedAt
        }
        serviceRequests {
          nextToken
        }
        createdAt
        updatedAt
        buildingUnitsId
      }
      dateCreated
      dateCompleted
      note
      createdAt
      updatedAt
      unitServiceRequestsId
    }
  }
`;
export const listServiceRequests = /* GraphQL */ `
  query ListServiceRequests(
    $filter: ModelServiceRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServiceRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        requestor {
          id
          firstName
          middleName
          lastName
          createdAt
          updatedAt
        }
        handler {
          id
          title
          type
          firstName
          middleName
          lastName
          salary
          createdAt
          updatedAt
          organizationOwnersId
          organizationEmployeesId
        }
        unit {
          id
          name
          number
          city
          state
          country
          zipCode
          poBox
          createdAt
          updatedAt
          buildingUnitsId
        }
        dateCreated
        dateCompleted
        note
        createdAt
        updatedAt
        unitServiceRequestsId
      }
      nextToken
    }
  }
`;
