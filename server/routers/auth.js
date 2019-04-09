const Router = require('koa-router');

const router = new Router({
  prefix: '/apis/v1',
});

router.get('/authentication', async ctx => {
  const encodeBase64 = source => {
    if (!source) {
      return source;
    }

    const Utf8 = require('crypto-js/enc-utf8');
    const Base64 = require('crypto-js/enc-base64');
    return Base64.stringify(Utf8.parse(source));
  };

  ctx.body = encodeBase64('hello world');
  ctx.respond = true;
});

module.exports = router;
