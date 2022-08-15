/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProfileMe
// ====================================================

export interface getProfileMe_user {
  __typename: "UsersPermissionsUser";
  id: string;
  email: string;
  username: string;
}

export interface getProfileMe {
  user: getProfileMe_user | null;
}

export interface getProfileMeVariables {
  identifier: string;
}
