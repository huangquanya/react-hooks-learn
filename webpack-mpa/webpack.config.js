const setMPA = () => {
	const entry = {};
	const htmlWebpackPlugins = [];
	const entryFiles = glob.sync(path.join(__dirname, './src/pages/*/index.js'));
  
	Object.keys(entryFiles)
	  .map((index) => {
		const entryFile = entryFiles[index];
		// '/Users/cpselvis/my-project/src/index/index.js'
  
		const match = entryFile.match(/src\/pages\/(.*)\/index\.js/);
		const pageName = match && match[1];
  
		entry[pageName] = entryFile;
		htmlWebpackPlugins.push(
		  new HtmlWebpackPlugin({
			template: path.join(__dirname, `./src/pages/${pageName}/index.html`),
			filename: `${pageName}.html`,
			chunks: [pageName]
		  })
		);
	  });
  
	return {
	  entry,
	  htmlWebpackPlugins
	}
  }
  