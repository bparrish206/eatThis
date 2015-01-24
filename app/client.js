"use strict";
require('angular/angular');

var mmmApp = angular.module('mmmApp', []);

//controllers
require('./js/controllers/eatCtrl.js')(mmmApp);
