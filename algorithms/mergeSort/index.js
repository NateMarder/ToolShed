function merge(leftUnsorted, rightUnsorted) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // sort all the elements onto the sortedArray - keep finding next minimum
  while (leftIndex < leftUnsorted.length && rightIndex < rightUnsorted.length) {

    // Find minimum element of two arrays. and push it onto sorted Array
    if (leftUnsorted[leftIndex] < rightUnsorted[rightIndex]) {
      sortedArray.push(leftUnsorted[leftIndex]);
      leftIndex += 1;
    } else {
      sortedArray.push(rightUnsorted[rightIndex]);
      rightIndex += 1;
    }
  }

  // If one of two array still have elements we add it to the end
  return sortedArray
    .concat(leftUnsorted.slice(leftIndex))
    .concat(rightUnsorted.slice(rightIndex));;
}

function sort(unSortedArray) {
  // Base case: If array is down to one. This is how mergeSort works.
  if (unSortedArray.length <= 1) {
    return unSortedArray;
  }

  // Split array on two halves.
  const mid = Math.floor(unSortedArray.length / 2);
  const leftArray = unSortedArray.slice(0, mid);
  const rightArray = unSortedArray.slice(mid);

  return merge(
    sort(leftArray),
    sort(rightArray));
}

const unsorted = [
  0,
  .989,
  100,
  30,
  1.50005,
  1.50006,
  31,
  32,
  33,
  -197,
  -198,
  -0.989,
];

console.log('\nsorted array: ', sort(unsorted));
console.log('\n');