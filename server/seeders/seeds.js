// generate dummy data
const faker = require('faker');

const db = require('../config/connection');


db.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];







  console.log('all done!');
  process.exit(0);
});
