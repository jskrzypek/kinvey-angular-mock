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

### Module Members
* $kinvey.API_ENDPOINT
* $kinvey.API_VERSION
* $kinvey.SDK_VERSION

### Module Methods
* $kinvey.getActiveUser()
* $kinvey.init()
* $kinvey.ping()

### Classes

#### Kinvey.Acl

*Assuming `var acl = new $kinvey.Acl(<entity>);`:*

* acl.addReaderGroup()
* acl.addWriter()
* acl.addWriterGroup()
* acl.getCreator()
* acl.getReaderGroups()
* acl.getReaders()
* acl.getWriterGroups()
* acl.getWriters()
* acl.isGloballyReadable()
* acl.isGloballyWritable()
* acl.removeReader()
* acl.removeReaderGroup()
* acl.removeWriter()
* acl.removeWriterGroup()
* acl.setGloballyReadable()
* acl.setGloballyWritable()
* acl.toJSON()

#### Kinvey.Query

*Assuming `var query = new $kinvey.Query();`:*

* query.and()
* query.ascending()
* query.contains()
* query.containsAll()
* query.descending()
* query.equalTo()
* query.exists()
* query.fields()
* query.greaterThan()
* query.greaterThanOrEqualTo()
* query.lessThan()
* query.lessThanOrEqualTo()
* query.limit()
* query.matches()
* query.mod()
* query.near()
* query.nor()
* query.notContainedIn()
* query.notEqualTo()
* query.or()
* query.size()
* query.skip()
* query.sort()
* query.toJSON()
* query.withinBox()
* query.withinPolygon()

### Namespaces

#### Kinvey.DataStore
* $kinvey.DataStore.clean()
* $kinvey.DataStore.count()
* $kinvey.DataStore.destroy()
* $kinvey.DataStore.find()
* $kinvey.DataStore.get()
* $kinvey.DataStore.group()
* $kinvey.DataStore.save()
* $kinvey.DataStore.update()

#### Kinvey.File
* $kinvey.File.upload(file)
* $kinvey.File.destroy(fileId)
* $kinvey.File.stream(fileId)

#### Kinvey.User
* $kinvey.User.count()
* $kinvey.User.create()
* $kinvey.User.destroy()
* $kinvey.User.exists()
* $kinvey.User.find()
* $kinvey.User.forgotUsername()
* $kinvey.User.get()
* $kinvey.User.group()
* $kinvey.User.login()
* $kinvey.User.loginWithProvider()
* $kinvey.User.logout()
* $kinvey.User.me()
* $kinvey.User.resetPassword()
* $kinvey.User.restore()
* $kinvey.User.signup()
* $kinvey.User.signupWithProvider()
* $kinvey.User.update()
* $kinvey.User.verifyEmail()

## TODO
PRs welcome!

### Module Methods
* $kinvey.execute(id, args, options)
* $kinvey.setActiveUser(user)

### Classes
#### Kinvey.Error
#### Kinvey.Group
#### Kinvey.Metadata

### Namespaces
#### Kinvey.Defer
#### Kinvey.Social
#### Kinvey.Sync


# Development

1. Fork repo.
1. Create feature branch.
1. Edit `/src` code.
1. Increment bower.json version.
1. Run `gulp build`.
1. Submit a PR.

*Need more help?  Ask away on the issue queue, thanks!*
