/**
 * Created by praveen on 8/26/16.
 */


(function(){
    angular.module('myApp')
        .controller('tasks', tasks)

    tasks.$inject = ['$scope', 'taskService']
    function tasks($scope, taskService){
        var tc = this;
        tc.ALL_TASKS = [];

        loadTasksJSON();

        /**
         * Loads the JSON data
         */
        function loadTasksJSON(){
            taskService.readTask()
                .then(function(response){ tc.ALL_TASKS = response.data;})
                .catch(function(error){ console.log("---Error occured while reading tasks---"); });
        }
    }
})()