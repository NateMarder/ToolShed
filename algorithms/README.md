# Algorithms

## Sorting Algorithms

## Bubble Sort

### Pseudocode

```
procedure bubbleSort(A : list of sortable items )
    n = length(A)
    repeat
        swapped = false
        for i = 1 to n-1 inclusive do
            /* if this pair is out of order */
            if A[i-1] > A[i] then
                /* swap them and remember something changed */
                swap( A[i-1], A[i] )
                swapped = true
            end if
        end for
    until not swapped
end procedure
```

### Image Representations

![bubble sort example 1](https://camo.githubusercontent.com/383b23979d4d7f279f8fb285b36bcdd357b10a35/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f632f63382f427562626c652d736f72742d6578616d706c652d33303070782e676966)

![bubble sort example 1](https://upload.wikimedia.org/wikipedia/commons/3/37/Bubble_sort_animation.gif)



## Searching Algorithms

### Binary Search Algorithm

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

### Image Representations

![binary search 1](https://camo.githubusercontent.com/b4fcd9ad8f7402d3eff24bef5d2cb8480ecbd448/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f382f38332f42696e6172795f5365617263685f446570696374696f6e2e737667)

![binary search 2](https://d18l82el6cdm1i.cloudfront.net/uploads/bePceUMnSG-binary_search_gif.gif)

![big o graphical examples](https://github.com/trekhleb/javascript-algorithms/blob/master/assets/big-o-graph.png?raw=true)


### Sources

- [Trekhleb on Github](https://github.com/trekhleb/javascript-algorithms)



&nbsp;

---

<div style="text-align:center;"> 
    <a style="color:darkgrey" href="../README.md">
        <b><i>click here to go back to project root</i></b>
    </a>
</div>