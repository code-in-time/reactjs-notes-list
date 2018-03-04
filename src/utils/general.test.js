import { add, logger } from './general';

it('console.log the text "hello"', () => {
  console.log = jest.fn();
  logger('hello');
  // The first argument of the first call to the function was 'hello'
  expect(console.log.mock.calls[0][0]).toBe('hello');
});

// TODO how do I test for the object as the second parameter?
// it('console.log the text "my", {}', () => {
//   console.log = jest.fn();
//   logger('my', 1);
//   // The first argument of the first call to the function was 'hello'
//   expect(console.log.mock.calls[0][0]).toBe('my');
//   expect(console.log.mock.calls[0][1]).toBe(1);
// });


// Test the add(1,2) function.
it('Adds numbers', () => {
  expect(add(1, 2)).toEqual(3);
  expect(add(2, 2)).toEqual(4);
  expect(add(2, 9)).toEqual(11);
});
