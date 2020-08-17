['1','2','3'].map(parseInt);//1 NaN NaN
// map((i,index,arr)=>{},thisArg)
// i:当前元素 index：元素：索引 arr：原数组 thisArg：执行callback函数时用做this
// parseInt(string, radix);//转出来的值为NaN或数字（10进制）
// string:忽略空格，直到遇到的第一个字符，非字符串会使用tostring转字符串
// radix: 合法值为2-36，表示将string中提取的数字为多少进制，
        // 不填或0表示默认10进制
