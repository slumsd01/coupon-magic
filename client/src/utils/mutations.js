import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT= gql`
  mutation addComment($couponId: ID!, $commentText: String!) {
    addComment(couponId: $couponId, commentText: $commentText) {
      _id
      commentText
      coupon
      {
        _id
      }
      user
      {
        _id
      }
    }
  }
`;
