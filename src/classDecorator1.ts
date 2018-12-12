function classDecorator<T extends { new (...args: any[]): {} }>(target: T) {
  return class extends target {
    constructor(...args: any[]) {
      super(...args);
    }

    public print() {
      console.log('this is print');
    }
  };
}

@classDecorator
class Test1 {}

(new Test1() as any).print();
