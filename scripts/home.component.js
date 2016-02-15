(function () {
    'use strict';

    angular.module('printable')
        .component('home', {
            template: '<form ng-submit="$ctrl.save($ctrl.newMessage)">' +
            '<input type="text" ng-model="$ctrl.newMessage">' +
            '</form>' +
            '<h3>{{$ctrl.message}}</h3>',
            controller: function (MessageService) {
                var $ctrl = this;

                this.save = function (message) {
                    MessageService.setMessage(message);
                    $ctrl.newMessage = '';
                };

                MessageService.onMessage(function (message) {
                    $ctrl.message = message;
                    console.log('home: ' + message)
                });
            }
        });
})();