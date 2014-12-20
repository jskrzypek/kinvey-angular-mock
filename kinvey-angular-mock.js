(function AngularMockKinveyIIF() {
    'use strict';

    // Mock data
    var mock = {};
    mock.id = 'mock123456mock123456mock';
    mock.acl = { creator: mock.id };
    mock.lmt = "2014-12-19T16:56:47.527Z";
    mock.ect = "2014-12-19T16:56:47.527Z";
    mock.kmd = {"lmt": mock.lmt, "ect": mock.ect};

    mock.username = 'mockUser123';
    mock.password = 'mockPassword';
    mock.password = 'mock@email.com';

    mock.user = {
        _id: mock.id,
        _acl: { creator: mock.id },
        _kmd: { ect: '', lmt: '' },
        username: mock.username,
        password: mock.password,
        email: mock.email
    };

    var $kinvey = ['$q', function AngularKinveyMockService($q) {

            var service = {};


            /**
             * MEMBERS
             */

            service.API_ENDPOINT = 'https://angular.kinvey.mock';
            service.API_VERSION = 'X';
            service.SDK_VERSION = 'x.x.x';


            /**
             * METHODS
             */

            service.getActiveUser = function() {
                var deferred = $q.defer();
                deferred.resolve(mock.user);
                return deferred.promise;
            };

            service.init = function() {
                var deferred = $q.defer();
                deferred.resolve(mock.user);
                return deferred.promise;
            };

            service.ping = function() {
                var deferred = $q.defer();

                deferred.resolve({
                    version: 'x.x.x',
                    kinvey: 'hello Mock App',
                    appName: 'Mock App',
                    environmentName: 'Mock Environment'
                });

                return deferred.promise;
            };


            /**
             * NAMESPACES
             */

            //
            // DataStore
            //

            service.DataStore = {};

            //
            // File
            //

            service.File = {
                upload: function(file) {
                    var deferred = $q.defer();
                    if (!!file) {
                        deferred.resolve('mock File.upload success');
                    } else {
                        deferred.reject('mock File.upload fail, missing file');
                    }
                    return deferred.promise;
                },
                destroy: function(fileId) {
                    var deferred = $q.defer();
                    if (!!fileId) {
                        deferred.resolve('mock File.destroy success');
                    } else {
                        deferred.reject('mock File.destroy fail, missing fileId');
                    }
                    return deferred.promise;
                },
                stream: function(fileId) {
                    var deferred = $q.defer();
                    if (!!fileId) {
                        deferred.resolve('mock File.stream success');
                    } else {
                        deferred.reject('mock File.stream fail, missing fileId');
                    }
                    return deferred.promise;
                }
            };

            //
            // User
            //

            service.User = {};

            return service;
        }];

    angular.module('kinvey-mock', [])
        .factory('$kinvey', $kinvey);

}());
