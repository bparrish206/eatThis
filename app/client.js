'use strict';

require('angular/angular');

var eatApp = angular.module('eatApp', []);

//services
require('./services/eatBackend')(eatApp);

//controller
require('./controllers/eatCtrl')(eatApp);
