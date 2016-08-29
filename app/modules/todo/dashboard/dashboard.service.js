/**
 * Created by praveen on 8/29/16.
 */

(function(){
    angular.module('myApp')
        .service('taskService', taskService);

    taskService.$inject = ['$http']
    function taskService($http) {
        this.readTask = readTaskData;
        function readTaskData(){
            return $http.get('/app/data/tasks.json')
        }
    }
})()