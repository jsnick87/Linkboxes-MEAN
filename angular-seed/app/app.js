'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('TestController', ['$scope', function($scope){
  $scope.greeting = 'sup';
  $scope.data = { 
                  users: [
                    { name: 'Jason', email: 'test@test.com'},
                    { name: 'Snick', email: 'snick@test.com'}
                  ],
                  linkboxes: [
                    { 
                      displayname: 'Google', 
                      url: 'http://www.google.com',
                      fontcolor: '000000',
                      bgcolor: 'FFEF19',
                      target: "_blank",
                      index: 0
                    },
                    { 
                      displayname: 'ESPN', 
                      url: 'http://www.espn.com',
                      fontcolor: 'FFEF19',
                      bgcolor: '000000',
                      target: "_blank",
                      index: 1
                    },
                                        { 
                      displayname: 'Google', 
                      url: 'http://www.google.com',
                      fontcolor: '000000',
                      bgcolor: 'FFEF19',
                      target: "_blank",
                      index: 0
                    },
                    { 
                      displayname: 'ESPN', 
                      url: 'http://www.espn.com',
                      fontcolor: 'FFEF19',
                      bgcolor: '000000',
                      target: "_blank",
                      index: 1
                    },
                                        { 
                      displayname: 'Google', 
                      url: 'http://www.google.com',
                      fontcolor: '000000',
                      bgcolor: 'FFEF19',
                      target: "_blank",
                      index: 0
                    },
                    { 
                      displayname: 'ESPN', 
                      url: 'http://www.espn.com',
                      fontcolor: 'FFEF19',
                      bgcolor: '000000',
                      target: "_blank",
                      index: 1
                    },
                                        { 
                      displayname: 'Google', 
                      url: 'http://www.google.com',
                      fontcolor: '000000',
                      bgcolor: 'FFEF19',
                      target: "_blank",
                      index: 0
                    },
                    { 
                      displayname: 'ESPN', 
                      url: 'http://www.espn.com',
                      fontcolor: 'FFEF19',
                      bgcolor: '000000',
                      target: "_blank",
                      index: 1
                    },
                                        { 
                      displayname: 'Google', 
                      url: 'http://www.google.com',
                      fontcolor: '000000',
                      bgcolor: 'FFEF19',
                      target: "_blank",
                      index: 0
                    },
                    { 
                      displayname: 'ESPN', 
                      url: 'http://www.espn.com',
                      fontcolor: 'FFEF19',
                      bgcolor: '000000',
                      target: "_blank",
                      index: 1
                    },
                                        { 
                      displayname: 'Google', 
                      url: 'http://www.google.com',
                      fontcolor: '000000',
                      bgcolor: 'FFEF19',
                      target: "_blank",
                      index: 0
                    },
                    { 
                      displayname: 'ESPN', 
                      url: 'http://www.espn.com',
                      fontcolor: 'FFEF19',
                      bgcolor: '000000',
                      target: "_blank",
                      index: 1
                    }
                  ]                
                };
}]);
