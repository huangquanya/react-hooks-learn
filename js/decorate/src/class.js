// 装饰class 的时候能够拿到这个class
function observer(target){
    target.displayName = 'XXX';
    return target;
}

@observer
class Com {
    render(){
        return '123'
    }
}

console.log(Com.displayName);