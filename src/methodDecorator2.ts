function methodDecoratorFactory(canBeEdit: boolean = false) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = canBeEdit;
  };
}

class Test4 {
  @methodDecoratorFactory()
  first() {
    console.log('first original');
  }

  @methodDecoratorFactory(true)
  second() {
    console.log('second original');
  }

  @methodDecoratorFactory(false)
  third() {
    console.log('third original');
  }
}

const test4 = new Test4();
test4.first = function() {
  console.log('first new');
};
test4.second = function() {
  console.log('second new');
};
test4.third = function() {
  console.log('third new');
};

console.log(test4.first());
console.log(test4.second());
console.log(test4.third());
