import { add, logger as log } from './general';

// TODO how do you test a console.log in jest?
// /**
//  * This is a shortcut to write a console.log();
//  * @param logMsg - (string or array)
//  */
// // export const log = logMsg => console.log(logMsg);
// it('console.log the text hello', () => {
//   log = jest.fn('hello');
//   expect(log).to('hello');
// });

// it('console.log the text "hello"', () => {
//   console.log = jest.fn('hello');
//   log('hello');
//   // The first argument of the first call to the function was 'hello'
//   expect(console.log.mock.calls[0][0]).toBe('hello');
// });


// Test the add(1,2) function.
it('Adds numbers', () => {
  expect(add(1, 2)).toEqual(3);
  expect(add(2, 2)).toEqual(4);
  expect(add(2, 9)).toEqual(11);
});