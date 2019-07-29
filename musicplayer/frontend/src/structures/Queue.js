export default class Queue {
    constructor() {
      this.data = [];
      this.size = 0;
    }
    isEmpty() {
      return this.size === 0;
    }
    getSize() {
      return this.size
    }
    push(item) {
      this.data.push(item);
      this.size = this.size + 1;
      return true;
    }
  
    pop() {
      if (this.isEmpty()) return undefined;
      this.size = this.size - 1;
      return this.data.pop();
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