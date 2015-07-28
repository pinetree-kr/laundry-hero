'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'hero-secret',

  FACEBOOK_ID:      '1634743803463977',
  FACEBOOK_SECRET:  '01701b473e050faf2dd4e449a0f74e56',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
