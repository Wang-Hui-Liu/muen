<template>
  <div class="vote">
      <Header :show="true">
          <template>
             <p class="v">投票</p>
             <span @click="gotoVote">发布投票</span>
          </template>
      </Header>
  </div>
</template>

<script>
import httpAxios from "@/utils/http.js";
export default {
   data(){
     return {
         list:[]
     }
   },
   created(){
       httpAxios.get("/api/vote/allVote").then(res=>{
         console.log(res)
         this.list=res;
       })
   },
   methods:{
     gotoVote(){
       this.$router.push({path:"/newvote"})
     }
   }
}
</script>

<style scoped lang="scss">
 .vote{
     width: 100%;
     height: 100%;
 }
</style>