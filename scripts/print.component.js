(function () {
    'use strict';

    angular.module('printable')
        .component('print', {
            template: '<h1>{{$ctrl.message}}</h1>',
            controller: function ($window, $timeout, $state, MessageService) {
                var $ctrl = this;

                MessageService.onMessage(function (message) {
                    $ctrl.message = message;
                    console.log('print: ' + message)
                });

                $timeout(function () {
                    $window.print();
                    $state.go('home');
                }, 0);
            }
        })
})();