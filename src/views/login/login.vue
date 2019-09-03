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
// import axios from "axios";
export default {
   data(){
       return {
           user:"",
           pwd:""
       }
   },
   methods:{
       gotoHome(){
          axios.post("/api/login",{username:this.user,password:this.pwd}).then(res=>{
              console.log(res)
          })
       }
   }
}
</script>

<style scoped lang="scss">
.login-box{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
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
    border-radius: 5px;
    input{
        width: 100%;
        border:none;
        outline: none;
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
}
</style>