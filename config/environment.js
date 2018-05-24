'use strict';

module.exports = function (environment) {
  let ENV = {
    torii: {
      sessionServiceName: 'session'
    },
    modulePrefix: 'bus-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    firebase: {
      /*apiKey: "AIzaSyA1df4j8hglkvJhXGeb3xvn1Vw7EBqApYg",
      authDomain: "busapp-35bb0.firebaseapp.com",
      databaseURL: "https://busapp-35bb0.firebaseio.com",
      projectId: "busapp-35bb0",
      storageBucket: "busapp-35bb0.appspot.com",
      messagingSenderId: "826322664158"
      */
      apiKey: "AIzaSyA4wH7HXNzGKQkapR-QPzsR5cpUfTejNxQ",
      authDomain: "dcps-test-8426f.firebaseapp.com",
      databaseURL: "https://dcps-test-8426f.firebaseio.com",
      projectId: "dcps-test-8426f",
      storageBucket: "dcps-test-8426f.appspot.com",
      messagingSenderId: "814727370010"

    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
