class CommentClearPlugin {
    apply(compiler) {
      compiler.hooks.emit.tapPromise('CommentClearPlugin', compilation => {//compilation代表当前打包完成的结果
        // return a Promise that resolves when we are done...
        let assets = compilation.assets;
        Object.keys(assets).forEach((key)=>{
            let content = assets(key).source();
            console.log(content);
            content = content.repalce(/\/\**\//g,'')
        }) 
      });
    }
  }
  
  module.exports = CommentClearPlugin;
  