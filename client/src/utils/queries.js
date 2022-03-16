import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
    username
    email
      coupons {
        _id
        couponTitle
        product
        vendor
        amountOff
        redeemBy
        maxRedemptions
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      coupons {
        _id
        couponTitle
      }
    }
  }
`;

export const QUERY_COUPON = gql`
  query coupon($id: ID!) {
    coupon(_id: $id) {
      _id
      createdAt
      couponTitle
      product
      vendor
      amountOff
      redeemBy
      maxRedemptions
      username
      user {
        _id
      }
      comments {
        _id
        commentText
        user {
          username
        }
      }
    }
  }
`

export const QUERY_COUPONS = gql`
  {
    coupons {
      _id
      createdAt
      couponTitle
      product
      vendor
      amountOff
      redeemBy
      maxRedemptions
      username
      user {
        _id
      }
      comments {
        _id
      }
    }
  }
`
export const QUERY_COMMENT= gql`
  query comment($id: ID!) {
    comment(_id: $id) {
      _id
      commentText
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query comments($user: String) {
    comments(user: $user) {
      _id
      commentText
      user {
        _id
        username
      }
    }
  }
`;