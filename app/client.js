"use strict";
require('angular/angular');
require('angular-route');

var mmmApp = angular.module('mmmApp', ['ngRoute']);
//services
require('./js/services/eatBackend.js')(mmmApp);

//controllers
require('./js/controllers/eatCtrl.js')(mmmApp);
