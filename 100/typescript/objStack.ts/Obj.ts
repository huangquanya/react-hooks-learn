// k:v 没有顺序的stack 入栈是有顺序的
// 进制转换

interface StackObj {
    // index 
    [propName:number]:any;
}

export default class ObjStack{
    private items: StackObj;//json 代替array 性能更好
    private count : number;
    // 手动维护指针
    // 构造器
    constructor(){
        this.items = {};
        this.count = 0;
    }
    // 入栈
    push(item:any){
        this.items[this.count] = item;
        this.count++;
    }
    pop(){
        if (this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result
    }
    isEmpty(): boolean{
        return this.count === 0
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1]
    }
    clear(){
        this.items = {}
        this.count = 0
    }
    size():number{
        return this.count
    }
    toString():string{
        if(this.isEmpty()){
            return ''
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i<this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString
    }
}