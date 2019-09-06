<template>
  <div class="main">
        <div class="tabnav">
             <ul>
                 <li
                 :class="curIndex==index?'active':''"
                 v-for="(item,index) in titleArr" :key="index"
                 @click="changeList(index)"
                 >{{item}}</li>
             </ul>
        </div>
        <div class="vote-scroll">
             <div class="inner">
                 <slot></slot>
             </div>
        </div>
  </div>
</template>

<script>
export default {
   props:{
       titleArr:{
           type:Array
       },
       curIndex:{
           type:Number
       },
       callback:{
           type:Function
       }
   },
   methods:{
       changeList(index){
           this.callback(index)
       }
   }
}
</script>

<style scoped lang="scss">
.main{
    display: flex;
    flex-direction: column;
}
.tabnav{
  display: flex;
  height: 30px;
  line-height: 30px;
  justify-content: center;
  margin: 5px 0 10px 0;
  ul{
      width: 280px;

      display: flex;
      text-align: center;
      li{
          flex:1;
          height: 100%;
          border:1px solid rgba(255, 87, 51, 1);
      }
      .active{
          background: rgba(255, 87, 51, 1);
          color:#fff;
     }
  }
}
.vote-scroll{
    flex:1;
    overflow: hidden;

}
</style>