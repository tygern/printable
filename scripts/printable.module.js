(function () {
    'use strict';

    angular.module('printable', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    template: '<home></home>'
                })
                .state('print', {
                    url: '/print',
                    template: '<print></print>'
                });
        });
})();