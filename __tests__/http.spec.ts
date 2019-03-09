import { get } from '../src/helpers/httpGet';

test('it should send a valid http request', () => {
  const ans = [
    { word: 'flower', score: 67958 },
    { word: 'lower', score: 897 },
    { word: 'glower', score: 720 }
  ];

  const req = get('sp=flower&max=3');
  return expect(req).resolves.toEqual(ans);
});
