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
    commentText: String
    createdAt: String
    userId: [User]
  }
  type Query {
    users: [User]
  }
`;

module.exports = typeDefs;
