
/**
 * @description This is a recursive implementation of the 
 * binary search algorithm.
 */

const binarySearch = (searchArray, searchItem, searchFrom, searchTo) => {

  // base case - everything is searched and item not found
  if (searchFrom > searchTo) return false;

  // find mid index
  const mid = Math.floor((searchFrom + searchTo) / 2);

  // let x represent the searchItem...
  const xEqualsMidValue = searchItem === searchArray[mid]; // case: 1 -> search val found, return true
  const xIsLessThanMidVal = searchItem < searchArray[mid]; // case: 2 -> drop the right half and keep going
  const xIsMoreThanMidVal = searchItem > searchArray[mid]; // case: 3 -> drop the left half and keep going

  // case: 1
  if (xEqualsMidValue) return true;

  // case: 2
  if (xIsLessThanMidVal) return binarySearch(searchArray, searchItem, searchFrom, mid - 1);

  // case: 3
  if (xIsMoreThanMidVal) return binarySearch(searchArray, searchItem, mid + 1, searchTo);
}


const input = [-8, 0, .989, 3, 9, 10, 20, 29, 59, 38, 48, 92, 894];

console.log('\nsearch array: ', input);
console.log(`\n  4 --> ${binarySearch(input, 4, 0, input.length - 1)}`);
console.log(`  5 --> ${binarySearch(input, 5, 0, input.length - 1)}`);
console.log(` 92 --> ${binarySearch(input, 92, 0, input.length - 1)}\n`);