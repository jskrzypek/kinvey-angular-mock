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
