var article = {
    // callback 是调用article.show时传入的一个函数
    // 用这个函数来做具体的处理数据的工作
    show: function ( callback ) {
        $.get(APIURLS.article_show,function(res){
            callback(res)
        } )
    }
}