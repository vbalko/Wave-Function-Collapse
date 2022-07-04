class Cell {
  constructor(value) {
    this.collapsed = false;
    if (value instanceof Array) {
      this.options = value;
    } else {
      // this.options = [];
      this.options = [...Array(value).keys()];
      // for (let i = 0; i < value; i++) {
      //   this.options[i] = i;
      // }
    }
  }
}
