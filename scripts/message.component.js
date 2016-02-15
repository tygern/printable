(function () {
    'use strict';

    angular.module('printable')
        .component('message', {
            template: '<h3>{{$ctrl.message}}</h3>',
            controller: function (MessageService) {
                var $ctrl = this;

                MessageService.onMessage(function (message) {
                    $ctrl.message = message;
                    console.log('received: ' + message)
                });
            }
        });
})();