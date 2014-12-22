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
