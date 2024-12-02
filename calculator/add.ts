/**
 * Add numbers in a string
 * @param numbers - The numbers to add
 * @returns The sum of the numbers
 */

import { delimiter } from "path";




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
       delimiters = delimiterMatches.map((d) => d.slice(1, -1));
     } else {
       delimiters = [delimiterPart];
     }
     numbers = parts[1];
   }

   const delimiterRegex = new RegExp(`[${delimiters.join("")}|\n]+`);
   const numArray = delimiterCheck(numbers, delimiterRegex);

   const negatives = findNegativeInArray(numArray)

   if (negatives.length > 0) {
     throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
   }

   let sum = 0;

   //1,2,3,4
   //0 1 2 3

   for(let i=0;i<numArray.length;i++){
      if((i+1)%2==0){
        sum+=numArray[i]
      }else{
        sum-=numArray[i]
      }
   }

   return sum;
 }


function delimiterCheck(nums: string, regex: RegExp){
  return nums
     .split(regex)
     .map((num: string ) => {
       if (num === "") {
         throw new Error("Invalid input format: missing number");
       }
       return parseInt(num, 10);
     })
     .filter((num) => num <= 1000);
 }

 function findNegativeInArray(nums: number[]){
  return nums.filter((num) => num <0)
 }

 