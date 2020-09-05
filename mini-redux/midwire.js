
const _ = require('lodash');

function fn1(str){
    return str+'def';
}

function fn2(str){
    return str.toUpperCase();
}
// 面向对象 继承
const fn = _.flow([fn1,fn2])

function myFlow(fns){

    return function(defaultValue){
        let res = defaultValue

        while(fns.length){
            let first = fns.pop()
            res = first(res)
        }
    }
}

function compose(...funcs){
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}