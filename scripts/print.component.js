(function () {
    'use strict';

    angular.module('printable')
        .component('print', {
            template: '<h2>Here it is</h2>' +
            '<message></message>',
            controller: function ($window, $timeout, $state) {
                $timeout(function () {
                    $window.print();
                    $state.go('home');
                }, 0);
            }
        })
})();