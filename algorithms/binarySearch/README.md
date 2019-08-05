# Binary Search

## Table Of Contents

1. [Images](#Images)
2. [Procedure](#Procedure)
3. [Javascript Implemtation](#javascript-implementation)
3. [Main Algorithm Section Directory](../README.md)
4. [Back To Main Tool Shed Directory](../../README.md)

## Images

![binary search 1](https://camo.githubusercontent.com/b4fcd9ad8f7402d3eff24bef5d2cb8480ecbd448/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f382f38332f42696e6172795f5365617263685f446570696374696f6e2e737667)

![binary search 2](https://d18l82el6cdm1i.cloudfront.net/uploads/bePceUMnSG-binary_search_gif.gif)


## Procedure

Given an array A of n elements with values or records A1, A2, A3, ... , An-1...  T = search index. n=

```
function binary_search(A, n, T):
    L := 0
    R := n − 1
    while L <= R:
        m := floor((L + R) / 2)
        if A[m] < T:
            L := m + 1
        else if A[m] > T:
            R := m - 1
        else:
            return m
    return unsuccessful
```

## Javascript Implementation

```javascript
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
```

&nbsp;

--- 
## Sources

- [Trekhleb on Github](https://github.com/trekhleb/javascript-algorithms)
- [Geeks for Geeks](https://www.geeksforgeeks.org/binary-search-in-javascript/)
