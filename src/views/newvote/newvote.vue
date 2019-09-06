<template>
  <div class="newvote">
    <Header :show="true">
      <p>发起投票</p>
    </Header>
    <div class="main">
      <div class="title">
        <label for class="lable">标题</label>
        <input type="text" placeholder="输入标题" v-model="title" />
        <br />
      </div>
      <div class="describe">
        <span class="lable">描述</span>
        <textarea name id cols="30" rows="5" placeholder="输入内容(选填)"></textarea>
      </div>
      <div class="inner">
        <div class="auto">
          <ul>
            <li v-for="(item,index) in addlist" :key="index">
              选项{{index+1}}:
              <p>{{item}}</p>
              <span>-</span>
            </li>
          </ul>
        </div>
        <div class="add">
          <input type="text" placeholder="请输入选项内容最长输入20个字" v-model="addtext" />
          <span @click="add">+</span>
        </div>
      </div>
      <div class="select" >
        <span>请选择单选多选</span>
        <select ref="select1">
          <option value="0">单选</option>
          <option value="1">多选</option>
        </select>
      </div>
      <div class="select">
        <span>是否匿名</span>
        <select ref="select2">
          <option value="0" >匿名</option>
          <option value="1" >不匿名</option>
        </select>
      </div>
      <div class="time">
        <div class="left">截止日期</div>
        <div class="right">
          <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间" value-format="yyyy-MM-dd HH:mm:ss"  ></el-date-picker>
        </div>
      </div>
    </div>
    <div class="button">
      <p @click="announce">发布</p>
    </div>
  </div>
</template>

<script>
import {newvote} from "@/api/api.js";
export default {
  data() {
    return {
      value1: "",//结束时间
      title: "", //标题
      describe: "",//描述
      addlist: ["‘走’，‘跑’，斑马线","‘走’，‘跑’，斑马线"],//选项列表
      addtext: "",//添加的选项内容
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    },
    add() {
      this.addlist.push(this.addtext);
    },
    async announce(){
      let userId=window.localStorage.userId;
      const res=await newvote({
           title:this.title,
           userId:parseInt(userId),
           chooseList:this.addlist,
           isSingle:parseInt(this.$refs.select1.value),
           anonymity:parseInt(this.$refs.select2.value),
           endTime:this.value1,
           startTime:new Date().toLocaleDateString()
          })
          this.$router.push({path:"/vote"})
    }
  }
};
</script>

<style scoped lang="scss">
.newvote {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
  padding-left: 10px;
  color: rgba(80, 80, 80, 1);
  background: #fff;
  .lable {
    line-height: 30px;
    margin-right: 10px;
  }
  .title {
    width: 100%;
    height: 30px;
    margin: 8px 0;
    line-height: 30px;
    input {
      height: 30px;
      padding-left: 10px;
      border: 1px solid #666;
      outline: none;
    }
  }
  .describe {
    display: flex;
    margin-bottom: 8px;
    textarea {
      border: 1px solid #666;
      outline: none;
      padding: 5px 0 0 5px;
    }
  }
  .inner {
    width: 100%;
    overflow: hidden;
    // height: 150px;
    .auto {
      overflow: hidden;

      ul {
        width: 100%;
        height: 100px;
        margin-bottom: 10px;
        padding-right: 20px;
        overflow-y: auto;
        li {
          display: flex;
          height: 40px;
          justify-content: space-around;
          p {
            flex: 1;
            padding-left: 10px;
          }
          span {
            width: 28px;
            height: 28px;
            display: inline-block;
            background: red;
            color: #fff;
            border-radius: 50%;
            text-align: center;
            line-height: 28px;
            font-size: 28px;
          }
        }
      }
    }
    .add {
      display: flex;
      justify-content: space-around;
      input {
        width: 270px;
        height: 35px;
        border: 1px solid #999;
        padding-left: 10px;
      }
      span {
        width: 28px;
        height: 28px;
        display: inline-block;
        background: green;
        color: #fff;
        border-radius: 50%;
        text-align: center;
        line-height: 28px;
        font-size: 28px;
      }
    }
  }
  .select {
    height: 40px;
    line-height: 40px;
    span {
      margin-right: 10px;
    }
  }
  .time {
    display: flex;
    .left {
      margin-right: 10px;
    }
  }
}

.button {
  display: flex;
  width: 100%;
  justify-content: center;
  color: #fff;
  display: flex;
  padding-bottom: 20px;
  background: #fff;
  p {
    background: rgba(42, 130, 228, 1);
    height: 35px;
    width: 281px;
    border-radius: 10px;
    text-align: center;
    line-height: 35px;
  }
}

.el-dropdown-link {
  cursor: pointer;
  color: rgba(80, 80, 80, 1);
  font-size: 14px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>