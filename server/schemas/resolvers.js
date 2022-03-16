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
    
    coupons: async() => {
      return Coupon.find()
    },

    coupon: async (parent, { _id }) => {
      return Coupon.findOne({ _id })
      .populate({
        path: 'comments',
        populate: {
          path: "user"
        }
      });
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
        const coupon = await Coupon.create({ ...args, username: context.user.username });

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

        let comment = await Comment.create({ commentText: commentText, user: context.user });

        let couponToUpdate = await Coupon.findByIdAndUpdate(
          { _id: couponId },
          { $push: { comments: comment } },
          { new: true }
        );
        
        let commentToUpdate = await Comment.findByIdAndUpdate(
          { _id: comment._id },
          { $push: { coupon: couponToUpdate } },
          { new: true }
        );

        return commentToUpdate;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;
