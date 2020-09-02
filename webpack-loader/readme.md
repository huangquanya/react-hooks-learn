## loader
loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
- 在更高层面，在 webpack 的配置中 loader 有两个目标：

1. test 属性，用于标识出应该被对应的 loader 进行转换的某个或某些文件。
2. use 属性，表示进行转换时，应该使用哪个 loader。

## 插件(plugins)
插件则可以用于执行范围更广的任务。
**插件的范围**包括，
1. 从打包优化和压缩，一直到重新定义环境中的变量。
2. 插件接口功能极其强大，可以用来处理各种各样的任务。