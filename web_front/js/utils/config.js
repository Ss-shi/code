// 接口的基地址
var baseUrl = 'http://localhost:8000/'

// 把所有要用到的接口地址进行集中管理
var APIURLS = {
   
    category_show: baseUrl + 'admin/category_search',

    // 文章搜索的地址
    article_show: baseUrl + 'admin/search',

    // 评论
    comment_add: baseUrl + 'post_comment',
    comment_get: baseUrl + 'get_comments',

}
