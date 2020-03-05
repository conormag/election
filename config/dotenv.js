/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(env) {
  return {
    clientAllowedKeys: ['GOOGLE_MAPS_API_KEY'],
    fastbootAllowedKeys: [],
    failOnMissingKey: true,
    path: path.join(path.dirname(__dirname), `.env-${env}`)
  }
};
