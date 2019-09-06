<template>
   <dl>
       <dt>
           <img src="http://img4.duitang.com/uploads/item/201409/08/20140908154922_Gw3h5.jpeg" alt="" />
       </dt>
       <dd>
           <div>
               <p>昵称</p>
               <p>{{endTime}}</p>
           </div>
           <div>
               <p>{{title}}</p>
               <p>{{isSingle?"多选":'单选'}}</p>
           </div>
       </dd>
   </dl>
</template>

<script>
export default {
   props:{
       title:{
           type:String
       },
       endTime:{
           type:String
       },
       isSingle:{
           type:Number
       }
   }
}
</script>

<style scoped lang="scss">
dl{
    width: 100%;
    height: 100px;
    padding: 5px 10px;
    display: flex;
    background: #fff;
    border-bottom: 1px solid #ccc;
    dt{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    dd{
        flex:1;
        padding: 5px;
        div{
            display: flex;
            justify-content: space-between;
            height: 40px;
            line-height: 40px;
        }
    }
}
</style>