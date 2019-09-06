<template>
  <div class="shop">
      <Header :show="true">
          <p>购物车</p>
      </Header>
      <div class="main">
          <div class="inner">
             <ItemList
              :classname="'right'"
              v-for="(item,index) in list"
              :key="index"
              :img="item.img"
              :imgclass="'square'"
              :ddclass="'left'"
             >
               <template>
                   <div class="text">
                       <p>{{item.title}}</p>
                       <p class="price">${{item.price}}</p>
                   </div>
                   <div class="btns">
                       <span @click="item.count>1?changeCount({index,count:item.count-1}):''">-</span>
                       <span>{{item.count}}</span>
                       <span @click="changeCount({index,count:item.count+1})">+</span>
                   </div>

               </template>
             </ItemList>
          </div>
      </div>
      <div class="foot">
          <div></div>
              <p>已选 <span>{{Allcount}}</span> 件</p>
          <p>合计: <span class="allprive">{{Allprice}}</span> </p>
          <button>告诉管理员</button>
      </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
import ItemList from "@/components/itemList.vue"
export default {
    components:{
        ItemList
    },
    methods:{
        ...mapMutations(['changeCount'])
    },
    computed:{
        ...mapState(['list']),
        Allprice(){
           return this.list.reduce((prev,next)=>{
                return prev+next.count*next.price
            },0)
        },
        Allcount(){
            return this.list.reduce((prev,next)=>{
                return prev+next.count
            },0)
        }
    }
}
</script>

<style scoped lang="scss">
 .shop{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
 }
 .main{
     margin: 10px 0;
     flex:1;
     background: #fff;
     overflow: hidden;
     .inner{
         width: 100%;
         height: 100%;
         overflow-y:auto;
     }
 }
.foot{
    height: 59px;
    line-height: 59px;
    width: 100%;
    display: flex;
    background: #fff;
    align-items: center;
    padding-right: 9px;
    div{
        flex:1;
    }
    p{
        margin: 0 5px;
        .allprive{
            color:rgba(255, 87, 51, 1);
        }
    }
     button {
            width: 79px;
            height: 37px;
            background: rgba(255, 87, 51, 1);
            color: #fff;
            font-size: 14px;
            border-radius: 16px;
            outline: none;
            border: none;
        }
}
</style>