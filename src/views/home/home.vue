<template>
  <div class="home-box">
     <Header :show="false">
       <p> 沐恩muen</p>
     </Header>
     <vswiper :imgUrl="list"></vswiper>
     <div class="list">
        <dl v-for="(item,index) in lists" :key="index" @click="goItemPath(item.path)">
          <dt>
            <span :class="`iconfont ${item.icon} `"></span>
          </dt>
          <dd>
            <span>
              {{item.name}}
            </span>
          </dd>
        </dl>
     </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import { setTimeout } from 'timers';
import "@/fonts/iconfont.css";
export default {
    data(){
      return {
        list:[
          {
            img:"http://pic16.nipic.com/20111006/6239936_092702973000_2.jpg"
          },
          {
            img:"http://pic1.win4000.com/wallpaper/c/53cdd1f7c1f21.jpg"
          },
          {
            img:"http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg"
          }
        ],
        lists:[
          {
            name:"沐恩动态",
            icon:"icon-shouye"
          },
          {
            name:"个人动态",
            icon:"icon-icon_label"
          },
          {
            name:"代祷列表",
            icon:"icon-icon_collect"
          },
          {
            name:"小礼品",
            icon:"icon-xinshuai",
            path:"/gift"
          },
          {
            name:"留言",
            icon:"icon-icon_edit"
          },
          {
            name:"奉献",
            icon:"icon-yingxiaohuodongfengxian"
          },
          {
            name:"投票",
            icon:"icon-xiaoyuantoupiao",
            path:"/vote"
          },
          {
            name:"小组",
            icon:"icon-xiaozurenwu",
            path:"/group"
          }
        ]
      }
    },
    methods:{
      goItemPath(path){
        this.$router.push({path:path})
      }
    },
    created(){
      this.$nextTick(()=>{
        // 等数据加载完并且渲染完页面再运行
         setTimeout(()=>{
             new Swiper(".swiper-container",{
                loop:true,//循环
                autoplay:{
                  delay:1000,
                  disableOnInteraction: false//设置自动播放
                }
              })
         },200)
      })
    }
}
</script>

<style scoped lang="scss">
.home-box{
  width: 100%;
  height: 100%;
  background: rgba(243, 243, 247, 1);
}
.list{
  width: 100%;
  height: 142px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  dl{
    width:25%;
    text-align: center;
    align-items: center;
    padding-top: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    dt{
      span{
        display: inline-block;
        width: 24px;
        height: 24px;
        font-size: 24px;
        color:green;
      }
    }
    dd{
      span{
         display: inline-block;
         width: 56px;
        height: 21px;
         font-size: 14px;
      }
    }
  }
}
</style>