/**
 * Created by Izzy on 28/02/15.
 */
'use strict'

var Router = require('koa-router');
var React = require('react');
var index = React.createFactory(require('../views/index'));
var indexRouter = new Router();
var mongoDao = require('../dao/mongo');
var mysqlDao = require('../dao/mysql');

indexRouter.get('/mongo/get', function *() {
    var data = yield mongoDao.get();
    this.body="mongo get done";

});
indexRouter.get('/mongo/insert', function *() {
    var data = yield mongoDao.massInsert();
    this.body="mongo insert done";

});

indexRouter.get('/mysql/get', function *() {
    var data = yield mysqlDao.get();
    this.body="mysql get done";

});
indexRouter.get('/mysql/insert', function *() {
    var data = yield mysqlDao.insert();
    this.body="mysql insert done";

});


module.exports = indexRouter;

