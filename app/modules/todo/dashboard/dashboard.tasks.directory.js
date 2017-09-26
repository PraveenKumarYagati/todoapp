/**
 * Created by praveen on 8/31/16.
 */

(function(){
    angular.module('myApp')
        .directive('taskContent', taskContent);

    function taskContent(){
        return {
            restrict:'AE',
            templateUrl:'/app/partials/tasks.html'
        }
    }
})()