<template>
  <div class="gift">
    <Header :show="true">
      <p>沐恩礼品</p>
    </Header>
    <div class="main">
      <div class="inner">
        <ItemList
          :classname="'right'"
          v-for="(item,index) in list"
          :key="index"
          :img="item.img"
          :imgclass="'square'"
          @click.native="gotoDetail(item)"
        >
          <template>
            <h3>{{item.title}}</h3>
            <p>{{item.desc}}</p>
            <span>￥{{item.price}}</span>
          </template>
        </ItemList>
      </div>
    </div>
  </div>
</template>

<script>
import "@/mock/index.js";
import axios from "axios";
import ItemList from "@/components/itemList.vue";
import BScroll from "better-scroll";
export default {
  components: {
    ItemList
  },
  data() {
    return {
      list: []
    };
  },
  methods:{
    gotoDetail(item) {
      this.$router.push({ path: "/giftDetail",query:item});
    }
  },
  created() {
    axios.get("/giftList").then(res => {
      this.list = res.data.list;
    });
    this.$nextTick(() => {
      new BScroll(".main",{
          click: true
      });
    });
  }
};
</script>

<style scoped lang="scss">
.gift {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow: hidden;
    .inner{
        width: 100%;
    }
  }
}
</style>