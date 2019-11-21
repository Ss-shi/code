// 文章类型管理

var baseUrl = 'http://localhost:8000/'
var category = {
    // 获取文章类型数据
    show: function (callback) {
        alert('ajax拿数据')
        $.get(baseUrl + 'admin/category_search',function (res){
            callback(res);
        })
    }
}