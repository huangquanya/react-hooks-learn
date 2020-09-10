# 数据类型的种类

1. Number
2. String
3. Boolean
4. undefine
5. null
6. object
   - Function
   - Array
   - Date
7. Symbol
8. bigInt

# 如何判断数据类型

1. typeof

   | typeof 输入 | 输出      |
   | ----------- | --------- |
   | Number      | Number    |
   | Boolean     | Boolean   |
   | Undefined   | Undefined |
   | Null        | Object    |
   | NaN         | Number    |
   | Object      | Function  |

2. toString()
   - 将其他类型转换成字符串
   - null,undefined上没有该方法
3. toLocaleString ( )
   - 把数组转成本地字符串
4. 检测数组类型的方法
   - instanceof
   - 对象的constructor
   - Array.isArray()