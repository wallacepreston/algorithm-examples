## Tree Traversal

---

- `breadthFirst`
- `depthFirstPreOrder`
- `depthFirstPostOrder`

Each of these function will take a node of the tree and a callback. The function will iterate through the child nodes, calling the callback function on each of them. The difference between them is the order in which they iterate.

---

## Setup

```javascript
function node(value) {
  return {
    value,
    children: [],
  };
}
const a = node('a');
const b = node('b');
const c = node('c');
const d = node('d');
const e = node('e');
const f = node('f');
const g = node('g');
const h = node('h');
const i = node('i');
const j = node('j');
const k = node('k');
const l = node('l');
const m = node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);
```

---

## Example

![tree](https://www.cpp.edu/~ftang/courses/CS241/notes/images/trees/tree1.bmp)

| Algorithm             | Order                       | Explanation                                                |
| --------------------- | --------------------------- | ---------------------------------------------------------- |
| `breadthFirst`        | `A B C D E F G H I J K L M` | Each "level" of the tree is printed in order               |
| `depthFirstPreOrder`  | `A B E K L C F G H M D I J` | Children nodes are visited before sibling nodes            |
| `depthFirstPostOrder` | `K L E B F G M H C I J D A` | A node is not traversed until all its children are reached |

---
