// 接口的基地址
var baseUrl = 'http://localhost:8000/'

// 把所有要用到的接口地址进行集中管理
var APIURLS = {
    user_login: baseUrl + 'admin/login',
    user_logout: baseUrl + 'admin/logout',
    user_getInfo: baseUrl + 'admin/getuser',

    category_show: baseUrl + 'admin/category_search',
    category_del: baseUrl + 'admin/category_delete',
    category_add: baseUrl + 'admin/category_add',
    category_edit: baseUrl + 'admin/category_edit',

    // 文章搜索的地址
    article_show: baseUrl + 'admin/search',

    article_del: baseUrl + 'admin/article_delete',
    article_edit: baseUrl + 'admin/article_edit',

    // 月新增文章数
    month_article_count:  baseUrl + 'admin/month_article_count'
}





















