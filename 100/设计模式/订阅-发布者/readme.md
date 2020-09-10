# 发布订阅者
- 一个发布者类
    - 在constructor中
        1. 一个this.state保存发布者内部的状态
        2. 一个this.observer的数组保存订阅者
    - 方法
        1. getState 返回当前状态
        2. notifyAllObservers 遍历订阅者数组，调用订阅者里通知更新的方法
        3. setState 更新state的值并调用notifyAllObservers通知订阅者
        4. attach 接受订阅者，并将订阅者放到observer中

- 一个订阅者类
    - constuctor接受name，和subject两个参数
        1. this.name保存名字
        2. this.subject保存订阅的发布者
        3. this.subject.attach(this)调用订阅者上的attach将自己传递进去
    - update方法，在发布者发布更新时进行操作更新要进行的操作