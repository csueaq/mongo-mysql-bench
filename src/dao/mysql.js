/**
 * Created by Izzy on 24/07/15.
 */
var mysql      = require('mysql');
var wrapper      = require('co-mysql');
var config = require("config");
var randomstring = require("randomstring");
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : config.get("mysql.host"),
    user : config.get("mysql.username"),
    password : config.get("mysql.password"),
    database : config.get("mysql.dbName")
});
var p = wrapper(pool);

var dao = {
    get : function *() {
        yield p.query('SELECT * from benchmark order by address limit 100');
    },
    insert : function *() {
        var data = {
            username: randomstring.generate(),
            email: randomstring.generate(10) + '@' + randomstring.generate(3) + ".com",
            password: randomstring.generate(),
            address: randomstring.generate(),
            postcode: randomstring.generate(7)
        };
        yield p.query('insert into benchmark set ? ', data);
    }
};

module.exports = dao;