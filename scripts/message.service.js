(function () {
    'use strict';

    angular.module('printable')
        .service('MessageService', function () {
            var service = this;

            service.source = Rx.Observable.create(function (observer) {
                service.observer = observer;
            });

            this.setMessage = function (message) {
                service.message = message;
                service.observer.onNext(message);
            };

            this.onMessage = function (callback) {
                callback(service.message);
                service.source.subscribe(callback)
            };
        });
})();