const server = require('./server');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './view' });
const handle = app.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 9999;

app.prepare().then(() => {
  const Router = require('koa-router');
  const router = new Router();
  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
  server.use(router.routes());

  server.listen(port, error => {
    if (!error) {
      console.log(`http://localhost:${port}`);
    }
  });
});
