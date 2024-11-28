/**
 * Add two numbers
 * @param numbers - The numbers to add
 * @returns The sum of the numbers
 */

export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }
  return parseInt(numbers, 10);
}
