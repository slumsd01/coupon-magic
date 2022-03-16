
// generate dummy data
const faker = require('faker');

const db = require('../config/connection');
const { Coupon, User, Comment } = require('../models');

db.once('open', async () => {
  // await Coupon.deleteMany({});
  // await User.deleteMany({});
  // await Comment.deleteMany({})

  // create user data
  const userData = [];

  for (let i = 0; i < 25; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create coupon
  let createdCoupons = [];
  for (let i = 0; i < 50; i += 1) {
    const product = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    const { username, _id: userId } = createdUsers[randomUserIndex];

    const createdCoupon = await Coupon.create({ username, product});

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { coupons: createdCoupon._id } }
    );

    createdCoupons.push(createdCoupon);
  }

  // create comments
  for (let i = 0; i < 50; i += 1) {
    const commentText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    const { username } = createdUsers[randomUserIndex];

    const randomCouponIndex = Math.floor(Math.random() * createdCoupons.length);
    const { _id: couponId } = createdCoupons[randomCouponIndex];

    await Coupon.updateOne(
      { _id: couponId },
      { $push: { comments: { commentText, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});