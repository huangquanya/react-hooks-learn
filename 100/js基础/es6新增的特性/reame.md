# es6新增的语法

1. let/const {}块级作用域
2. 解构语法、参数可以赋默认值、...扩展运算符
3. 箭头函数，箭头函数没有this绑定，this同定义时外部环境相同
4. 属性名和参数名相同可省参数；方法参数；在字面量中动态计算属性名['attName']

5. Object.is(),两者在类型和值都相同的情况下才会判为相等+0和-0不相同 Object.is() 的表现和 === 它们之间的区别是前者 认为 +0 和 -0 不相等而 NaN 和 NaN 则是相同的
6. Object.assign(late，pre)  对象pre浅复制到late
7. 查找字符串 includes() startsWith() endWith()第二个参数表示从哪里开始查找
8.  repeat() 方法，它接受一个数字参数作为字符串的重复次数。'a'.repeat(2) -> 'aa'