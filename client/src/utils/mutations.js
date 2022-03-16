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

export const ADD_COUPON = gql`
  mutation addCoupon($couponTitle: String!, $product: String, $vendor: String, $amountOff: String, $currency: String, $redeemBy: String, $maxRedemptions: String) {
    addCoupon(couponTitle: $couponTitle, product: $product, vendor: $vendor, amountOff: $amountOff, currency: $currency, redeemBy: $redeemBy, maxRedemptions: $maxRedemptions) {
      _id
      createdAt
      couponTitle
      product
      vendor
      amountOff
      currency
      redeemBy
      maxRedemptions
      username
      user {
        _id
      }
    }
  }
`