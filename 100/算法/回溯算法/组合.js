/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * @source leetcode 77
 */
var combine = function(n, k) {
    let res = []
    let nums = new Array(n).fill(null).map((_,i)=>i+1)
    function backtrack(n,path=[]){
        if(path.length === k){
            res.push([...path])
            return
        }
        for(let i = n;i < nums.length; i ++){
            path.push(nums[i])
            backtrack(i+1,path)
            path.pop()
        }
    }
    backtrack(0)
    return res
};
console.log(combine(4,2))