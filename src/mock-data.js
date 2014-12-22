// Mock data
//
// For consistent use throughout the mock module

var mock = {};

mock.id = 'mock123456mock123456mock';
mock.acl = {creator: mock.id};
mock.lmt = "2014-12-19T16:56:47.527Z";
mock.ect = "2014-12-19T16:56:47.527Z";
mock.kmd = {"lmt": mock.lmt, "ect": mock.ect};

mock.username = 'mockUser123';
mock.password = 'mockPassword';
mock.password = 'mock@email.com';

mock.user = {
    _id: mock.id,
    _acl: {creator: mock.id},
    _kmd: {ect: '', lmt: ''},
    username: mock.username,
    password: mock.password,
    email: mock.email
};
