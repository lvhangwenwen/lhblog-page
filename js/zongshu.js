new Vue({
    el:"#bokezongshu",
    data:{
       zongshu:""
    },

    methods:{

        findAll:function () {


            var _this=this;

            axios.get('http://api.lh.cn/api/article/article/count',{withCredentials:true})
                .then(function (response) {

                    _this.zongshu=response.data;

                })
                .catch(function (error) {
                    console.log(error)
                })
        }

    },
    created(){
        this.findAll();
    }

});