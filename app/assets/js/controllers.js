'use strict';

var app = angular.module('myApp.controllers', ['classDataService', 'dateTimeService', 'angularMoment']);

app.controller('scheduleCtrl', function($scope, classesFactory, dateTimeFactory) {
  $scope.yClass = classesFactory.all();

  $scope.dayAsText = function(n)
  {
    return dateTimeFactory.dayAsText(n);
  };

    $scope.currentMonth = function(n)
  {
    return dateTimeFactory.currentMonth(n);
  };

    $scope.currentDay = function(n)
  {
    return dateTimeFactory.currentDay(n);
  };

   $scope.currentDayOfWeek = function(n)
  {
    return dateTimeFactory.currentDayOfWeek(n);
  };

   $scope.classFilter = function (yClass) {
        return ;
    };


      $scope.repeatQ = function(n)
      {
        return new Array(n);
      };
});
