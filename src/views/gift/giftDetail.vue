<template>
  <div class="detail">
    <Header :show="true"></Header>
    <div class="main">
      <ItemList :classname="'topdetail'" :img="list.img">
        <template>
          <p class="price">
            ￥
            <span>{{list.price}}</span>
          </p>
          <p class="title">{{list.title}}{{list.desc}}</p>
          <p class="want">想要 | 31</p>
        </template>
      </ItemList>
    </div>
    <div class="foot">
      <p>
        <button @click="gotoShop(list)">加入购物车</button>
      </p>
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/itemList.vue";
import {mapMutations} from "vuex"
export default {
  components: {
    ItemList
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    this.list = this.$route.query;
  },
  methods:{
      ...mapMutations(['getList']),
      gotoShop(list){
          this.getList(list)
          this.$router.push({path:"/shop"})
      }
  }
};
</script>

<style scoped lang="scss">
.detail {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  overflow: hidden;
  .img {
    width: 100%;
    height: 177px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.foot {
  width: 100%;
  height: 48px;
  line-height: 48px;
  border-top: 1px solid #ccc;
  background: #fff;
  align-items: center;
  display: flex;
  justify-content: right;
  p {
    width: 100%;
    text-align: right;

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
}
</style>