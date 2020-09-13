//makeRequest 用来构造 request 对象
function makeRequest(request_url) {
    let request = {
    method: 'Get',
    url: request_url,
    headers: '',
    body: '',
    credentials: false,
    sync: true,
    responseType: 'text',
    referrer: ''
    }
    return request
   }

//[in] request，请求信息，请求头，延时值，返回类型等
//[out] resolve, 执行成功，回调该函数
//[out] reject 执行失败，回调该函数
function XFetch(request, resolve, reject) {
    let xhr = new XMLHttpRequest()
    xhr.ontimeout = function (e) { reject(e) }
    xhr.onerror = function (e) { reject(e) }
    xhr.onreadystatechange = function () {
    if (xhr.status = 200)
    resolve(xhr.response)
    }
    xhr.open(request.method, URL, request.sync);
    xhr.timeout = request.timeout;
    xhr.responseType = request.responseType;
    // 补充其他请求信息
    //...
    xhr.send();
}

XFetch(makeRequest('https://time.geekbang.org'),
 function resolve(data) {
 console.log(data)
 }, function reject(e) {
 console.log(e)
})
