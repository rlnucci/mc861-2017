// https://github.com/alexmingoia/koa-router/tree/master/
import Router from 'koa-router';

const router = new Router({
  prefix: '/v1'
});

router.get('/health-check', function (ctx, next) {
  ctx.body = '200 OK';
});

router.get('/json', function (ctx, next) {
  ctx.body = {
    'ok': 200,
    __dirname
  };
});

router.get('/named/:path_param', function (ctx, next) {
  ctx.body = ctx.params;
});

router.post('/payload', function (ctx, next) {
  ctx.body = ctx.request.body;
});

export default router;
