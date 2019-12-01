new Vue({
    el:"#searchjs",
    data:{
        articleList:[],
        searchList:[],
        key:""

    },
    methods:{

        loadDate:function () {
            var url = location.search; //获取url中"?"符后的字串
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[decodeURIComponent(strs[i].split("=")[0])]=unescape(decodeURIComponent(strs[i].split("=")[1]));
                }
            }
            this.key = theRequest;
            var muji = new Object();
            muji=this.getQueryString();


            var _this=this;

            axios.post('http://api.lh.cn/api/search/search',theRequest)
                .then(function (response) {

                    if(response==null){
                        alert("没有找到文章哦宝贝QAQ")
                    }
                    _this.articleList=response.data;


                })
                .catch(function (error) {
                    alert("宝贝没有找到相关文章哦QAQ")
                })
        },

        getQueryString () {
            var url = window.location.href;
            console.log(url);

            var obj = {};
            var reg = /\?/;
            if(url.match(reg)) {
                //判断传入参数，以问号截取，问号后是参数
                var chars = url.split('?')[1];

                //再截&号
                var arr = chars.split('&');

                //获得截取后的数组为键值对字符串
                for (var i = 0; i < arr.length; i++) {

                    //保守一点确定看是否为 name=value形式
                    var num = arr[i].indexOf("=");

                    if (num > 0) {
                        //拼接字符串
                        var name = arr[i].substring(0, num);
                        var value = arr[i].substr(num + 1);

                        //拼接对象，并转码
                        obj[decodeURIComponent(name)] = decodeURIComponent(value);


                    }
                }
            }
        },

    },
    created(){
        this.loadDate();
    }

});