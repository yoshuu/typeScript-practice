interface CatInterface {
  name: string;
  breed: string;
  noise: string;

  makeNoise(): void;
  feed(something: string): void;
}

class Cat implements CatInterface {
  public name: string;
  public breed: string;
  public noise: string = "Meow meow meow ~";

  constructor(name: string, breed: string) {
    this.name = name;
    this.breed = breed;
  }

  public makeNoise() {
    console.log(this.noise);
  }
  public feed(something: string) {
    console.log(`${this.name} i s eating ${something}...`);
  }
}
