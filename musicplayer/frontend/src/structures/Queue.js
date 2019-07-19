class Queue {
    constructor() {
      this.data = [];
      this.size = 0;
    }
    isEmpty() {
      return this.size === 0;
    }
  
    enqueue(item) {
      this.data.push(item);
      return true;
    }
  
    dequeue(item) {
      if (this.isEmpty()) return undefined;
  
      return this.data.shift();
    }
  
    front() {
      if (this.isEmpty()) return undefined;
  
      return this.data[0];
    }
  
    rear() {
      if (this.isEmpty()) return undefined;
  
      return this.data[this.size - 1];
    }
  
    clear() {
      this.data.length = 0;
      this.size = 0;
    }
  }