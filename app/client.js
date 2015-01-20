'use strict';

require('angular/angular');

var eatApp = angular.module('eatApp', []);

//services
require('./js/services/eatBackend.js')(eatApp);

//controller
require('./js/controllers/eatCtrl.js')(eatApp);
