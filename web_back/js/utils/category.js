// 文章类型管理

var category = {
    // 获取文章类型数据
    show: function (callback) {
        
        $.get(baseUrl + 'admin/category_search',function (res){
            callback(res);
        })
    }
}