<template>
   <dl  :class="classname">
       <dt :class="imgclass">
           <img :src="img" alt="" />
       </dt>
       <dd :class="ddclass">
         <slot></slot>
       </dd>
   </dl>
</template>

<script>
export default {
   props:{
       classname:{
           type:String
       },
       img:{
           type:String
       },
       imgclass:{
           type:String
       },
       ddclass:{
           type:String
       }
   }
}
</script>

<style scoped lang="scss">
.right{
    width: 100%;
    height: 100px;
    padding: 5px 10px;
    display: flex;
    background: #fff;
    border-bottom: 1px solid #ccc;
    align-items: center;
    dt.radius{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    dt.square{
         width: 80px;
         height: 80px;
         overflow: hidden;
         img{
             width: 100%;
             height: 100%;
         }
        }
    dd{
        height: 100%;
        flex:1;
        padding: 5px;
        div{
            display: flex;
            justify-content: space-between;
            height: 40px;
            line-height: 40px;
            p{
                 height: 40px;
            line-height: 40px;
            }
        }
        h3,p,span{
            height: 25px;
            line-height: 25px;
        }
        span{
            color:rgba(212, 48, 48, 1);
        }
    }
    dd.left{
        height: 100%;
        flex:1;
        display: flex;
        .text{
            height: 100%;
            flex:1;
            display: flex;
            flex-direction: column;
            .price{
                color:rgba(255, 82, 82, 1);
            }
        }
        .btns{
            height: 100%;
            display: flex;
            align-items: center;
            span{
               padding: 0 10px;
               color:rgba(71, 74, 79, 1);
            }
        }
    }
}

.top{
      margin: 0 5px;
      text-align: center;
      flex-shrink: 0;
      dt{
          width: 70px;
          height: 70px;
          margin-bottom: 7px;
          img{
              width: 100%;
              height: 100%;
          }
      }
      dd{
          h3{
              font-size: 13px;
          }
      }
}


.topdetail{
    width: 100%;
    background: #fff;
    dt{
        width: 100%;
        height: 177px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    dd{
        height: 116px;
        width: 100%;
        padding: 9px 0 0 16px;
        .title{
            font-size: 14px;
            height: 21px;
            line-height: 21px;
            margin-bottom: 13px;
        }
        .price{
            font-size: 14px;
            color:rgba(255, 87, 51, 1);
            height: 30px;
            line-height: 30px;
              span{
                font-size: 20px;
            }
        }
        .want{
            color:rgba(153, 153, 153, 1);
        }
    }
}



</style>