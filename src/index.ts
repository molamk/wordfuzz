import axios from 'axios';
import { buildURL, IQuery } from './builder';
import { Deferred } from './deferred';

export const BASE_URL = 'https://api.datamuse.com/words';

interface IMuseResposne {
  word: string;
  score: number;
  tags: string[];
}

type MuseAnswer = IMuseResposne[];

const DEFAULT_PROMISE = axios.get(BASE_URL).then<MuseAnswer>(res => res.data);

export class Muse extends Deferred<MuseAnswer> {
  public static init() {
    return new Muse();
  }
  private query: IQuery;

  constructor(received?: Muse) {
    if (received) {
      super(received.promise);
      this.query = { ...received.query };
    } else {
      super(DEFAULT_PROMISE);
      this.query = {};
    }
  }

  public max(n: number): Muse {
    this.query.max = n;
    return this.clone();
  }

  public meansLike(word: string): Muse {
    this.query.ml = word;
    return this.clone();
  }

  private clone(): Muse {
    this.updatePromise();
    return new Muse(this);
  }

  private updatePromise() {
    this.promise = axios.get(buildURL(this.query)).then<MuseAnswer>(res => res.data);
  }
}

exports.default = Muse.init;
