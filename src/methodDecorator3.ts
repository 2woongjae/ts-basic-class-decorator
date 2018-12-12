function log(show: boolean = true) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function(...args: any[]) {
      show && console.log('start');
      original(...args);
      show && console.log('end');
    };
  };
}

class Test5 {
  @log()
  print1(first: string, second: number) {
    console.log('print1', first, second);
  }

  @log(false)
  print2(first: string, second: number) {
    console.log('print2', first, second);
  }
}

const test5 = new Test5();
test5.print1('mark', 36);
test5.print2('mark', 36);
