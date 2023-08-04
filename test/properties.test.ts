describe('Properties', () => {
  class Costumer {
    readonly id: number;
    name: string = 'Guest';
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it('should can create properties', () => {
    const costumer: Costumer = new Costumer(1, 'John');
    costumer.age = 20;

    console.info(costumer.id);
    console.info(costumer.name);
    console.info(costumer.age);
    console.info(costumer);
  });

  it('should can have methods', () => {
    const costumer = new Costumer(1, 'Eko');

    costumer.sayHello('Budi');
  });
});
