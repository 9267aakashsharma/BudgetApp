class budgetController {
  #x;
  constructor(val) {
    this.#x = val;
  }
  add(a) {
    this.#x += a;
    return this.#x;
  }
  sub(a) {
    this.#x -= a;
    return this.#x;
  }
}
var obj = new budgetController(23);
