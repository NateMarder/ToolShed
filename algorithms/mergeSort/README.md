# Merge Sort

## Description

The merge sort algorithm is a stable, efficient, general-purpose, sorting algorithm. It is referred to as a divide and conquer algorithm because of how the input arrays are broken down into smaller and smaller arrays before actual sorting begins.

## Graphical Depiction

![merge sort gif](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Merge-sort-example-300px.gif/220px-Merge-sort-example-300px.gif)

![merge sort png](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Merge_sort_algorithm_diagram.svg/499px-Merge_sort_algorithm_diagram.svg.png)

## Big O

| Case | Time Complextiy | Space Complexity   
|------|---------|---------|
| Best |`O(n log n)`| `O(n)` |
| Avg |`O(n log n)`|    |
| Worst |`O(n log n)`|  | 

## Comparison With Other Options

- `Heap-sort` has the same time-bounds but uses `O(1)` auxilary space instead of the merge sort's `O(n)`.
- If merge sort is used with linked-lists, the use of pointers can decrease memory consumption, bringing the overall memory requirements down to `O(1)`

## Sources

- [Oleksii Trekhleb's javascript-algorithms](https://github.com/trekhleb/javascript-algorithms)