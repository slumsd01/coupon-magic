const { AuthenticationError } = require('apollo-server-express');
const { User,Comment } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().sort({ createdAt: -1 });
      }
    }
  };
  

module.exports = resolvers;
