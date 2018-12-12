function propertyDecorator(target: any, propName: string): any {
  console.log(target);
  console.log(propName);
  return {
    writable: false
  };
}

class Test6 {
  @propertyDecorator
  name: string = 'Mark';
}

const test6 = new Test6();
test6.name = 'Anna';
