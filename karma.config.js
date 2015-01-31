"use strict";

module.exports = function(config) {
  config.set({
  basePath: '',

  frameworks: ['jasmine'],

  files: [
    'bower_components/angular/angular.js',
    'tests/angular_testbundle.js'
  ],

  exclude: [
    '**/*.swp'
  ],

  preprocessors: {},

  reporters: ['progress'],

  port: 9876,

  colors: true,

  logLevel: config.LOG_INFO,

  autoWatch: false,

  browsers: ['PhantomJS'],

  singleRun: true
  });
};
