(function() {
    'use strict';

    var $kinveyMock = ['$q',
        function KinveyAngularMockService($q) {
            var service = {};


            /**
             * File
             */

            service.File = {
                upload: function(file) {
                    var deferred = $q.defer();
                    if (!!file) {
                        deferred.resolve('mock upload success');
                    } else {
                        deferred.reject('mock upload fail');
                    }
                    return deferred.promise;
                },
                destroy: function(fileId) {
                    var deferred = $q.defer();
                    if (fileId === '1') {
                        deferred.resolve('mock file destroy success');
                    } else {
                        deferred.reject('mock file destroy fail');
                    }
                    return deferred.promise;
                },
                stream: function(fileId) {
                    var deferred = $q.defer();
                    if (fileId === '1') {
                        deferred.resolve('mock file stream success');
                    } else {
                        deferred.reject('mock file stream fail');
                    }
                    return deferred.promise;
                }
            };


            /**
             * User
             */

            service.User = {};
        }
    ];


    /**
     * Module
     */

    angular.module('kinvey-mock', [])
        .service('$kinveyMock', $kinveyMock);

}());
