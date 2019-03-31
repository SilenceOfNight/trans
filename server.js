const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const port = parseInt(process.env.PORT, 10) || 9999;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/healthcheck', async ctx => {
    ctx.body = 'ok';
    ctx.respond = true;
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(router.routes());
  server.listen(port, error => {
    if (!error) {
      console.log(`> Ready on http://localhost:${port}`);
    }
  });
});
