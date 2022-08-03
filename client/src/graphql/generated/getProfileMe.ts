/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProfileMe
// ====================================================

export interface getProfileMe_me_role {
  __typename: "UsersPermissionsMeRole";
  name: string;
}

export interface getProfileMe_me {
  __typename: "UsersPermissionsMe";
  id: string;
  username: string;
  email: string;
  role: getProfileMe_me_role | null;
}

export interface getProfileMe {
  me: getProfileMe_me | null;
}
