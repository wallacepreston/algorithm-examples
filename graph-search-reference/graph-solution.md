
```javascript

// sanctioned solution - works

const doesPathExist = (graph, start, target, visited = new Set()) => {
  if(!graph[start]) return false;
  visited.add(start)
  return graph[start].some(vertex => {
    if(target === vertex) return true;
    if(!visited.has(vertex)){
      return doesPathExist(graph, vertex, target)
    } else {
      return false;
    }
  })
}

```





```javascript
const graph = {
  a: ['a', 'c'],
  c: ['r', 's'],
  r: ['a'],
  s: []
}

```




```javascript

//  breadth-first solution - works
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
```













```javascript

const recursiveDoesPathExist = (graph, start, target, visited = new Set()) => {
  // check if this is a valid start
  // check if this start's child vertices are the target
  // check if any of its children's children is the target (and etc) (recursion?)
    // base case: No children of that vertex OR the child vertices have already been visited.
    // Each time we check, return true or false from that call.  Thus, we need to return what that call returns.  
      // If it's false, don't do anything until we get to the end of the array and all are false.  then return false.  (filter, then if that resulting array has anything in it, return true inside the function)
      // If it's true, immediately return true all the way back up the stack. 

  if(!graph[start]) return false;
  visited.add(start)
  return graph[start].filter(vertex => {
    if(vertex === target) return true;
    if(visited.has(vertex)) return false;
    else return recursiveDoesPathExist(graph, vertex, target, visited)
  }).length ? true : false
}

```











































```javascript
const doesPathExist = (graph, start, target, visited = new Set()) => {
  if(!graph[start]) return false // if start doesn't exist, we can't find a path!
  visited.add(start); // keep track of each vertex we visit.

  // check if any of the vertices of this current vertex has a connection.
  return graph[start].some(vertex => {
    if(vertex === target) return true; // we've found the target!
    if(visited.has(vertex)) return false; // if we've already visited, return false so that inside some() we continue to the next one.
    return doesPathExist(graph, vertex, target, visited); // 
  })
}
```











































```javascript
const graphSearch = (graph, start, target, visited = new Set()) => {
  if(!graph[start]) return false // if start doesn't exist, we can't find a path!
  visited.add(start); // keep track of each vertex we visit.

  // check if any of the vertices of this current vertex has a connection.
  return graph[start].some(vertex => {
    if(vertex === target) return true; // we've found the target!
    if(visited.has(vertex)) return false; // if we've already visited, return false so that inside some() we continue to the next one.
    return graphSearch(graph, vertex, target, visited); // 
  })
}
```


