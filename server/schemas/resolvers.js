const { AuthenticationError } = require('apollo-server-express');
const { User, Coupon, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('coupons')
          .populate('comments');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('coupons')
        .populate('comments');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('coupons')
        .populate('comments');
    },
    coupons: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    coupon: async (parent, { _id }) => {
      return Thought.findOne({ _id });
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addCoupon: async (parent, args, context) => {
      if (context.user) {
        const coupon= await coupon.create({ ...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { coupons: coupon._id } },
          { new: true }
        );

        return coupon;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { couponId, commentText }, context) => {
      if (context.user) {
        const updatedCoupon = await Coupon.findOneAndUpdate(
          { _id: couponId },
          { $push: { comments: { commentText, username: context.user.username } } },
          { new: true, runValidators: true }
        );

        return updatedCoupon;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    // addComment: async (parent, { friendId }, context) => {
    //   if (context.user) {
    //     const updatedUser = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { comments: commentId } },
    //       { new: true }
    //     ).populate('comments');

    //     return updatedUser;
    //   }

    //   throw new AuthenticationError('You need to be logged in!');
    // }
  }
};

module.exports = resolvers;
