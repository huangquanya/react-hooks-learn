class Parent{
    constructor(name){
        this.name = name
    }
    say(a){
        console.log(a)
    }
}
class Child extends Parent {
    constructor(props){
        super(props)
    }
}

let p = new Parent('p')
let son = new Child('son')
console.log(p)
console.log(son)
console.log(p.__proto__ === Parent.prototype)
console.log(Child.prototype.__proto__ === Parent.prototype)
p.say('ppp')
son.say('son')