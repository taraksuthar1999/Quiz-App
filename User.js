class User {
  #score = 0;
  #name;
  set score(score) {
    this.#score = score;
  }
  get score() {
    return this.#score;
  }
  set name(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
}
module.exports = User;
