'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://119.202.28.205',
    host: '119.202.28.205',
    database: 'hero-dev',
    port:'9317',
    options:{
      user: 'admin',
      pass: 'jhsong85',
    }
  },
  seedDB: false
};
