const { AuthenticationError } = require('apollo-server-express');
const { User,Comment ,Coupon} = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('coupons');
      },
      coupons: async () => {
        return Coupon.find().sort({ createdAt: -1 });
      }
    }
  };
  

module.exports = resolvers;
