# Runtime Complexity

## Table Of Contents

1. [Big O Notation](#big-o-notation)
2. [Cheat Sheets](#Cheat-sheets)
    1. [Time Complexities](#Time-Complexities)
    2. [Space Complexities](#Space-Complexities)
3. [Examples](#examples)
    1. [Example 1](#example-1)
    2. [Example 2](#example-2)
    3. [Example 3](#example-3)
4. [Back To Algorithm Section Root](../README.md)

&nbsp;

## Big O Notation

What is Big O: The letter O is used because the growth rate of a function is also referred to as the order of the function. Big O notation is useful when [analyzing algorithms](https://en.wikipedia.org/wiki/Analysis_of_algorithms) for efficiency. With big O notation we express the runtime in terms of—brace yourself—how quickly it grows relative to the input, as the input gets arbitrarily large.

&nbsp;


## Cheat Sheets

### Time Complexities

| Algorithm       | Time Complexity: Best | Time Complexity: Avg  | Time Complexity: Worst   
|-----------------|-----------------------|-----------------------|-----------------------|
| Quick sort      | O(n log(n))           | O(n log(n))           | O(n2)                 |
| Merge sort      | O(n log(n))           | O(n log(n))           | O(n log(n))           |
| Heap sort       | __`*`__ O(n)            | O(n log(n))           | O(n log(n))           |
| Smooth sort     | O(n)                  | O(n log(n))           | O(n log(n))           |
| Bubble sort     | O(n)                  | O(n2)                 | O(n2)                 |
| Insertion sort  | O(n)                  | O(n2)                 | O(n2)                 |
| Selection sort  | O(n2)                 | O(n2)                 | O(n2)                 |
| Bogo sort       | O(n)                  | O(n n!)               | O(∞)                  |

__`*`__ _when all elements are the same, heap sort has a time complexity of O(n)._

### Space Complexities

| Algorithm       | Space Complexity  |
|-----------------|-------------------|
| Quick sort      | O(n)              |
| Merge sort      | O(n)              |
| Heap sort       | O(1)              |
| Smooth sort     | O(1)              |
| Bubble sort     | O(1)              |
| Insertion sort  | O(1)              |
| Selection sort  | O(1)              |
| Bogo sort       | O(1)              |

&nbsp;

## Big O Examples

### Example 1

```javascript
let a = 0;
let i = n;

while ( i > 0 ) {
    a += 1;
    i /= 2;
}
```
Time Complexity in Big-O Notation: &nbsp; `O(log n)`

Explanation: &nbsp; `We have to find the smallest x such that N / 2^x N therefore`

&nbsp;

### Example 2

```javascript
let a = 0;

for ( let i = 0; i < n; i += 1 ) {
  for ( let j = n; j > i;  j -= 1 ) {
    a = a + i + j;
  }
}
```
Time Complexity in Big-O Notation: `O(n^2)`. In quadratic time if the array has 10 items, it takes 100 steps to complete. If it has 4 items it takes 16 ’steps’ to complete. 

Explanation:
  1. &nbsp; `n + (n - 1) + (n-2) + (n-3) + . . . + 1 + 0`
  2. &nbsp; `n * (n + 1) / 2`
  3. &nbsp; `1/2 * n^2 + 1/2 * n`
  4. &nbsp; `O(n^2) times`

&nbsp;

### Example 3

```javascript
let k = 0;

for ( let i = n / 2; i <= n; i += 1 ) {
  for ( let j = 2; j <= n; j *= 2 ) { 
    k = k + n / 2;
  }
}
```

Time Complexity in Big-O Notation: &nbsp; `O(n Log n)`

Explanation: &nbsp; `first loop happens n times while the inner loop happens log(n) times because j doubles on each iteration until it is less than or equal to n.`

&nbsp;

## Sources

- [wikipedia](https://en.wikipedia.org/wiki/Analysis_of_algorithms#Evaluating_run-time_complexity)
- [geeks for geeks](https://www.geeksforgeeks.org/practice-questions-time-complexity-analysis/
)
- [19 essential algorithm interview questions](https://www.toptal.com/algorithms/interview-questions)