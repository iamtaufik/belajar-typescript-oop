describe('Abstract Class', () => {
  abstract class Customer {
    readonly id: number;
    abstract name: string;

    constructor(id: number) {
      this.id = id;
    }

    hello() {
      console.info('Hello');
    }

    abstract sayHello(name: string): void;
  }

  class RegularCustomer extends Customer {
    name: string;

    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name ${this.name}`);
    }
  }

  it('should Support abstract class', () => {
    const customer = new RegularCustomer(1, 'Taufik');

    customer.sayHello('Budi');
  });
});
