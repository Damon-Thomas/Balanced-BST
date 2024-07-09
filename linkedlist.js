function LinkedList() {
  this.headNode = null;

  this.append = function append(value) {
    if (this.emptyCheck(value)) return;
    let prevNode = this.tail();
    let newTail = new Node(value);
    prevNode.nextNode = newTail;
  };

  this.emptyCheck = function empty(value) {
    if (this.head() == null) {
      this.headNode = new Node(value);

      return true;
    }
    return false;
  };

  this.prepend = function prepend(value) {
    if (this.emptyCheck(value)) return;
    let nextNodeUp = this.headNode;
    let newHead = new Node(value);
    newHead.nextNode = nextNodeUp;
    this.headNode = newHead;
  };

  this.size = function size() {
    let count = 0;
    let activeNode = this.head();
    count++;
    while (activeNode.nextNode != null) {
      count++;
      activeNode = activeNode.nextNode;
    }
    return count;
  };

  this.head = function head() {
    return this.headNode;
  };

  this.tail = function tail() {
    let active = this.head();
    while (active.nextNode != null) {
      active = active.nextNode;
    }
    return active;
  };

  this.at = function at(index) {
    let activeValue = this.head();
    let curindex = 0;
    if (activeValue) {
      while (curindex <= index) {
        if (index === curindex) {
          return activeValue;
        }
        if (activeValue.nextNode == null) return null;
        activeValue = activeValue.nextNode;
        curindex++;
      }
    }
  };

  this.pop = function pop() {
    let active = this.head();
    let preActive;
    while (active.nextNode != null) {
      preActive = active;
      active = active.nextNode;
    }

    preActive.nextNode = null;
    return active;
  };

  this.contains = function contains(value) {
    let active = this.head();
    while (true) {
      if (active.value === value) return true;
      if (active.nextNode == null) return false;
      active = active.nextNode;
    }
  };

  this.find = function find(value) {
    let active = this.head();
    let index = 0;
    while (true) {
      if (active.value === value) return index;
      if (active.nextNode == null) return null;
      active = active.nextNode;
      index++;
    }
  };

  this.toString = function toString() {
    let string = "";
    let active = this.head();
    while (true) {
      if (active.nextNode == null) {
        string += `( ${active.value} ) -> null`;
        return string;
      }
      string += `( ${active.value} ) -> `;

      active = active.nextNode;
    }
  };

  this.insertAt = function insertAt(value, index) {
    let active = this.head();
    let preActive;
    let newNode = new Node(value);
    let curIndex = 0;
    while (true) {
      if (curIndex === index) {
        if (curIndex === 0) {
          this.prepend(newNode);
        }
        preActive.nextNode = newNode;
        newNode.nextNode = active;
      }
      if (active.nextNode == null) return;
      preActive = active;
      active = active.nextNode;
      curIndex++;
    }
  };

  this.removeAt = function removeAt(index) {
    let active = this.head();
    let preActive;
    let curIndex = 0;
    while (true) {
      if (curIndex === index) {
        if (curIndex === 0) {
          this.headNode = active.nextNode;
        }
        preActive.nextNode = active.nextNode;

      }
      if (active.nextNode == null) return;
      preActive = active;
      active = active.nextNode;
      curIndex++;
    }
  };
}

function Node(value = null, nextNode = null) {
  this.value = value;
  this.nextNode = nextNode;
}

//tests
// let test = new LinkedList();

// test.append(5);
// test.prepend(8);
// test.append(2);
// test.prepend(9);
// test.append(1);

// console.log("test 1 size1", test.size());
// test.pop();
// console.log("test 2 head", test.head());
// console.log("test 3 size2", test.size());
// console.log("test 4 at2in", test.at(2));
// console.log("test 5 contains1", test.contains(5));
// console.log("test 6 contains2", test.contains(25));

// console.log("test 8 tail", test.tail());
// console.log("test 9 find1", test.find(5));
// console.log("test 10 find2", test.find(25));
// console.log("test 11 tostring", test.toString());
// test.insertAt(77, 2);
// console.log("test 12 insert 77 at index 2", test.toString());
// test.removeAt(2);
// console.log("test 13 delete 77 at index 2", test.toString());

export {LinkedList, Node}
