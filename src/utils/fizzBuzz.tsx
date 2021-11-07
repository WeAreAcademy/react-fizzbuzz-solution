export function nextFizzBuzzIteration(utterances: string[]): string[] {
  const nextInput = utterances.length + 1;
  const nextUtterance = asFizzBuzz(nextInput);
  return [...utterances, nextUtterance];
}

export function asFizzBuzz(n: number): string {
  if (isDivisibleBy(n, 3) && isDivisibleBy(n, 5)) {
    return 'FizzBuzz';
  } else if (isDivisibleBy(n, 3)) {
    return 'Fizz';
  } else if (isDivisibleBy(n, 5)) {
    return 'Buzz';
  } else {
    return n + '';
  }
}
export function isDivisibleBy(n: number, divisor: number): boolean {
  return n % divisor === 0;
}
