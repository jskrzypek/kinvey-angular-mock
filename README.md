kinvey-angular-mock
===================

Mock Kinvey's official `$kinvey` AngularJS service in unit tests.

*Psst... We also provide Kinvey's official Angular library on bower [here](https://github.com/GravityJack/bower-kinvey-angular).*


## Usage

Simply inject the mock module to override the `$kinvey` service with the mock `$kinvey` service:
```javascript
describe('kinvey-mock module', function() {

    beforeEach(function() {
        // this module will replace the real $kinvey service
        module('kinvey-mock');
    });

    it('should provide the mocked $kinvey service', function() {
        var $kinvey = $injector.get('$kinvey');

        $kinvey.ping().then(function(response) {
            expect(response.appName).toBe("Mock App");
        });
    });
});
```


## Support

### Members

* $kinvey.API_ENDPOINT
* $kinvey.API_VERSION
* $kinvey.SDK_VERSION

### Methods

* $kinvey.getActiveUser()
* $kinvey.init()
* $kinvey.ping()

### Namespaces

**Kinvey.DataStore**
* wip

**Kinvey.File**
* $kinvey.File.upload(file)
* $kinvey.File.destroy(fileId)
* $kinvey.File.stream(fileId)

**Kinvey.User**
* wip

## TODO
PRs welcome!

### Methods
* $kinvey.execute(id, args, options)
* $kinvey.setActiveUser(user)

### Classes
**Kinvey.Acl**

**Kinvey.Error**

**Kinvey.Group**

**Kinvey.Metadata**

**Kinvey.Query**


### Namespaces
**Kinvey.Defer**

**Kinvey.Social**

**Kinvey.Sync**
