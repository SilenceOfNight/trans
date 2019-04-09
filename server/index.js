const Koa = require('koa');
const authRouter = require('./routers/auth');

const server = new Koa();
server.use(authRouter.routes());

module.exports = server;
