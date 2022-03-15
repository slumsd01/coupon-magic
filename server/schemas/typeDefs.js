const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    commentCount: Int
    coupons: [Coupon]
    comments: [User]
  }

  type Coupon {
    _id: ID
    createdAt: String
    couponTitle: String
    product: String
    vendor: String
    amountOff: Int
    currency: String
    redeemBy: String
    maxRedemptions: String
    username: String
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    coupons: [Coupon]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    
    addCoupon(
      createdAt: String,
      couponTitle: String,
      product: String,
      vendor: String,
      amountOff: Int,
      currency: String,
      redeemBy: String,
      maxRedemptions: String
    ): Coupon
    
    addComment(couponId: ID!, commentBody: String!): Coupon
  }
`;

module.exports = typeDefs;
