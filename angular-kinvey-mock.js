(function KinveyAngularMockClosure() {
    'use strict';

    function $kinvey($q) {
        var Kinvey = {};

        // Mock data
        //
        // For consistent use throughout the mock module

        var mock = {};

        mock.id = 'mock123456mock123456mock';
        mock.acl = {
            creator: mock.id
        };
        mock.lmt = "2014-12-19T16:56:47.527Z";
        mock.ect = "2014-12-19T16:56:47.527Z";
        mock.kmd = {
            "lmt": mock.lmt,
            "ect": mock.ect
        };

        mock.username = 'mockUser123';
        mock.password = 'mockPassword';
        mock.password = 'mock@email.com';

        mock.user = {
            _id: mock.id,
            _acl: {
                creator: mock.id
            },
            _kmd: {
                ect: '',
                lmt: ''
            },
            username: mock.username,
            password: mock.password,
            email: mock.email
        };

        /**
         * Kinvey Module
         *
         * http://devcenter.kinvey.com/angular/reference/api/module-Kinvey.html
         */


        //
        // MEMBERS
        //

        Kinvey.API_ENDPOINT = 'https://angular.kinvey.mock';
        Kinvey.API_VERSION = 'X';
        Kinvey.SDK_VERSION = 'x.x.x';


        //
        // Methods
        // 

        Kinvey.getActiveUser = function() {
            var deferred = $q.defer();
            deferred.resolve(mock.user);
            return deferred.promise;
        };

        Kinvey.init = function() {
            var deferred = $q.defer();
            deferred.resolve(mock.user);
            return deferred.promise;
        };

        Kinvey.ping = function() {
            var deferred = $q.defer();

            deferred.resolve({
                version: 'x.x.x',
                kinvey: 'hello Mock App',
                appName: 'Mock App',
                environmentName: 'Mock Environment'
            });

            return deferred.promise;
        };

        // Query
        //
        // http://devcenter.kinvey.com/angular/reference/api/Kinvey.Query.html

        Kinvey.Query = function(filter, sort, skip, limit) {

            Kinvey.Query.prototype.and = function() {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.ascending = function(field) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.contains = function(field, values) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.containsAll = function(field, values) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.descending = function(field) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.equalTo = function(field, value) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.exists = function(field, flag) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.fields = function(fields) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.greaterThan = function(field, value) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.greaterThanOrEqualTo = function(field, value) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.lessThan = function(field, value) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.lessThanOrEqualTo = function(field, value) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.limit = function(limit) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.matches = function(field, regExp, options) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.mod = function(field, divisor, remainder) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.near = function(field, coord, maxDistance) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.nor = function() {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.notContainedIn = function(field, values) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.notEqualTo = function(field, value) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.or = function() {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.size = function(field, size) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.skip = function(skip) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.sort = function(sort) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.toJSON = function() {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.withinBox = function(field, bottomLeftCoord, upperRightCoord) {
                return new Kinvey.Query();
            };

            Kinvey.Query.prototype.withinPolygon = function(field, coords) {
                return new Kinvey.Query();
            };
        };

        // Kinvey.File
        //
        // kinvey-angular-1.1.9.js, line 2607
        // http://devcenter.kinvey.com/angular/reference/api/Kinvey.File.html

        Kinvey.File = {
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

        // Kinvey.User
        //
        // kinvey-angular-1.1.9.js, line 3375
        // http://devcenter.kinvey.com/angular/reference/api/Kinvey.User.html

        Kinvey.User = {};


        return Kinvey;
    }
    $kinvey.$inject = ["$q"];


    angular.module('kinvey-mock', [])
        .factory('$kinvey', $kinvey);

}());
