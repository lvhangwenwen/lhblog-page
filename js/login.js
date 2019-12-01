new Vue({
    el:"#loginApp",
    data: {
        form:{
            username:'',
            password:''
        },
        msg:''
    },
    methods:{
        gotoLogin() {
            window.location = "/login.html";
        },

        login(){
           axios.post("http://www.lvhangbb.cn:10010/api/auth/login",this.form)
                .then(resp => {

                        window.location ='http://www.leyou.com';

                })
                .catch(() => this.msg = '用户名或密码错误')
        }

    },
    created(){


    }

});