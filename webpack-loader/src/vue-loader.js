const {DomHandler} = require("domhandler")
const htmlparse2 = require('htmlparser2')
const fs = require('fs');

module.exports = function (source) {
    //
    return new Promise((resolve,reject)=>{
        const handle = new DomHandler((err,dom)=>{
            if(err){
                reject(err)
            }else {
                function visit(parentNode){
                    let children = []
                    function helper(children){
                        if(!children)return;
                        return children.map((child)=>{
                            if(child.type === 'text')return `\`${child.data}\``
                            return `React.createElement("${child.name}",{},${helper(child.children).join(',')})`
                        })
                    }
                    children = helper(parentNode.children)
                    return `React.createElement("${parentNode.name}",{},${children.join(',')})`
                }
                console.log(dom)
                resolve(`
                import React from 'react';
                export default function Component(pramas){
                    return ${visit(dom[0].children.find(e=>e.type === 'tag'))}
                }
                `)
            }
        })
        const parse = new htmlparse2.Parser(handle);
        parse.write(source);
        parse.end();
    })
}