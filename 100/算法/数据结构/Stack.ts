// 元数据 ：items:[any]
// 方法：constructor this.items=[]
// 入栈：push
// 出栈：pop
// 获取栈顶元素：peek 
// 数量：size
// 是否为空：isEmpty
// 清空：clear
// toString输出


export default class Stack{
    public items:Array<any>
    constructor(){
        this.items = new Array()
    }
    push(item:any){
        this.items.push(item)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length-1]
    }
    isEmpty(){
        return this.items.length === 0
    }
    clear(){
        this.items = []
    }
    size():number{
        return this.items.length
    }
    toString(){
        return this.items.toString();
    }
}

