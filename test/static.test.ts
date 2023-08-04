describe('Static', () => {
  class Configuration {
    static NAME: string = 'Belajar Typescript OOP';
    static VERSION: number = 1.0;
    static AUTHOR: string = 'Eko Kurniawan';
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }

      return total;
    }
  }

  it('support static', () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });

  it('support static method', () => {
    console.info(MathUtil.sum(1, 2, 3, 4, 5));
  });
});
