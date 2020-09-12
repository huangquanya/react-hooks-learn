const babel = require('@babel/core')
const t = require('babel-types')
const code = `import {zip} from 'lodash'`;
// import {zip} from 'loadash' 整句为ImportDeclaration
// import zip from 'loadash' ImportDefaultSpecifier
// import {zip} from 'loadash' ImportSpecifier
// import * as aaa from 'loadash' ImportNamespaceSpecifier



const plugin = {
    ImportDeclaration(path){
        if(!t.isImportDefaultSpecifier(path.node.specifiers[0])){
            let indentify = t.identifier('zip')
            let descs = [t.importDefaultSpecifier(indentify)];

            let str = t.stringLiteral('lodash/zip');

            let importStatement = t.ImportDeclaration(descs,str)

            path.replaceWith(importStatement)
        }
    }
}

const res = babel.transform(code,{
    plugins:[
        {
            visitor:plugin
        }
    ]
})
console.log(res);
