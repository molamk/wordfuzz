import { BASE_URL } from '../src';
import { buildURL, IQuery } from '../src/builder';

test('It should build a correct URL for a query', () => {
  const query: IQuery = {
    max: 30,
    ml: 'hello'
  };

  const expected = `${BASE_URL}?max=30&ml=hello`;

  expect(buildURL(query)).toEqual(expected);
});

test('It should encode a string from spaces to +', () => {
  const query: IQuery = {
    max: 30,
    ml: 'hello world'
  };

  const expected = `${BASE_URL}?max=30&ml=hello+world`;

  expect(buildURL(query)).toEqual(expected);
});
