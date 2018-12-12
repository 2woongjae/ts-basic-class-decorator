function methodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log('target', target);
  console.log('propertyKey', propertyKey);
  console.log('descriptor', descriptor);
}

class Test3 {
  @methodDecorator
  public print() {}
}
