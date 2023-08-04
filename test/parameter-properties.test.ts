describe('Parameter Properties', () => {
  class Person {
    constructor(public name: string) {}
  }
  it('Should Support', () => {
    const person = new Person('Taufik');
    console.info(person.name);

    person.name = 'Budi';
    console.info(person.name);
  });
});
