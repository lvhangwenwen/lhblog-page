new Vue({
    el:"#categoryjs",
    data:{
        catrgoryList:[]

    },
    methods:{

        findAllCategorys:function () {

            var _this=this;
            axios.get('http://api.lh.cn/api/article/category/findAll')
                .then(function (response) {

                    _this.catrgoryList=response.data;



                })
                .catch(function (error) {
                    console.log(error)
                })
        }

    },
    created(){
        this.findAllCategorys();
    }

});