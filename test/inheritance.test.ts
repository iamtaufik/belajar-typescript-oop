describe('Inheritance', () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it('Should support inheritance', () => {
    const employee = new Employee('Taufik');
    console.info(employee.name);

    const manager = new Manager('Budi');
    console.info(manager.name);

    const director = new Director('Jhon');
    console.info(director.name);
  });
});
