function classDecoratorFactory(arg: string) {
  return function<T extends { new (...args: any[]): {} }>(constructorFn: T) {
    constructorFn.prototype.print2 = function() {
      console.log('this is print2', arg);
    };
    constructorFn.prototype.gender = 'male';
    return class extends constructorFn {
      public name = 'mark';
      private _age = 36;

      constructor(...args: any[]) {
        super(args);
      }

      public print() {
        console.log('this is print', arg);
      }
    };
  };
}

@classDecoratorFactory('what')
class Test2 {}

const test2 = new Test2();
(test2 as any).print();
(test2 as any).print2();
console.log(Test2.prototype);
console.log(test2);
console.log(Object.keys(test2));
console.log((test2 as any).gender);
