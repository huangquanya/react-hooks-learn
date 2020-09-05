const PENDING = Symbol('PENDING')
const FULLFILLED = Symbol('FUFILLED')
const REJECTED = Symbol('REJECTED')

function MyPromise(fn) {
    let self = this;
    this.status = PENDING
    this.value = undefined;
    this.reason = undefined
    this.onFulfilledCallback = () => { }
    this.onRejectedCallback = () => { }
    function resolve(value) {
        console.log(value)
        self.value = value
        self.status = FULLFILLED
        self.onFulfilledCallback(value)
    }
    function reject(reason) {
        console.log(reason)
        self.reason = reason
        self.status = REJECTED
        self.onRejectedCallback(reason)
    }
    fn(resolve, reject)
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    if (this.status === FULLFILLED) {
        onFulfilled(this.value)//传进resolve的结果
    } else if (this.status === REJECTED) {
        onRejected(this.reason)
    } else {
        this.onFulfilledCallback = onFulfilled;
        this.onRejectedCallback = onRejected;
    }
}

new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000);
})
    .then(res => {
        console.log(res, 'res')
    }, err => {
        console.log(err, 'err')
    })