# Priority Queue

## Linked List Implementation
```javascript
class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.first = null;
  }

  insert(data, priority) {
    const newItem = new Node(data, priority);
    if(!this.first || this.first.priority < priority) {
      newItem.next = this.first;
      this.first = newItem;
    } else {
      let currentNode = this.first;
      while(currentNode.next && currentNode.next.priority >= priority) {
        currentNode = currentNode.next;
      }
      newItem.next = currentNode.next;
      currentNode.next = newItem;
    }
  }

  peek() {
    return this.first.data
  }

  popMax() {
    const maxNode = this.first;
    this.first = this.first.next;
    return maxNode.data;
  }
}

```

## Binary Heap Implementation

```javascript
class HeapPQ {
  constructor() {
    this._items = []
  }

  _swap (childIdx, parentIdx) {
    [this._items[childIdx], this._items[parentIdx]] = 
      [this._items[parentIdx], this._items[childIdx]];
  }

  _parendIdx (childIdx) {
    return Math.floor((childIdx - 1) / 2)
  }

  _childrenIndices(parentIdx) {
    return [parentIdx * 2 +1, parentIdx * 2 + 2]
  }

  _priority (i) {
    return this._items[i].priority;
  }
  
  insert(data, priority) {
    this._items.push({data, priority})
    this._heapifyUp()
  }

  _heapifyUp() {
    let currentIdx = this._items.length - 1;
    while( 
      currentIdx > 0 && 
      this._items[currentIdx].priority >
      this._items[this.parentIdx(currentIdx)].priority
    )
    this._swap(currentIdx, this._parentIdx(currentIdx));
    currentIdx = this._parentIdx(currentIdx)
  }

  peek() {
    return this._items[0].data;
  }

  popMax() {
    const max = this._items[0]

    this._items[0] = this._items.pop();

    this._heapifyDown();
    
    return max.data;
  }

  _heapifyDown () {
    let currentIdx = 0
    let [left, right] = this._childrenIndices(currentIdx);
    let idxLarger;
    const length = this._items.length;
    while(left<length) {
      if (right < length) {
        idxLarger = this._priority(left) >= this.priority(right) ? left : right;
      }
      else idxLarger = left;

      if(this._priority(currentIdx) < this._priority(idxLarger)) {
        this._swap(idxLarger, currentIdx);
        [left, right] = this._childrenIndices(currentIdx);

      }
      else return;
    }
  }
}

```