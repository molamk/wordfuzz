import fuzz from '../src';

test('Means like', () => {
  const q = fuzz()
    .meansLike('hello')
    .max(1)
    .ask();
  return expect(q).resolves.toEqual([{ word: 'hi', score: 43130, tags: ['syn', 'n'] }]);
});

test('Sounds like', () =>
  expect(
    fuzz()
      .soundsLike('elefint')
      .max(1)
      .ask()
  ).resolves.toEqual([{ word: 'elefant', score: 94, numSyllables: 3 }]));

test('Spelled like', () =>
  expect(
    fuzz()
      .spelledLike('coffee')
      .max(1)
      .ask()
  ).resolves.toEqual([{ word: 'coffee', score: 67924 }]));
