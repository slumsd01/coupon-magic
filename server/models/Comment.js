const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      require: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    couponId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Coupon',
      },
    ],
    userId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
