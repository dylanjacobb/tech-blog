const sequelize = require('../config/connection');

const seedUser = require('./userData.js');
const seedPost = require('./postData.js');
const seedComment = require('./commentData.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  
  await seedPost();
  
  await seedComment();

  process.exit(0);
};

seedDatabase();