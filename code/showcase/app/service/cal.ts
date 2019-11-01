import { Service } from 'egg';

export default class Test extends Service {
  public async add(a: number, b: number) {
    const r1 = await (this.app as any).mysql.query(
      'insert into users(name, password) values("my2", "1234")',
    );
    console.log(r1);
    const r = await (this.app as any).mysql.query('select * from users');
    console.log(r);
    const users = r.map(row => {
      return {
        name: row.name,
        pwd: row.password,
      };
    });

    return { sum: a + b, users };
  }
}
