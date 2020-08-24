- 面试题想要考察什么？
1) 属性名
- css标签名大小写不敏感
- css选择器(id,class,querySelector)大小写敏感
- css属性名和属性值不敏感
2) 盒子模型
行内元素
- 与其他元素在同一行
- 宽度(width)、高度(height)、内边距的top/bottom(padding-top/padding-bottom)和外边距的top/bottom(margin-top/margin-bottom)不可设置
- 当我们使用内外边距， 只有左右方向有效，设置四个方向的内边距时，对于行内元素，确实显示效果，但是对其他元素不会产生影响。


3) 怎么回答才完美
    设备屏幕自适应  手机多变
    flexible.js 阿里方案
    rem/em
    rem 一切可依赖 等比例关系 px2rem 
    蓝湖 用法 750px 设计稿
    media query
    vw/vh：一切都是100vw/vh
    百分比
    calc
    vm 方案如何做适配？
    postcss
    适配用过vue/react+vw实现
    js babel
    工作流 webpack
    webpack css .styl .scss->css-loader stylus-loader stylus css 编译
    postcss 全新的css库 平台 插件系统
    babel-core autoprefixer 完成
    box-shadow: 
    -webkit-box-shadow;
    cssnext css variable
    三明治 什么东西，写在哪里 都规定好了
    1. 移动适配
        vw现在兼容性问题不大，2%>的适配率
    2. postcss太强大
        vue项目中内置了postcss
        .postcssrc.js添加配置
        px 2 vw
        "postcss-px-to-viewport":{}
        安装
