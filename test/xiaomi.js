// 处理输入
// const input = readInt()
// 处理输出
// const result = Solution(+input)
// print(result)


// 算法部分
function Solution(num) {
    if(!(Object.prototype.toString.call(num) === '[object Number]')){
        return false
    }else if(num === 0 ){
        return num
    }else if(num%7===0&&num%9===0){
        return 'fizzbuzz'
    }else if(num%7===0){
        return 'fizz'
    }else if(num%9===0){
        return 'buzz'
    }else {
        return num
    }
}
console.log(Solution('00'))
console.log(Object.prototype.toString.call('000'))