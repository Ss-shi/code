// 用户模块
// 把所有的与用户相关的操作全放在这个对象中
var user = {
    // 接收三个参数
    // 去发请求，请求回来做什么？ 执行你传入回调函数
    login: function (userName, userPassword, callback) {
        // 发 ajax请求去检查正确与否
        console.log('发ajax请求去检查正确与否', userName, userPassword)
        // $.post(baseUrl+'admin/login', 
        $.post(APIURLS.user_login,
            {
                user_name: userName,
                password: userPassword
            },
            // callback(res)
            function (res) {
                callback(res)
            }
        )
    },
    // 参数：当请求成功之后要调用的函数
    logout: function (callback) {
        // 调用接口
        $.post(APIURLS.user_logout, function (res) {
            callback(res)
        })
    },

    getInfo: function (callback) {
        $.get(APIURLS.user_getInfo, function (res) {
            callback(res)
        })
    }
}

