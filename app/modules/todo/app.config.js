(function(){
    angular.module('myApp')
        .config(toDoAppConfig)

    /*Injectors*/
    toDoAppConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$translateProvider']
    function toDoAppConfig($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider){
        /*====================Route=================================*/

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

        /*=======================Translate==============================*/
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/i18n/messages-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('sp');
    }
})();