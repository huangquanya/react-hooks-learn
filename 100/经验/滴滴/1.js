// let obj = {a:'1', b:{c: 2}, d:[1,2,3]}

// Object.defineProperty(obj, 'a', {
//     enumerable:true,
//     configurable:true,
//     get: function(){
//         console.log('get value')
//         return this.val;
//     },
//     set: function(newVal){
//         console.log('change value')
//         // 未来通知模板template 更新
//         val = newVal
//     }
// })

// obj.a = '2'
// obj.a


let obj = {
    _hello:'hello world' //表示私有变量
};
 
Object.defineProperty(obj,'hello',{
    get() {
        console.log('get');
        return this._hello;
    },
    set:function (value) {
        console.log('set');
        this._hello = value;
    }
});
console.log(obj.hello)
console.log(obj.hello = 'hello')
console.log(obj.hello)
