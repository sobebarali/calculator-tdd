/**
 * Add numbers in a string
 * @param numbers - The numbers to add
 * @returns The sum of the numbers
 */

export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }
  const numArray = numbers
    .replace(/\n/g, ",")
    .split(",")
    .map((num) => parseInt(num, 10));
  return numArray.reduce((sum, num) => sum + num, 0);
}
