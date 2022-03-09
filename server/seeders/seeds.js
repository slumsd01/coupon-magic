const db = require('../config/connection');
const { Comment, User, Coupon } = require('../models');

const userData = require('./userData.json');
const couponData = require('./couponData.json');
const commentData = require('./commentData.json');

db.once('open', async () => {
  // clean database
  await User.deleteMany({});
  await Comment.deleteMany({});
  await Coupon.deleteMany({});

  // bulk create each model
  const users = await User.insertMany(userData);
  const coupons = await Coupon.insertMany(couponData);
  const comments = await Comment.insertMany(commentData);

  for (newCoupon of coupons) {
    // randomly add each Coupon to a User
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.coupons.push(newCoupon._id);
    await tempUser.save();

    // // randomly add a Comment to each User
    // const tempComment = comments[Math.floor(Math.random() * comments.length)];
    // newCoupon.comment = tempComment._id;
    // await newCoupon.save();

    // // reference comment on coupons
    // tempComment.Coupon.push(newCoupon._id);
    // await tempComment.save();
  }

  // for (newClass of classes) {
  //   // randomly add each class to a school
  //   const tempSchool = schools[Math.floor(Math.random() * schools.length)];
  //   tempSchool.classes.push(newClass._id);
  //   await tempSchool.save();

  //   // randomly add a professor to each class
  //   const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
  //   newClass.professor = tempProfessor._id;
  //   await newClass.save();

  //   // reference class on professor model, too
  //   tempProfessor.classes.push(newClass._id);
  //   await tempProfessor.save();
  // }



  console.log('all done!');
  process.exit(0);
});
