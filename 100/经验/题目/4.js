// 从面向对象聊继承？
// Object.create()
const person = {
    isHuman:false,
    printIntroduction: function(){
        console.log(`My name is ${this.name},Am I human?${this.isHuman}`)
    }
}
// 最简单的继承方法
// const zhaoboy = Object.create(person);
const zhaoboy = Object.create(null);
zhaoboy.name = '酷吧你我他'
zhaoboy.isHuman = true;
// zhaoboy.printIntroduction();
console.log(zhaoboy.__proto__)
console.log(zhaoboy.__proto__===Object.prototype);
console.log(zhaoboy.__proto__===person);
