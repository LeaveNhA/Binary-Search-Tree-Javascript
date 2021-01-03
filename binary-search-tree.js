export class BinarySearchTree {
  constructor(value) {
    this.value = value;
  }

  get data() {
    return this.value;
  }

  get right() {
   return this.rightTree;
  }

  get left() {
    return this.leftTree;
  }

  insert(value) {
    const direction = value > this.data ? 'rightTree' : 'leftTree';
    if (this[direction]) {
      this[direction].insert(value);
    } else {
      this[direction] = new BinarySearchTree(value);
    }
  }

  each(fn) {
    if (this.leftTree) this.leftTree.each(fn);
    fn(this.data);
    if (this.rightTree) this.rightTree.each(fn);
  }
}
