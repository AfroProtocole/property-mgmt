/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTenant = /* GraphQL */ `
  mutation CreateTenant(
    $input: CreateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    createTenant(input: $input, condition: $condition) {
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
export const updateTenant = /* GraphQL */ `
  mutation UpdateTenant(
    $input: UpdateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    updateTenant(input: $input, condition: $condition) {
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
export const deleteTenant = /* GraphQL */ `
  mutation DeleteTenant(
    $input: DeleteTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    deleteTenant(input: $input, condition: $condition) {
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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createBuilding = /* GraphQL */ `
  mutation CreateBuilding(
    $input: CreateBuildingInput!
    $condition: ModelBuildingConditionInput
  ) {
    createBuilding(input: $input, condition: $condition) {
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
export const updateBuilding = /* GraphQL */ `
  mutation UpdateBuilding(
    $input: UpdateBuildingInput!
    $condition: ModelBuildingConditionInput
  ) {
    updateBuilding(input: $input, condition: $condition) {
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
export const deleteBuilding = /* GraphQL */ `
  mutation DeleteBuilding(
    $input: DeleteBuildingInput!
    $condition: ModelBuildingConditionInput
  ) {
    deleteBuilding(input: $input, condition: $condition) {
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
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
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
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
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
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
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
export const createServiceRequest = /* GraphQL */ `
  mutation CreateServiceRequest(
    $input: CreateServiceRequestInput!
    $condition: ModelServiceRequestConditionInput
  ) {
    createServiceRequest(input: $input, condition: $condition) {
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
export const updateServiceRequest = /* GraphQL */ `
  mutation UpdateServiceRequest(
    $input: UpdateServiceRequestInput!
    $condition: ModelServiceRequestConditionInput
  ) {
    updateServiceRequest(input: $input, condition: $condition) {
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
export const deleteServiceRequest = /* GraphQL */ `
  mutation DeleteServiceRequest(
    $input: DeleteServiceRequestInput!
    $condition: ModelServiceRequestConditionInput
  ) {
    deleteServiceRequest(input: $input, condition: $condition) {
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
