const func = require('./main');

describe('when search string is not provided', () => {
  test('result always -1', () => {
    expect(func('', 'ass')).toEqual(-1);
  });
});

describe('when string is provided', () => {
  const searchString = 'wassaby';

  test('if both match largest match index is returned', () => {
    expect(func(searchString, 'a', 'w')).toEqual(4);
  });

  test('if both do not match -1 is returned', () => {
    expect(func(searchString, 'z', 'x')).toEqual(-1);
  });

  test('if 1st is matched and 2nd is not provided index of 1st match is returned', () => {
    expect(func(searchString, 'b', '')).toEqual(5);
  });

  test('if 1st does not provided and 2nd is matched index of 2nd match is provided', () => {
    expect(func(searchString, '', 'b')).toEqual(5);
  });

  test('if both match charactes are not provided -1 is returned', () => {
    expect(func(searchString, '', '')).toEqual(-1);
  });

  test("and 1st doesn't match and 2nd matches index of 2nd in 'search' string is returned", () => {
    expect(func(searchString, 'z', 'a')).toEqual(4);
  });

  test('if both matches largest match index is returned', () => {
    expect(func(searchString, 'a', 'b')).toEqual(5);
  });

  test('if both matches largest match index is returned', () => {
    expect(func(searchString, 'b', 'a')).toEqual(5);
  });
});
