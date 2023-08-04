describe('Interface', () => {
  interface HashName {
    name: string;
  }

  interface CanSayHello {
    sayHello(name: string): void;
  }

  class Person implements HashName, CanSayHello {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it('should support interface', () => {
    const person = new Person('Taufik');

    person.sayHello('Budi');
  });
});
