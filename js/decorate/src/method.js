let obj = {}
Object.defineProperty(obj,'a',{
    value:1
})
//target 方法所在的类 name 观察的方法名 
function log(target,name,descriptor){
    let originAdd = descriptor.value
    descriptor.value = function(...args){
        console.log('start');
        let res = originAdd.apply(this,args);
        return res;
    }
    return descriptor
}
//无侵入的
class Math{
    @log
    add(){
        const sum = 'add'
        return sum
    }
}

let m = new Math()
m.add();
