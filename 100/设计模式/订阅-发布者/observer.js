class Subject {
    constructor() {
        this.state = 0; // 会改变， 通知订阅者做相应的操作 
        this.observers = [];
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state =state;
        this.notifyAllObservers()
    }
    attach(observer) {
        this.observers.push(observer);
    }
    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update()
        })
    }
}
class Observer {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
        this.subject.attach(this);
    }
    update() {
        console.log(`${this.name} update,state: ${this.subject.getState()}`)
    }
}
// 订阅发布者模式
let s1 = new Subject();
let s2 = new Subject();
let o1 = new Observer('01s1', s1)