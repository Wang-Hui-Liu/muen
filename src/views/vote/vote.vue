<template>
  <div class="vote">
    <Header :show="true">
      <template>
        <p class="v">投票</p>
        <span @click="gotoNewvote">发起投票</span>
      </template>
    </Header>
    <TabBar :titleArr="navlist" :curIndex="curIndex" :callback="changeindex">
      <ItemList
        v-for="(item,index) in newlist"
        :key="index"
        :classname="'right'"
        :img="item.img || 'http://img3.duitang.com/uploads/item/201504/02/20150402H2753_JuTG3.thumb.700_0.jpeg'"
        :imgclass="'radius'"
      >
        <template>
          <div>
            <p>昵称</p>
            <p>{{item.endTime}}</p>
          </div>
          <div>
            <p>{{item.title}}</p>
            <p>{{item.isSingle?"多选":'单选'}}</p>
          </div>
        </template>
      </ItemList>
    </TabBar>
  </div>
</template>

<script>
import { allVote } from "@/api/api.js";
import TabBar from "@/components/tabBar.vue";
import ItemList from "@/components/itemList.vue";
import BScroll from "better-scroll";
export default {
  components: {
    TabBar,
    ItemList
  },
  data() {
    return {
      list: [],
      newlist: [],
      curIndex: 0,
      navlist: ["全部", "已结束", "正在进行"]
    };
  },
  created() {
    allVote().then(res => {
      this.list = res;
      this.newlist = res;
    });
    this.$nextTick(() => {
      new BScroll(".vote-scroll");
    });
  },
  methods: {
    gotoNewvote() {
      this.$router.push({ path: "/newvote" });
    },
    changeindex(index) {
      this.curIndex = index;
      let time = new Date();
      this.newlist =
        index === 0
          ? this.list
          : this.list.filter(item => {
              return index === 1
                ? new Date(item.endTime).getTime() < time
                : new Date(item.endTime).getTime() > time;
            });
    }
  }
};
</script>

<style scoped lang="scss">
.vote {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    overflow: hidden;
  }
}

</style>