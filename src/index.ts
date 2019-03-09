import { buildURL, IQuery } from './builder';
import { get } from './httpGet';

class Fuzzer {
  public static init = () => new Fuzzer();
  private q: IQuery = {};
  private constructor(qqq?: IQuery) {
    this.q = qqq ? { ...qqq } : {};
  }

  public ask = () => get(buildURL(this.q));

  // Queries
  public meansLike = (ml: string) => this.k({ ml });
  public max = (max: number) => this.k({ max });

  private k = (qq: IQuery) => new Fuzzer({ ...this.q, ...qq });
}

module.exports = Fuzzer.init;
export default Fuzzer.init;

// const q = Fuzzer.init()
//   .meansLike('hello')
//   .max(3)
//   .ask()
//   // tslint:disable-next-line: no-console
//   .then(console.log)
//   // tslint:disable-next-line: no-console
//   .catch(console.error);
