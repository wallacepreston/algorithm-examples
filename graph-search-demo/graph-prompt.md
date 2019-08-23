class: center middle
## Solving Graphs



![graph](https://i.imgur.com/uqyXmfh.png)

```javascript
const graph = {
  a: ['b'],
  b: ['c', 'd'],
  c: ['d'],
  d: []
}

doesPathExist(graph, 'a', 'b') // true
doesPathExist(graph, 'b', 'a') // false
doesPathExist(graph, 'a', 'd') // true
doesPathExist(graph, 'a', 'a') // false
```

---

## Example Output continued

![graph](https://i.imgur.com/ehvb9qx.png)

```javascript
const graph = {
  a: ['a', 'c'],
  c: ['r', 's'],
  r: ['a'],
  s: []
}

doesPathExist(graph, 'a', 'a') // true
doesPathExist(graph, 'c', 'c') // true
doesPathExist(graph, 'r', 's') // true
doesPathExist(graph, 's', 'a') // false
```
