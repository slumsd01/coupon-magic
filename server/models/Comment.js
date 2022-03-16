const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema(
  {
    commentText: {
      type: String,
      require: true,
      trim: true,
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    coupon: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Coupon',
      },
    ],
    user: [
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

const Comment = model("Comment", commentSchema);

module.exports = Comment;