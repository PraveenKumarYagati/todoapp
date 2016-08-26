/**
 * Created by praveen on 8/26/16.
 */

(function(){
    angular.module('myApp')
        .factory('taskFactory', taskFactory);

    taskFactory.$inject = ['$http', '$q']
    function taskFactory($http, $q) {
        return { getTask : getTasksData };

        function getTasksData(){
            console.log("start fac")
            /*Return promise object, so that it can be decided in controller*/
            var deffered = $q.defer();
            $http.get('/app/data/tasks.json').then(function (res) {
                deffered.resolve(res)
            }, function(errror){
                console.log("Error");
                deffered.reject(errror);
            })
            console.log("end fac");
            return deffered.promise
        }
    }
})()
