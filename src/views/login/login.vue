<template>
  <div class='login-box'>
     <div class="title">
         欢迎来到沐恩之家
     </div>
     <div class="inner">
         <div class="user block">
             <input type="text" placeholder="请输入您的用户名" v-model="user">
         </div>
         <div class="pwd block">
             <input type="password" placeholder="请输入密码" v-model="pwd">
         </div>
         <div class="register">
             <span>立即注册</span>
             <span>忘记密码</span>
         </div>
         <div class="login block">
             <span @click="gotoHome">登录</span>
         </div>
     </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
   data(){
       return {
           user:"",
           pwd:""
       }
   },
   methods:{
       gotoHome(){
            console.log(this.$route.query)
          axios.post("/api/login",{userName:this.user,password:this.pwd}).then(res=>{

              if(res.data.code===1){
                   window.localStorage.setItem('token',res.data.token);
                   this.$router.push({path:this.$route.query.redirect})
              }else{
                  this.$router.push({path:"/register",query:{redirect:this.$route.query.redirect}})
              }
          })
       }
   }
}
</script>

<style scoped lang="scss">
.login-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}
.title{
    margin-top:124px;
    width: 100%;
    padding-left: 107px;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
}

.inner{
    margin-top: 35px;
    padding-left: 65px;
}
.inner .block{
    width: 245px;
    border:1px solid rgba(42,130,228,1);
    margin-bottom: 17px;
    height: 36px;
    line-height: 36px;
    font-size: 12px;
    border-radius: 2px;
    input{
        width: 100%;
        border:none;
        outline: none;
        padding-left: 10px;
        background: none;
        ::placeholder{
            font-size: 12px;
        }
    }
}
.inner.pwd{
    margin-bottom: 5px;
}
.register{
    width: 245px;
    margin-bottom: 17px;
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    span:last-child{
            color:gold;
    }
}
.login{
    text-align: center;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,1);
    span{
        width: 100%;
        height: 100%;
    }
}
</style>