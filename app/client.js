"use strict";

require('angular/angular');
require('angular-route');

var eat = angular.module('eat', ['ngRoute']);

//controller
require('./controllers/eatctlr.js')(eat);
