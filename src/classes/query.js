// Query
//
// http://devcenter.kinvey.com/angular/reference/api/Kinvey.Query.html

Kinvey.Query = function(filter, sort, skip, limit) {
    var Query = function() {
        
    };

    Query.prototype.and = function() {
        return new Query();
    };
    Query.prototype.ascending = function(field) {
        return new Query();
    };
    Query.prototype.contains = function(field, values) {
        return new Query();
    };
    Query.prototype.containsAll = function(field, values) {
        return new Query();
    };
    Query.prototype.descending = function(field) {
        return new Query();
    };
    Query.prototype.equalTo = function(field, value) {
        return new Query();
    };
    Query.prototype.exists = function(field, flag) {
        return new Query();
    };
    Query.prototype.fields = function(fields) {
        return new Query();
    };
    Query.prototype.greaterThan = function(field, value) {
        return new Query();
    };
    Query.prototype.greaterThanOrEqualTo = function(field, value) {
        return new Query();
    };
    Query.prototype.lessThan = function(field, value) {
        return new Query();
    };
    Query.prototype.lessThanOrEqualTo = function(field, value) {
        return new Query();
    };
    Query.prototype.limit = function(limit) {
        return new Query();
    };
    Query.prototype.matches = function(field, regExp, options) {
        return new Query();
    };
    Query.prototype.mod = function(field, divisor, remainder) {
        return new Query();
    };
    Query.prototype.near = function(field, coord, maxDistance) {
        return new Query();
    };
    Query.prototype.nor = function() {
        return new Query();
    };
    Query.prototype.notContainedIn = function(field, values) {
        return new Query();
    };
    Query.prototype.notEqualTo = function(field, value) {
        return new Query();
    };
    Query.prototype.or = function() {
        return new Query();
    };
    Query.prototype.size = function(field, size) {
        return new Query();
    };
    Query.prototype.skip = function(skip) {
        return new Query();
    };
    Query.prototype.sort = function(sort) {
        return new Query();
    };
    Query.prototype.toJSON = function() {
        return new Query();
    };
    Query.prototype.withinBox = function(field, bottomLeftCoord, upperRightCoord) {
        return new Query();
    };
    Query.prototype.withinPolygon = function(field, coords) {
        return new Query();
    };
};
