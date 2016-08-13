angular.module('ngExGraderApp')
  .directive('codeBox', function(){
    return {
      restrict: 'E',
      scope: {
        functionHeader: '='
      },
      template:`
        <textarea>
      `,
      link: function(scope, elem, attrs){
        elem.find('textarea').val(scope.functionHeader);
      }
    };
  });
