'use strict';

require('angular/angular');
require('angular-route');

var eatApp = angular.module('eatApp', ['ngRoute']);

//services
require('./js/services/eatBackend.js')(eatApp);

//controller
require('./js/controllers/eatCtrl.js')(eatApp);
