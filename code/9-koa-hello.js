const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log('1111===ctx.method: ', ctx.method);
  console.log('start: ', start);
  await next();
  console.log('after next');
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(async (ctx, next) => {
  console.log('2222===ctx.method: ', ctx.method);
  ctx.method = 'POST';
  await next();
  console.log('after next in method', ctx.method);
});

// response
app.use(async (ctx, next) => {
  // console.log(ctx.req);
  // console.log(ctx.res);
  // console.log(ctx.request);
  // console.log(ctx.response);
  console.log('3333===ctx.method: ', ctx.method);
  console.log('1111');
  ctx.body = 'Hello Koa';

  await next();
  console.log('222');
});

app.listen(3000);

console.log('listen on 3000');
