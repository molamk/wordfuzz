export interface IQuery {
  ml?: string;
  max?: number;
  sl?: string;
  sp?: string;
  rel_jja?: string;
  rel_jjb?: string;
  rel_syn?: string;
  trg?: string;
  ant?: string;
  spc?: string;
  gen?: string;
  com?: string;
  par?: string;
  bga?: string;
  bgb?: string;
  rhy?: string;
  nry?: string;
  hom?: string;
  cns?: string;
}

export const buildURL = (q: IQuery) =>
  Object.entries(q)
    .filter(([, v]) => Boolean(v))
    .map(([k, v]) => [k, `${v}`])
    .map(([k, v]) => [k, v.split(/\s/).join('+')])
    .sort(([k1], [k2]) => k1.localeCompare(k2))
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
