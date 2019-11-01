'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg, index';
  }

  async index2() {
    const { ctx } = this;
    console.log(ctx.request.body.name);
    ctx.body = 'hi, egg, index2';
  }
}

module.exports = HomeController;
