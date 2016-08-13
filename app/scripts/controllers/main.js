'use strict';

/**
 * @ngdoc function
 * @name ngExGraderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngExGraderApp
 */
angular.module('ngExGraderApp')
  .controller('MainCtrl', ['$scope', '$sce', function ($scope, $sce) {
    $scope.exercise = {
      url: "object-access-4",
      shortName: "Unknown Prop Access 2",
      text: "Let there be a simple object named kitty of the following form:<br> var kitty = { name: 'Mr. FluffySnuggles' };<br><br>"+
          "If we ever need to access the 'name' property of kitty, we can type kitty.name. However, if the name of the property is <em>unknown to you</em> at the time you write the code, this will not work.<br><br>"+
          "For instance, let there be a variable prop which has some string value, for example 'age'. If you want to use prop to give a new value to"+
          "the property 'age' inside kitty, you can do this:<br><br> kitty[prop] = 5;<br><br>"+
          "Thus, the statement object[variablename] is equivalent to object.variablevalue. In other words:<br><br>"+
          "kitty['name'] is the same as kitty.name, and <br>kitty[prop] is the same as kitty['age'], which is the same as kitty.age<br><br>"+
          "Write a function <em>accessProp</em> which receives an object obj and a string str and returns the value of the property inside obj which has the same name as the value of str.<br><br>"+
          "For example, if obj is {a: 5}, then a call to accessProp(obj, 'a') should return 5.",
      functionHeader: "function accessProp(a, b){\n    \n}",
      testCases: ["accessProp({obj: 5667}, 'obj');", "accessProp({prop1: 48}, 'prop1');", "accessProp({underscore: '___'}, 'underscore');",
                 "accessProp({key: 'value', prop2: 456987321}, 'prop2');", "accessProp({key: 'over 9000'}, 'key');"],
      testResults: ["5667", "48", "___", "456987321", "over 9000"],
      difficulty: 2
    };
    $scope.exerciseText = function(){ return $sce.trustAsHtml(  $scope.exercise.text); };
    $scope.exercises = [{"shortName":"Unknown Prop Access 2","url":"object-access-4"},{"shortName":"Unknown Prop Access","url":"object-access-3"},{"shortName":"Object Method Access","url":"object-access-2"},{"shortName":"Object Property Access","url":"object-access"},{"shortName":"String Substring 2","url":"string-sub2"},{"shortName":"String Substr","url":"string-sub"},{"shortName":"String Character","url":"string-position"},{"shortName":"String Length","url":"string-length"},{"shortName":"Simple if Statement","url":"make-decision"},{"shortName":"Loop through range","url":"console-loop"},{"shortName":"Array average","url":"avg"},{"shortName":"Array Initialization","url":"fizzArray"},{"shortName":"Array containment","url":"containsThing"},{"shortName":"Array 1s and 4s","url":"no14"},{"shortName":"Easy Array Map","url":"map-1"},{"shortName":"Binary Digits","url":"binary-digits"},{"shortName":"Password Checker","url":"password-checker"},{"shortName":"Name Validator","url":"name-validator"},{"shortName":"Object Creation","url":"dank-memes"},{"shortName":"Max Span","url":"max-span"},{"shortName":"Fizz Buzz ","url":"fizz-buzz"},{"shortName":"Two Twos","url":"two-two"}];
  }]);
