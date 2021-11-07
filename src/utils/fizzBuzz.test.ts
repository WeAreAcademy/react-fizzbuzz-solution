import { asFizzBuzz, isDivisibleBy, nextFizzBuzzIteration } from "./fizzBuzz";

test("nextFizzBuzzIteration works for some sample values", () => {
  expect(nextFizzBuzzIteration([])).toStrictEqual(['1']);
  expect(nextFizzBuzzIteration(['1', '2'])).toStrictEqual(['1', '2', 'Fizz']);
  expect(nextFizzBuzzIteration(['1', '2', 'Fizz', '4'])).toStrictEqual(['1', '2', 'Fizz', '4', 'Buzz']);
})
test("asFizzBuzz works for numbers up to 20", () => {
  expect(asFizzBuzz(1)).toBe('1');
  expect(asFizzBuzz(2)).toBe('2');
  expect(asFizzBuzz(3)).toBe('Fizz');
  expect(asFizzBuzz(4)).toBe('4');
  expect(asFizzBuzz(5)).toBe('Buzz');
  expect(asFizzBuzz(6)).toBe('Fizz');
  expect(asFizzBuzz(7)).toBe('7');
  expect(asFizzBuzz(8)).toBe('8');
  expect(asFizzBuzz(9)).toBe('Fizz');
  expect(asFizzBuzz(10)).toBe('Buzz');
  expect(asFizzBuzz(11)).toBe('11');
  expect(asFizzBuzz(12)).toBe('Fizz');
  expect(asFizzBuzz(13)).toBe('13');
  expect(asFizzBuzz(14)).toBe('14');
  expect(asFizzBuzz(15)).toBe('FizzBuzz');
  expect(asFizzBuzz(16)).toBe('16');
  expect(asFizzBuzz(17)).toBe('17');
  expect(asFizzBuzz(18)).toBe('Fizz');
  expect(asFizzBuzz(19)).toBe('19');
  expect(asFizzBuzz(20)).toBe('Buzz');
  expect(asFizzBuzz(29)).toBe('29');
  expect(asFizzBuzz(30)).toBe('FizzBuzz');
  expect(asFizzBuzz(31)).toBe('31');
});

test("isDivisibleBy works for some important samples", () => {
  expect(isDivisibleBy(1, 2)).toBeFalsy();
  expect(isDivisibleBy(2, 2)).toBeTruthy();
  expect(isDivisibleBy(3, 3)).toBeTruthy();
  expect(isDivisibleBy(4, 3)).toBeFalsy();
  expect(isDivisibleBy(3, 5)).toBeFalsy();
  expect(isDivisibleBy(15, 5)).toBeTruthy();
  expect(isDivisibleBy(15, 3)).toBeTruthy();

});