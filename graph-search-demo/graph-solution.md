# Prompt
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



# Solution
```javascript

const breadthFirstDoesPathExist = (graph, start, target, visited = new Set()) => {
  if(!graph[start]) return false;
  const queue = [start];
  while(queue.length) {
    const vertex = queue.shift();
    if(vertex === target && vertex !== start) return true;
    if(!visited.has(vertex)) {
      queue.push(...graph[vertex]);
      visited.add(start);
    }
  }
  return false;
}

const recursiveDoesPathExist = (graph, start, target, visited = new Set()) => {
  if(!graph[start]) return false;
  visited.add(start)
  return graph[start].filter(vertex => {
    if(vertex === target) return true;
    if(visited.has(vertex)) return false;
    else return recursiveDoesPathExist(graph, vertex, target, visited)
  }).length ? true : false;
}

```








