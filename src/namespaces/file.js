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
