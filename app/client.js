"use strict";

require('angular/angular');
require('angular-route');

var eat = angular.module('eat', ['ngRoute']);

//services
require('./services/eatBackend.js')(eat);

//controller
require('./controllers/eatctlr.js')(eat);
