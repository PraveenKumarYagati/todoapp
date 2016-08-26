'use strict';

(function(){
    angular.module('myApp').run(initToDoApp);
    initToDoApp.$inject = [];
    function initToDoApp(){

        /*Add some initial functions here*/
        console.log("App init script");
    }
})()
