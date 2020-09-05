const getUserInfo = function(user) {
    return `name:${user.name},age:${user.age}`
}

getUserInfo({name:'koala',age:18})

// 队友们 用户 潜在bug
// getUserInfo()
// getUserInfo({name:'koala'})
// getUserInfo({name:'koala',height:1.66})
// 利用返回值