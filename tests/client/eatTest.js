'use strict';

require('../../app/client.js');
require('angular-mocks');

describe('mmmCtlr', function() {
  var $controllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should be able to create a controller', function() {
    var eatController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof eatController).toBe('object');
  });

});
