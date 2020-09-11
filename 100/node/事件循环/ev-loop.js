const { promises } = require("fs")

setTimeout(()=>{
    console.log(1)
    Promise.resolve(1).then(()=>{
        console.log(2)
    })
    process.nextTick(()=>{
        console.log(3)
    })
})

function foo(){
    console.log(1);
    setTimeout(()=>{
        foo();
    },2000);
}

setTimeout(() => {
   foo() 
}, 2000);