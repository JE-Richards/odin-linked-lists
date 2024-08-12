class Node {
  constructor(data = null) {
    this.value = data;
    this.nextNode = null;
  }
}

class LinkedList {
  #head;
  constructor(head = null) {
    this.#head = head;
  }

  // Check if the list is empty
  get isEmpty() {
    return this.#head === null;
  }

  // Clears the list
  clear() {
    this.#head = null;
  }

  // Append a value to the end of the list
  append(value) {
    if (this.isEmpty) {
      this.#head = new Node(value);
    } else {
      let currentNode = this.#head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new Node(value);
    }
  }

  // Prepend a value to the start of the list
  prepend(value) {
    if (this.isEmpty) {
      this.#head = new Node(value);
    } else {
      const newHead = new Node(value);
      newHead.nextNode = this.#head;
      this.#head = newHead;
    }
  }

  // Returns the size of the list - note size is not indexed at 0
  get size() {
    if (this.isEmpty) {
      return 'List is empty';
    } else {
      let size = 1;
      let currentNode = this.#head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
        size += 1;
      }
      return size;
    }
  }

  // Returns the first node in the list
  get head() {
    if (this.isEmpty) {
      return 'List is Empty';
    } else {
      return this.#head;
    }
  }

  // Returns the last node in the list
  get tail() {
    if (this.isEmpty) {
      return 'List is Empty';
    } else {
      let currentNode = this.#head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  }

  // Returns the node at a given index - indexed at 0
  at(index) {
    if (this.isEmpty) {
      return 'List is Empty';
    }
    if (index < 0) {
      return 'index cannot be less than 0';
    } else if (index > this.size) {
      return 'index is larger than the size of the list';
    } else {
      let currentNode = this.#head;
      let i = index;
      while (i > 0) {
        currentNode = currentNode.nextNode;
        i -= 1;
      }
      return currentNode;
    }
  }

  // Removes the last node from the list
  pop() {
    if (this.isEmpty) {
      return 'List is empty, nothing to pop';
    } else {
      // last non-null element is at this.size - 1
      // so need to remove node at (this.size - 2).nextNode
      let size = this.size;
      if (size === 1) {
        this.head = null;
      } else if (size === 2) {
        this.#head.nextNode = null;
      } else {
        let secondLastNode = this.at(size - 2);
        secondLastNode.nextNode = null;
      }
    }
  }

  // Returns true if the value exists in the list
  contains(value) {
    if (this.isEmpty) {
      return 'List is empty';
    } else {
      let currentNode = this.#head;
      let size = this.size;
      let i = 0;

      if (size === 1) {
        return currentNode.value === value;
      } else {
        while (i < size) {
          if (currentNode.value === value) {
            return true;
          } else {
            currentNode = currentNode.nextNode;
            i += 1;
          }
        }
      }

      if (i === size) {
        return false;
      }
    }
  }

  // Returns the index of the value if it exists in the list - indexed at 0
  find(value) {
    if (this.isEmpty) {
      return 'List is empty';
    } else {
      let currentNode = this.#head;
      let size = this.size;
      let i = 0;

      while (i < size) {
        if (currentNode.value === value) {
          return i;
        } else {
          currentNode = currentNode.nextNode;
          i += 1;
        }
      }

      if (i === size) {
        throw new Error('Value not present in list');
      }
    }
  }

  // Converts the list node values to a string in the form ( node.value ) -> null
  get toString() {
    if (this.isEmpty) {
      return 'List is empty';
    } else {
      let string = '';
      let currentNode = this.#head;

      while (currentNode) {
        string = string.concat(`( ${currentNode.value} ) -> `);
        currentNode = currentNode.nextNode;
      }

      string = string.concat('null');
      return string;
    }
  }

  // Insert a new node with corresponding value at a given index - indexed at 0
  insertAt(value, index) {
    if (this.isEmpty) {
      return 'List is currently empty, therefore cannot insert at desired index';
    } else {
      let atTargetIndexCurrent = this.at(index);
      let atPrevIndex = this.at(index - 1);

      const newNode = new Node(value);
      newNode.nextNode = atTargetIndexCurrent;

      atPrevIndex.nextNode = newNode;
    }
  }

  // Remove a node at a given index whilst maintaining the list order
  removeAt(index) {
    if (this.isEmpty) {
      return 'List is empty, nothing to remove';
    } else {
      let atTargetIndexCurrent = this.at(index);
      let atPrevIndex = this.at(index - 1);

      atPrevIndex.nextNode = atTargetIndexCurrent.nextNode;
    }
  }
}

// For testing purposes
const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.toString);
list.insertAt('Spanish Inquisition!', 3);
console.log(list.toString);
list.removeAt(3);
console.log(list.toString);
