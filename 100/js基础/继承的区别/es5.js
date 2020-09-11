function Foo(){
    this.color = 'red'
}        
Foo.prototype.say() = function(){
    console.log('say')
}
let f = new Foo();
f.say()
function Bar(){
    // super()
    Foo.apply(this)
}
// es6中 super()继承属性  extends将子类原型链指向父类

// 更改原型链的指向
// 1. Bar.prototype.__proto__ = Foo.prototype
// 2. Object.setPrototypeOf(Bar.prototype,Foo.prototype)
// 3. Bar.prototype = Object.create(Foo.prototype)//==> {}.__proto__ = Foo.prototype return {}



// Bar.prototype = new Foo()
// Bar.prototype.say()
// Bar.prototype.__proto__ = Foo.prototype
let b = new Bar();
console.log(b)
// b.xxx 没有
// Bar.prototype上有color属性