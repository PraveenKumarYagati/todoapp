(function(){
    angular.module('myApp')
        .config(toDoAppConfig)

    /*Injectors*/
    toDoAppConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
    function toDoAppConfig($stateProvider, $urlRouterProvider, $locationProvider){
        //TODO: Add two more parameters here
        $urlRouterProvider.otherwise('/notavailable');

        $stateProvider.state('dashboard',{
            url:'/',
            templateUrl:'/app/partials/dashboard.html',
            controller: 'tasks',
            controllerAs: 'tc'
        })
        $stateProvider.state('notavailable',{
            url:'/notavailable',
            templateUrl:'/app/partials/notavailable.html'
        })
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
})();