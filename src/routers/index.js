/**
 * Created by Izzy on 28/02/15.
 */
'use strict'

var Router = require('koa-router');
var React = require('react');
var index = React.createFactory(require('../views/index'));
var indexRouter = new Router();
var dao = require('../dao/mongo');

indexRouter.get('/get', function *() {
    var data = yield dao.get();
    this.body="get done";

});
indexRouter.get('/insert', function *() {
    var data = yield dao.massInsert();
    this.body="insert done";

});

module.exports = indexRouter;

