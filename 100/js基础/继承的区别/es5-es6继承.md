# es5继承的方法
 更改原型链的指向
 1. Bar.prototype.__proto__ = Foo.prototype
 2. Object.setPrototypeOf(Bar.prototype,Foo.prototype)
 3. Bar.prototype = Object.create(Foo.prototype)==> {}.__proto__ = Foo.prototype return {}

 # es6继承
 1. super()子类构造函数必须super继承父类constructor
 2. extends 将子类原型链指向父类