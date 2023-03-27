class Vic {
  #book;
  constructor(book, age) {
    this.#book = book;
    this.age = age;
  }
}

const vic = new Vic(1, 2);

console.log(vic);
