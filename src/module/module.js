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
