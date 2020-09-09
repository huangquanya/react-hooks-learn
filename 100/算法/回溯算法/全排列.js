// result = []
// function backtrack(路径, 选择列表):
//     if 满足结束条件:
//         result.add(路径)
//         return
    
//     for 选择 of 选择列表:
//         做选择
//         backtrack(路径, 选择列表)
//         撤销选择
// leetcode 46
var permute = function(nums){
    let res = []
    function backtrack(nums,path=[]){
        if(path.length===nums.length){
            console.log(path)
            res.push([...path]);//这里push进去是地址，后面有删除操作，会让这里传进去的值被删除，必须复制一下
            return
        }
        for(let n of nums){
            if(path.includes(n))continue;
            path.push(n)
            backtrack(nums,path);
            path.pop();
        }
    }
    backtrack(nums)
    return res
}
console.log(permute([1,2,3]))