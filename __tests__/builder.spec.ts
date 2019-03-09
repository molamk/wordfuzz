import { buildURL, IQuery } from '../src/builder';

test('It should build a correct URL for a query', () => {
  const query: IQuery = {
    max: 3,
    ml: 'hello'
  };

  const expected = 'max=3&ml=hello';

  expect(buildURL(query)).toEqual(expected);
});

test('It should encode a string from spaces to +', () => {
  const query: IQuery = {
    max: 5,
    ml: 'drink coffee'
  };

  const expected = 'max=5&ml=drink+coffee';

  expect(buildURL(query)).toEqual(expected);
});
