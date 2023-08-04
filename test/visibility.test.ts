describe('Visibility', () => {
  class Counter {
    protected counter: number = 0;

    public incerment(): void {
      this.counter++;
    }

    public getCounter(): number {
      return this.counter;
    }
  }

  class DoubleCounter extends Counter {
    public incerment(): void {
      this.counter += 2;
    }
  }

  it('Should support private', () => {
    const counter = new Counter();
    // counter.counter = 10;
    counter.incerment();
    counter.incerment();
    counter.incerment();
    counter.incerment();
    console.info(counter.getCounter());
  });

  it('Should support protected', () => {
    const counter = new DoubleCounter();
    // counter.counter = 10;
    counter.incerment();
    counter.incerment();
    counter.incerment();
    counter.incerment();
    console.info(counter.getCounter());
  });
});
