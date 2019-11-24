var article = {
    // callback 是调用article.show时传入的一个函数
    // 用这个函数来做具体的处理数据的工作
    getFocusFive: function (callback) {
        $.get(APIURLS.article_show,
            {
                perpage: 5,
                state: '已发布'
            },
            function (res) {
                callback(res)
            }
        )
    },
    getDetail: function (id, callback) {
        // console.log("getDetail的参数", id)
        $.get(APIURLS.article_show,
            {
                id: id
            },
            function (res) {
                callback(res)
            }
        )
    }
}