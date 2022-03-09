const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    couponId: [Coupon]
  }
  type Coupon {
    _id: ID
    couponTitle: String
    createdAt: String
    userId: [User]
  }
  type Comment {
      _id: ID
      commentText: String
      createdAt: String
      couponId: [Coupon]
      userId: [User]
  }
  type Query {
    users: [User]
    coupons: [Coupon]
  }
`;

module.exports = typeDefs;
