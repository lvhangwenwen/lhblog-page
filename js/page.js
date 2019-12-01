new Vue({
    el:"#app",
    data:{

        articleList:[],
        total: 0,
        totalPage: 0,
        page: 1


    },
    methods:{
        nextPage: function () {
            this.page++;
            var _this=this;
            axios.get('http://api.lh.cn/api/article/article/page',
                {params:{page:_this.page}})
                .then(function (response) {
                    _this.articleList.items=_this.articleList.items.concat(response.data.items)

                })
                .catch(function (error) {
                    _this.page--;
                    alert("查找失败，没有更多的文章啦宝贝！")
                })
        },

        loadDate:function () {


            var _this=this;
            axios.get('http://api.lh.cn/api/article/article/page')
                .then(function (response) {
                    _this.articleList=response.data;
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        articleDetail: function (articleId) {

            alert(articleId);

        }


    },
    created(){
        this.loadDate();

    }

});