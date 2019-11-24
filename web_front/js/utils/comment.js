// 文章评论
var comment = {
    add: function(name,content,aritcle_id,callback){
        $.post(APIURLS.comment_add, 
            {
                'name': name,
                'content': content,
                'aritcle_id': aritcle_id,

            },
            function(res){
                callback(res)
            }
        )
    }
}