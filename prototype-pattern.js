class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return 'bow bow';
  }
}

const dog1 = new Dog('Pete');
console.log(dog1);
console.log(dog1.bark());
console.log(dog1.__proto__ === Dog.prototype);

class Superdog extends Dog {
  constructor(name) {
    super(name);
  }
  identify() {
    return 'I can catch thieves';
  }
}

const supDog = new Superdog('Stalin');
console.log(supDog);
console.log(supDog.bark());
console.log(supDog.identify());
console.log(supDog.__proto__ === Superdog.prototype);
