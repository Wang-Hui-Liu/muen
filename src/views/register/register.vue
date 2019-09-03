<template>
  <div class="register-box">
      <div class="title">
          沐恩之家欢迎你
      </div>
      <div class="inner">
          <div class="user block">
              <input type="text" placeholder="输入你的用户名" v-model="user">
          </div>
          <div class="name block">
              <input type="text" placeholder="请输入你的名字" v-model="name">
          </div>
          <div class="pwd block">
              <input type="password" placeholder="请输入密码" v-model="pwd">
          </div>
          <div class="repwd block">
              <input type="password" placeholder="请再次输入密码" v-model="repwd">
          </div>
          <div class="register block">
              <input type="button" value="注册" @click="gotoLogin">
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
   data(){
       return {
           user:'',
           name:'',
           pwd:'',
           repwd:''
       }
   },
   methods:{
       gotoLogin(){
           console.log(this.$route.query)
           axios.post("/api/register",{userName:this.user,password:this.pwd,realName:this.name}).then(res=>{
               console.log(res)

               if(res.data.code===1){
                //    明天试一下
                //    this.history.go(-1)
                   this.$router.push({path:"/login",query:{redirect:this.$route.query.redirect}})
               }
           })
       }
   }
}
</script>

<style scoped lang="scss">
.register-box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}
.title{
    height: 30px;
    line-height: 30px;
    width: 155px;
    font-size: 20px;
    color:rgba(80,80,80,1);
    margin: 108px 96px 47px 124px;
}
.inner{
    width: 245px;
    margin-left: 64px;
    margin-right: 66px;
    .block{
        width: 100%;
        height: 36px;
        line-height: 36px;
        border:1px solid rgba(42,130,228,1);
        border-radius: 2px;
        margin-bottom: 13px;
        input{
            width: 100%;
            outline: none;
            border:none;
            padding-left: 10px;
            background: none;
            ::placeholder{
               font-size: 12px;
            }
        }
    }
}
.register{
    width: 100%;
     background: rgba(255,255,255,255);
    input{
       width: 100%;

    }
}

</style>