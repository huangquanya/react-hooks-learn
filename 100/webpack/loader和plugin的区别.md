1. loader
进行内容转换，将无法识别的转换为可识别的，将需要编译的进行编译
- babel-loader
    - .js->babel-loader->js文件里面原始的内容(词法分析，语法分析)->AST树->进行操作->生成另外一份代码


2. plugin
hooks 监听webpack生命周期进行相应操作
typeable-》webpack 实现plugin的关键