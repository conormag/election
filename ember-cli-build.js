'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const env = process.env.EMBER_ENV;
const config = require('./config/environment')(env);

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {

    inlineContent: {
      'google-maps': {
        content: '<script src="https://maps.googleapis.com/maps/api/js?key={KEY}" async defer></script>',
        postProcess: function(content) {
          return content.replace(/\{KEY\}/g, config['google-maps'].key);
        }
      }
    },

    postcssOptions: {
      compile: {
        plugins: [
          require('tailwindcss')
        ]
      }
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
