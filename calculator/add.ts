/**
 * Add numbers in a string
 * @param numbers - The numbers to add
 * @returns The sum of the numbers
 */

 export function add(numbers: string): number {
   if (numbers === "") {
     return 0;
   }

   let delimiters = [","];
   if (numbers.startsWith("//")) {
     const parts = numbers.split("\n");
     const delimiterPart = parts[0].substring(2);
     const delimiterMatches = delimiterPart.match(/\[([^\]]+)\]/g);

     if (delimiterMatches) {
       delimiters = delimiterMatches.map((d) => d.slice(1, -1)); // Extract delimiters from brackets
     } else {
       delimiters = [delimiterPart];
     }
     numbers = parts[1];
   }

   const delimiterRegex = new RegExp(`[${delimiters.join("")}|\n]+`);
   const numArray = numbers
     .split(delimiterRegex)
     .map((num) => {
       if (num === "") {
         throw new Error("Invalid input format: missing number");
       }
       return parseInt(num, 10);
     })
     .filter((num) => num <= 1000);

   const negatives = numArray.filter((num) => num < 0);

   if (negatives.length > 0) {
     throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
   }

   return numArray.reduce((sum, num) => sum + num, 0);
 }