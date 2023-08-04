describe('Class', () => {
  class Costumer {
    constructor() {
      console.info('Create New Customer');
    }
  }

  class Order {}

  it('should can create class', () => {
    const costumer: Costumer = new Costumer();
    const order = new Order();
  });

  it('Should can create constructor', () => {
    new Costumer();
    new Costumer();
  });
});
