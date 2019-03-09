import { spaceToPlus, toUnderscore } from './helpers/stringUtils';

export interface IQuery {
  ml?: string;
  max?: number;
  sl?: string;
  sp?: string;
  relJja?: string;
  relJjb?: string;
  relSyn?: string;
  relTrg?: string;
  relAnt?: string;
  relSpc?: string;
  relGen?: string;
  relCom?: string;
  relPar?: string;
  relBga?: string;
  relBgb?: string;
  relRhy?: string;
  relNry?: string;
  relHom?: string;
  relCns?: string;
}

export const buildURL = (q: IQuery) =>
  Object.entries(q)
    .filter(([, v]) => Boolean(v))
    .map(([k, v]) => [toUnderscore(k), spaceToPlus(`${v}`)])
    .sort(([k1], [k2]) => k1.localeCompare(k2))
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
