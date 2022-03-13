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
    couponTitle: String
    createdAt: String
    product: String
    vendor: String
    amountOff: Int
    currency: String
    redeemBy: String
    maxRedemptions: Int
    username: String
    commentCount: Int
    comments: [Comment]
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
    coupons(username: String): [Coupon]
    coupon(_id: ID!): Coupon
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCoupon(couponTitle: String!, product: String, vendor: String, amountOff: Int, currency: String, redeemBy: String, maxRedemptions: Int, username: String): Coupon
    addComment(couponId: ID!, commentBody: String!): Coupon
  }
`;

module.exports = typeDefs;
