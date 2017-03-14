import Koa from 'koa';
import router from 'koa-router';
// https://github.com/koajs/bodyparser
import BodyParser from 'koa-bodyparser';

import routes from './routes';

console.log('Starting...');

const rootRouter = router();

const app = new Koa();

// x-response-time
app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger
app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response
app.use(new BodyParser());
app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(3000, () => {
  console.log('server listening...');
});

console.log('Started!');
