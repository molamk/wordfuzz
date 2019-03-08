import { fuzz } from '../src';

const expected = [
  { word: 'hi', score: 43130, tags: ['syn', 'n'] },
  { word: 'howdy', score: 42247, tags: ['syn', 'n'] },
  { word: 'hullo', score: 39883, tags: ['syn', 'n'] }
];

test('Means like', () => {
  const query = fuzz()
    .meansLike('hello')
    .max(3);
  expect(query).resolves.toEqual(expected);
});
