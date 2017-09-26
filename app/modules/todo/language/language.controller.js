/**
 * Created by praveen on 8/30/16.
 */

(function(){
    angular.module('todo.language')
        .controller('languageChange', languageChange)
    languageChange.$inject = ['$translate'];

    function languageChange($translate){
        var lcc = this;
        lcc.changeLanguage = changeLanguage;

        function changeLanguage(langKey){
            $translate.use(langKey);
        }
    }
})()