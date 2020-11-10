export default class MinHeap {
  constructor() {
    this.heap = [null];
  }

  get getMinNode() {
    return this.heap[1];
  }

  get length() {
    return this.heap.length;
  }

  insert(node) {
    this.heap.push(node);

    let heapLen = this.heap.length;

    if (heapLen > 2) {
      let current = heapLen - 1;
      let currentParentNode = Math.floor(current / 2);

      while (current > 1 && this.heap[currentParentNode].fScore >= this.heap[current].fScore) {
        [this.heap[currentParentNode], this.heap[current]] = [
          this.heap[current],
          this.heap[currentParentNode],
        ];
        [current, currentParentNode] = [currentParentNode, Math.floor(currentParentNode / 2)];
      }
    }
  }

  removeMinNode() {
    if (this.length < 2) {
      return null;
    }

    let smallest = this.getMinNode;

    let heapLen = this.heap.length;
    if (heapLen > 2) {
      this.heap[1] = this.heap.pop();

      if (heapLen === 4) {
        if (this.heap[1].fScore > this.heap[2].fScore) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }

        return smallest;
      }

      let current = 1;
      let rightChildNode = current * 2 + 1;
      let leftChildNode = current * 2;

      while (
        this.heap[rightChildNode] &&
        this.heap[leftChildNode] &&
        (this.heap[current].fScore >= this.heap[rightChildNode].fScore ||
          this.heap[current].fScore >= this.heap[leftChildNode].fScore)
      ) {
        if (this.heap[leftChildNode].fScore < this.heap[rightChildNode].fScore) {
          [this.heap[current], this.heap[leftChildNode]] = [
            this.heap[leftChildNode],
            this.heap[current],
          ];
          current = leftChildNode;
        } else {
          [this.heap[current], this.heap[rightChildNode]] = [
            this.heap[rightChildNode],
            this.heap[current],
          ];
          current = rightChildNode;
        }

        rightChildNode = current * 2 + 1;
        leftChildNode = current * 2;
      }

      if (
        this.heap[rightChildNode] === undefined &&
        this.heap[leftChildNode] !== undefined &&
        this.heap[current].fScore > this.heap[leftChildNode].fScore
      ) {
        [this.heap[current], this.heap[leftChildNode]] = [
          this.heap[leftChildNode],
          this.heap[current],
        ];
      }
    } else if (this.heapLen === 2) {
      this.heap.pop();
    } else {
      return null;
    }

    return smallest;
  }

  search(node) {
    for (let i = 1; i < this.heap.length; i++) {
      if (node["x"] === this.heap[i]["x"] && node["y"] === this.heap[i]["y"]) {
        return true;
      }
    }

    return false;
  }
}
