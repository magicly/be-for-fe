import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async add1() {
    const { ctx } = this;
    // 获取参数, 参数校验
    const { a, b } = ctx.request.body;
    if (a > 10 || a < 0 || b > 10 || b < 0) {
      ctx.body = { errCode: 1, errMsg: '数字必须小于10大于0' };
      return;
    }

    ctx.body = await ctx.service.cal.add(a, b);
  }
}
