
import {LinkedList
} from "./linkedlist.js";

function HashMap() {
  let size = 16;

  const loadFactor = 0.75;
  this.buckets = new Array(size);

  this.hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  };

  this.get = (key) => {
    const index = this.hash(key) % size;
    const bucket = this.buckets[index];
    if (bucket == undefined) return null;
    let active = bucket.head();
    let listIndex = 0;

    while (true) {
      if (active.value[0] === key) return active.value[1];
      if (active.nextNode == null) return null;
      active = active.nextNode;
      listIndex++;
    }
  };

  this.set = (key, value) => {
    const index = this.hash(key) % size;
    if (this.buckets[index] === undefined) {
      this.buckets[index] = new LinkedList();

      this.buckets[index].prepend([key, value]);
      this.resize();
      return;
    } else {
      let active = this.buckets[index].head();
      while (true) {
        if (active.value[0] === key) {
          active.value[1] = value;
          return;
        } else {
          if (active.nextNode === null) {
            this.buckets[index].prepend([key, value]);

            this.resize();
          }
          if (active.nextNode === null) return;
          active = active.nextNode;
        }
      }
    }
  };

  this.resize = function resize() {
    if (this.keys().length > size * loadFactor) {
      let entries = this.entries();
      size *= 2;

      this.buckets = new Array(size);
      entries.forEach((entry) => {
        this.set(entry[0], entry[1]);
      });
    }
  };

  this.has = function has(key) {
    if (this.get(key) == null) return false;
    return true;
  };

  this.remove = function remove(key) {
    const index = this.hash(key) % size;
    let bucket = this.buckets[index];
    if (bucket === undefined) return false;
    let active = bucket.head();
    let preActive;
    let curIndex = 0;
    while (true) {
      if (active.value[0] === key) {
        if (curIndex === 0) {
          if (active.nextNode == null) {
            this.buckets[index] = undefined;
            return true;
          }
          bucket.headNode = active.nextNode;

          return true;
        }
        preActive.nextNode = active.nextNode;

        return true;
      }
      if (active.nextNode == null) return false;
      preActive = active;
      active = active.nextNode;
      curIndex++;
    }
  };

  this.length = function length() {
    return this.keys().length;
  };

  this.clear = function clear() {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = undefined;
    }
  };

  this.keys = function keys() {
    let keys = [];
    this.buckets.forEach((bucket) => {
      if (bucket == undefined) return;
      let active = bucket.head();
      while (true) {
        keys.push(active.value[0]);
        if (active.nextNode == null) return;
        active = active.nextNode;
      }
    });
    return keys;
  };

  this.values = function values() {
    let values = [];
    this.buckets.forEach((bucket) => {
      if (bucket == undefined) return;
      let active = bucket.head();
      while (true) {
        values.push(active.value[1]);
        if (active.nextNode == null) return;
        active = active.nextNode;
      }
    });
    return values;
  };

  this.entries = function entries() {
    let entries = [];
    this.buckets.forEach((bucket) => {
      if (bucket == undefined) return;
      let active = bucket.head();
      while (true) {
        entries.push(active.value);
        if (active.nextNode == null) return;
        active = active.nextNode;
      }
    });
    return entries;
  };
}

export {HashMap}


