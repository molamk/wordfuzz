import { buildURL, IQuery } from './builder';
import { get } from './helpers/httpGet';

type r = (v: string) => Fuzzer;

class Fuzzer {
  public static init = () => new Fuzzer();
  private q: IQuery = {};
  private constructor(received?: IQuery) {
    this.q = received ? { ...received } : {};
  }

  public ask = () => get(buildURL(this.q));

  // Queries
  public max = (max: number) => this.k({ max });
  public meansLike: r = ml => this.k({ ml });
  public soundsLike: r = sl => this.k({ sl });
  public spelledLike: r = sp => this.k({ sp });
  public nounFromAdjective: r = relJja => this.k({ relJja });
  public adjectiveFromNoun: r = relJjb => this.k({ relJjb });
  public synonym: r = relSyn => this.k({ relSyn });
  public triggerWord: r = relTrg => this.k({ relTrg });
  public antonym: r = relAnt => this.k({ relAnt });
  public moreGeneral: r = relSpc => this.k({ relSpc });
  public moreSpecific: r = relGen => this.k({ relGen });
  public partOf: r = relCom => this.k({ relCom });
  public comprises: r = relPar => this.k({ relPar });
  public frequentFollower: r = relBga => this.k({ relBga });
  public frequentPredecessor: r = relBgb => this.k({ relBgb });
  public rhymesWith: r = relRhy => this.k({ relRhy });
  public nearRhymesWith: r = relNry => this.k({ relNry });
  public consonantMatch: r = relCns => this.k({ relCns });

  private k = (qq: IQuery) => new Fuzzer({ ...this.q, ...qq });
}

module.exports = Fuzzer.init;
export default Fuzzer.init;
