## Set 和 Map
1. Set是叫做集合的数据结构
    - es6新增的数据结构，类似数组，但成员是唯一的无序的没有重复的值。
    - Set本身是一种构造函数，用来生成Set数据结构{}
    - 1. 属性：size
      2. 方法：add(value)可存储任何类型的唯一值；delete(value)存在即删除集合中的值；has(value)判断集合是否存在value；clear()清空集合

2. WeakSet
    - WeakSet对象允许将弱引用对象储存在一个集合在
    - WeakSet与Set的区别：
      1. WeakSet只能储存对象引用，不能存放值，而Set对象都可以
      2. WeakSet对象中储存的对象值都是弱引用，垃圾回收机制不会考虑WeakSet对其的引用；
      3. WeakSet对象无法遍历，也拿不到其中包含的所有元素
    - 方法：add(value)可存储任何类型的唯一值；delete(value)存在即删除集合中的值；has(value)判断集合是否存在value

3. Map是一种叫做字典的数据结构
- 集合与字典的区别：
  - 共同点：集合，字典可以储存不重复的值
  - 不同点： 集合以{value,value}形式存储元素，字典以[key:value]的形式存储
- 任何具有Iterator接口、且每个成员都是一个双元素数组的结构的
- 只有同一个对象的引用Map才将其视为一个键
- 1. 属性：size
  2. 方法：
        set(key,value):添加新元素  
        get(key):通过键查找特定的值并返回
        has(key):判断字典是否存在键key
        delete(key):通过key从字典移除对应数据
        clear():将字典中所有元素删除
  3. 遍历方法：  
        keys():将字典中包含的所有键名以迭代器返回
        values():将字典中所有数值以迭代器形式返回
        entries():返回所有成员的迭代器
        forEach():遍历字典的所有成员

4. WeakMap
WeakMap对象是一组键值对的集合，其中的键是弱引用对象，而值可以是任意。（WeakMap弱引用的只是键名，而不是键值。键值依然是正常引用）
- WeakMap是key是不可枚举的。
- 方法：
    has(key):判断是否有key关联的对象
    get(key):返回key关联的对象
    set(key):设置一组key关联对象
    delete(key):移除key关联的对象


## 总结
1. Set
  - 成员唯一、无须且不重复
  - [value,value]，键值与键名是一致的（只有键值，没有键名）
  - 可以遍历，方法有add delete has
2. WeakSet
  - 成员都是对象
  - 成员都是弱引用，可以被垃圾回收机制回收，可以用来保存DOM节点，不容易造成内存泄漏
  - 不能遍历，方法有add，delete，has
3. Map
  - 本质上是键值对的集合，类似集合
  - 可以遍历，方法很多，可以和各种数据格式转换
4. WeakMap
  - 只接受对象作为键名(null除外)，不接受其他类型的值作为键名
  - 键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的
  - 不能遍历，方法有get/set/has/delete
