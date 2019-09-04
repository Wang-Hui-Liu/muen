<template>
  <header>
      <span v-if="show" @click="goBack">&lt;</span>
      <div class="title">
          <slot></slot>
      </div>
  </header>
</template>

<script>
export default {
  props:{
      show:Boolean
  },
  methods:{
      goBack(){
          window.history.go(-1)
      }
  }
}
</script>

<style scoped lang="scss">
header{
    height: 44px;
    width: 100%;
    align-items: center;
    display: flex;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
    background: #fff;
}
.title{
    flex:1;
    text-align: center;
    display: flex;
    p{
        flex:1;
        font-size: 15px;

    }
    .v{
         padding-left: 44px;
    }
    span{
       color: rgba(42, 130, 228, 1);
  	   font-size: 14px;
    }
}
</style>