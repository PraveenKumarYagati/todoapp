/**
 * Created by praveen on 8/26/16.
 */


(function(){
    angular.module('myApp')
        .controller('tasks', tasks)

    tasks.$inject = ['$scope', 'taskFactory']
    function tasks($scope, taskFactory){
        var tc = this;
        tc.taskList = [];

        loadTasksJSON();

        /**
         * Loads the JSON data
         */
        function loadTasksJSON(){
            taskFactory.getTask().then(function(response){
                tc.taskList = response.data;
            });
        }
    }
})()