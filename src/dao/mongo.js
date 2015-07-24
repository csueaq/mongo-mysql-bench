var monk = require('monk');
var config = require("config");
var wrap = require('co-monk');
var randomstring = require("randomstring");
// mongo
var db = monk(config.get("db.host")+":"+ config.get("db.port") + "/" + config.get("db.name"));

var testCollection = 'benchmark';
var benchCol = db.get(testCollection);
benchCol.index('email',{ unique: true });
benchCol.index('username',{ unique: true });
benchCol.index('postcode',{ unique: true });

var dao = {
    get : function *() {

        var doc = yield wrap(benchCol.find(
            {},
            {
                limit: 100,
                sort: {address: 1}
            }
            )
        );
        //console.log(JSON.stringify(doc));
        return JSON.parse(JSON.stringify(doc));
    },
    massInsert : function *() {


        yield wrap(benchCol.insert(
            {
                username:randomstring.generate(),
                email : randomstring.generate(10)+'@'+randomstring.generate(3)+".com",
                password: randomstring.generate(),
                address: randomstring.generate(),
                postcode:randomstring.generate(7)
            }
        ));

    }
};

module.exports = dao;