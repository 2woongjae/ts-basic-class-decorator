function parameterDecorator(
  target: any,
  methodName: string,
  paramIndex: number
) {
  console.log('parameterDecorator start');
  console.log(target);
  console.log(methodName);
  console.log(paramIndex);
  console.log('parameterDecorator end');
}

class Test7 {
  private _name: string;
  private _age: number;

  constructor(name: string, @parameterDecorator age: number) {
    this._name = name;
    this._age = age;
  }

  print(@parameterDecorator message: string) {
    console.log(message);
  }
}
