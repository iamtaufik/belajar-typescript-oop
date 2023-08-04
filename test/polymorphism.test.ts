describe('Polymorphism', () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  function sayHelloWrong(employee: Employee): void {
    if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello manager ${manager.name}`);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else {
      console.info(`Hello employee ${employee.name}`);
    }
  }

  it('should support polymorphism', () => {
    let employee: Employee = new Employee('Taufik ');
    console.info(employee);

    employee = new Manager('Taufik');
    console.info(employee);

    employee = new VicePresident('Taufik');
    console.info(employee);
  });

  it('support method parameter polymorphism', () => {
    sayHello(new Employee('Taufik'));
    sayHello(new Manager('Budi'));
    sayHello(new VicePresident('Joko'));
  });

  it('support method parameter polymorphism wrong', () => {
    sayHelloWrong(new Employee('Taufik'));
    sayHelloWrong(new Manager('Budi'));
    sayHelloWrong(new VicePresident('Joko'));
  });
});
