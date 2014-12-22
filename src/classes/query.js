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
