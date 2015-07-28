'use strict';

// Test specific configuration
// ===========================
module.exports = {
  // MongoDB connection options
  mongo: {
    //uri: 'mongodb://119.202.28.205',
    host: '119.202.28.205',
    database : 'hero-test',
    port: '9317',
    options:{
      user: 'admin',
      pass: 'jhsong85',
    }
  }
};