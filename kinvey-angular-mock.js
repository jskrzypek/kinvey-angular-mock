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

        Kinvey.execute = function(id, args, options) {
            var deferred = $q.defer();

            deferred.resolve({
                namespace: 'rpc',
                collection: 'custom',
                id: id,
                data: args,
                auth: true
            });

            return deferred.promise;
        };

        // Acl
        //
        // http://devcenter.kinvey.com/angular/reference/api/Kinvey.Acl.html


        Kinvey.Acl = function() {
            return {
                addReader: function(group) {

                },
                addReaderGroup: function(group) {

                },
                addWriter: function(user) {

                },
                addWriterGroup: function(group) {

                },
                getCreator: function() {

                },
                getReaderGroups: function() {

                },
                getReaders: function() {

                },
                getWriterGroups: function() {

                },
                getWriters: function() {

                },
                isGloballyReadable: function() {

                },
                isGloballyWritable: function() {

                },
                removeReader: function(user) {

                },
                removeReaderGroup: function(group) {

                },
                removeWriter: function(user) {

                },
                removeWriterGroup: function(group) {

                },
                setGloballyReadable: function(gr) {

                },
                setGloballyWritable: function(gw) {

                },
                toJSON: function() {

                }
            };
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

        // Kinvey.DataStore
        //
        // kinvey-angular-1.1.9.js, line 2197
        // http://devcenter.kinvey.com/angular/reference/api/Kinvey.DataStore.html

        Kinvey.DataStore = {

            clean: function(collection, query, options) {
                var deferred = $q.defer();

                if (collection && query) {
                    deferred.resolve('mock $kinvey.DataStore.clean() success');
                } else {
                    deferred.reject('mock $kinvey.DataStorer.clean() fail: collection && query is required');
                }

                return deferred.promise;
            },

            count: function(collection, query, options) {
                var deferred = $q.defer();

                if (collection && query) {
                    deferred.resolve('mock $kinvey.DataStore.count() success');
                } else {
                    deferred.reject('mock $kinvey.DataStorer.count() fail: collection && query is required');
                }

                return deferred.promise;
            },

            destroy: function(collection, id, options) {
                var deferred = $q.defer();

                if (collection && id) {
                    deferred.resolve('mock $kinvey.DataStore.destroy() success');
                } else {
                    deferred.reject('mock $kinvey.DataStorer.destroy() fail: collection && id is required');
                }

                return deferred.promise;
            },

            find: function(collection, query, options) {
                var deferred = $q.defer();

                if (collection && query) {
                    deferred.resolve('mock $kinvey.DataStore.find() success');
                } else {
                    deferred.reject('mock $kinvey.DataStore.find() fail: collection && query is required');
                }

                return deferred.promise;
            },

            get: function(collection, id, options) {
                var deferred = $q.defer();

                if (collection && id) {
                    deferred.resolve('mock $kinvey.DataStore.get() success');
                } else {
                    deferred.reject('mock $kinvey.DataStore.get() fail: collection && id is required');
                }

                return deferred.promise;
            },

            group: function(collection, aggregation, options) {
                var deferred = $q.defer();

                if (collection && aggregation) {
                    deferred.resolve('mock $kinvey.DataStore.group() success');
                } else {
                    deferred.reject('mock $kinvey.DataStorer.group() fail: collection && aggregation is required');
                }

                return deferred.promise;
            },

            save: function(collection, document, options) {
                var deferred = $q.defer();

                if (collection && document) {
                    deferred.resolve('mock $kinvey.DataStore.save() success');
                } else {
                    deferred.reject('mock $kinvey.DataStore.save() fail: collection && document is required');
                }

                return deferred.promise;
            },

            update: function(collection, document, options) {
                var deferred = $q.defer();

                if (collection && document) {
                    deferred.resolve('mock $kinvey.DataStore.update() success');
                } else {
                    deferred.reject('mock $kinvey.DataStorer.update() fail: collection && document is required');
                }

                return deferred.promise;
            }
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

        Kinvey.User = {
            count: function(query, options) {
                var deferred = $q.defer();

                if (!!query) {
                    deferred.resolve('mock $kinvey.User.count() success');
                } else {
                    deferred.reject('mock $kinvey.User.count() fail: query is required');
                }

                return deferred.promise;
            },

            create: function(data, options) {
                var deferred = $q.defer();

                if (!!data) {
                    deferred.resolve('mock $kinvey.User.create() success');
                } else {
                    deferred.reject('mock $kinvey.User.create() fail: data is required');
                }

                return deferred.promise;
            },

            destroy: function(id, options) {
                var deferred = $q.defer();

                if (!!id) {
                    deferred.resolve('mock $kinvey.User.destroy() success');
                } else {
                    deferred.reject('mock $kinvey.User.destroy() fail: id is required');
                }

                return deferred.promise;
            },

            exists: function(username, options) {
                var deferred = $q.defer();

                if (!!username) {
                    deferred.resolve('mock $kinvey.User.exists() success');
                } else {
                    deferred.reject('mock $kinvey.User.exists() fail: username is required');
                }

                return deferred.promise;
            },

            find: function(query, options, discover) {
                var deferred = $q.defer();

                if (!!query) {
                    deferred.resolve('mock $kinvey.User.find() success');
                } else {
                    deferred.reject('mock $kinvey.User.find() fail: query is required');
                }

                return deferred.promise;
            },

            forgotUsername: function(email, options) {
                var deferred = $q.defer();

                if (!!email) {
                    deferred.resolve('mock $kinvey.User.forgotUsername() success');
                } else {
                    deferred.reject('mock $kinvey.User.forgotUsername() fail: email is required');
                }

                return deferred.promise;
            },

            get: function(id, options) {
                var deferred = $q.defer();

                if (!!id) {
                    deferred.resolve('mock $kinvey.User.get() success');
                } else {
                    deferred.reject('mock $kinvey.User.get() fail: id is required');
                }

                return deferred.promise;
            },

            group: function(aggregation, options) {
                var deferred = $q.defer();

                if (!!aggregation) {
                    deferred.resolve('mock $kinvey.User.group() success');
                } else {
                    deferred.reject('mock $kinvey.User.group() fail: aggregation is required');
                }

                return deferred.promise;
            },

            login: function(usernameOrData, password, options) {
                var deferred = $q.defer();
                var hasUsernamePasswordData = Object.prototype.toString(usernameOrData) === '[object Object]' && usernameOrData.hasOwnProperty('username') && usernameOrData.hasOwnProperty('password');
                var hasUsernamePasswordParams = usernameOrData.length > 0 && password.length > 0;

                if (hasUsernamePasswordData || hasUsernamePasswordParams) {
                    deferred.resolve('mock $kinvey.User.login() success');
                } else {
                    deferred.reject('mock $kinvey.User.login() fail: usernameOrData && passwordis required');
                }

                return deferred.promise;
            },

            loginWithProvider: function(provider, tokens, options) {
                var deferred = $q.defer();

                if (!!provider) {
                    deferred.resolve('mock $kinvey.User.loginWithProvider() success');
                } else {
                    deferred.reject('mock $kinvey.User.loginWithProvider() fail: provider is required');
                }

                return deferred.promise;
            },

            logout: function(options) {
                var deferred = $q.defer();
                deferred.resolve(mock.user);

                return deferred.promise;
            },

            me: function(options) {
                var deferred = $q.defer();
                deferred.resolve(mock.user);

                return deferred.promise;
            },

            resetPassword: function(username, options) {
                var deferred = $q.defer();

                if (!!username) {
                    deferred.resolve('mock $kinvey.User.resetPassword() success');
                } else {
                    deferred.reject('mock $kinvey.User.resetPassword() fail: username is required');
                }

                return deferred.promise;
            },

            restore: function(id, options) {
                var deferred = $q.defer();

                if (!!id) {
                    deferred.resolve('mock $kinvey.User.restore() success');
                } else {
                    deferred.reject('mock $kinvey.User.restore() fail: id is required');
                }

                return deferred.promise;
            },

            signup: function(data, options) {
                var deferred = $q.defer();

                if (!!data) {
                    deferred.resolve(mock.user);
                } else {
                    deferred.reject('mock $kinvey.User.signup() fail: data is required');
                }

                return deferred.promise;
            },

            signupWithProvider: function(provider, tokens, options) {
                var deferred = $q.defer();

                if (!!provider) {
                    deferred.resolve(mock.user);
                } else {
                    deferred.reject('mock $kinvey.User.signupWithProvider() fail: provider is required');
                }

                return deferred.promise;
            },

            update: function(data, options) {
                var deferred = $q.defer();

                if (!!data) {
                    deferred.resolve(mock.user);
                } else {
                    deferred.reject('mock $kinvey.User.update() fail: data is required');
                }

                return deferred.promise;
            },

            verifyEmail: function(username, options) {
                var deferred = $q.defer();

                if (!!username) {
                    deferred.resolve('mock $kinvey.User.verifyEmail() success');
                } else {
                    deferred.reject('mock $kinvey.User.verifyEmail() fail: username is required');
                }

                return deferred.promise;
            }
        };


        return Kinvey;
    }
    $kinvey.$inject = ["$q"];


    angular.module('kinvey-mock', [])
        .factory('$kinvey', $kinvey);

}());
