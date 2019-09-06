<template>
  <div class="group">
    <Header :show="true">
      <div class="ipt">
        <input type="text" placeholder="搜索小组" />
      </div>
    </Header>
    <div class="main">
      <div class="title">
        <p>所有小组</p>
        <p class="gotoAllgroup">查看全部</p>
      </div>
      <div class="inner">
        <ItemList
          :classname="'top'"
          v-for="(item,index) in list"
          :key="index"
          :img="item.groupIcon"
          :imgclass="'square'"
        >
          <template>
            <h3>{{item.groupName}}</h3>
          </template>
        </ItemList>
      </div>
    </div>
  </div>
</template>

<script>
import ItemList from "@/components/itemList.vue";
import { groupList } from "@/api/api.js";
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
    this.init();
  },
  methods: {
    async init() {
      const res = await groupList();
      console.log(res);
      this.list = res.result;
    }
  }
};
</script>

<style scoped lang="scss">
.group {
  width: 100%;
  height: 100%;
  // display: flex;
  // flex-direction: column;
}
header .ipt {
  margin-left: 36px;
  height: 35px;
  width: 270px;
  background: rgba(229, 229, 229, 1);
  border-radius: 18px;
  display: flex;
  input {
    width: 100%;
    height: 100%;
    border: none;
    padding-left: 15px;
    outline: none;
    background: none;
  }
}
.main {
  padding: 0 20px;
  background: #fff;
  width: 100%;
  .title {
    display: flex;
    justify-content: space-between;
    height: 52px;
    line-height: 52px;
    font-size: 15px;
    .gotoAllgroup {
      color: rgba(42, 130, 228, 1);
    }
  }
  .inner {
    width: 100%;
    height: 226px;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
  }
}
</style>