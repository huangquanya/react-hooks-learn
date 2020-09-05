let map = new Map();
function deepClone(obj) {
    let t = {}
    if(map.get(obj)) return map.get(obj);
    Object.keys(obj).forEach(k=>{
        if(typeof obj[k] === 'object'){
            // t[k]=obj[k]
            t[k]=deepClone(obj[k])
        }else{
            t[k] = obj[k]
        }
    })
    return t
}
