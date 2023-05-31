/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onCreateBlog(filter: $filter) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($filter: ModelSubscriptionBlogFilterInput) {
    onUpdateBlog(filter: $filter) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($filter: ModelSubscriptionBlogFilterInput) {
    onDeleteBlog(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onCreateOrganization(filter: $filter) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onUpdateOrganization(filter: $filter) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
  ) {
    onDeleteOrganization(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant($filter: ModelSubscriptionTenantFilterInput) {
    onCreateTenant(filter: $filter) {
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
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant($filter: ModelSubscriptionTenantFilterInput) {
    onUpdateTenant(filter: $filter) {
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
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant($filter: ModelSubscriptionTenantFilterInput) {
    onDeleteTenant(filter: $filter) {
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
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty($filter: ModelSubscriptionPropertyFilterInput) {
    onCreateProperty(filter: $filter) {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty($filter: ModelSubscriptionPropertyFilterInput) {
    onUpdateProperty(filter: $filter) {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty($filter: ModelSubscriptionPropertyFilterInput) {
    onDeleteProperty(filter: $filter) {
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
export const onCreateBuilding = /* GraphQL */ `
  subscription OnCreateBuilding($filter: ModelSubscriptionBuildingFilterInput) {
    onCreateBuilding(filter: $filter) {
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
export const onUpdateBuilding = /* GraphQL */ `
  subscription OnUpdateBuilding($filter: ModelSubscriptionBuildingFilterInput) {
    onUpdateBuilding(filter: $filter) {
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
export const onDeleteBuilding = /* GraphQL */ `
  subscription OnDeleteBuilding($filter: ModelSubscriptionBuildingFilterInput) {
    onDeleteBuilding(filter: $filter) {
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
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit($filter: ModelSubscriptionUnitFilterInput) {
    onCreateUnit(filter: $filter) {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit($filter: ModelSubscriptionUnitFilterInput) {
    onUpdateUnit(filter: $filter) {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit($filter: ModelSubscriptionUnitFilterInput) {
    onDeleteUnit(filter: $filter) {
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
export const onCreateServiceRequest = /* GraphQL */ `
  subscription OnCreateServiceRequest(
    $filter: ModelSubscriptionServiceRequestFilterInput
  ) {
    onCreateServiceRequest(filter: $filter) {
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
export const onUpdateServiceRequest = /* GraphQL */ `
  subscription OnUpdateServiceRequest(
    $filter: ModelSubscriptionServiceRequestFilterInput
  ) {
    onUpdateServiceRequest(filter: $filter) {
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
export const onDeleteServiceRequest = /* GraphQL */ `
  subscription OnDeleteServiceRequest(
    $filter: ModelSubscriptionServiceRequestFilterInput
  ) {
    onDeleteServiceRequest(filter: $filter) {
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
