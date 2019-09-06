import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     list:[]
  },
  mutations: {
    //给购物车里的list赋值
     getList(state,payload){
       //找要添加到购物车里的数据的索引
      let index=state.list.findIndex(item=>item.id==payload.id)
      if(index===-1){
        state.list.push(payload);
      }else{
        //如果index！=-1，找到对应的数据改变它的count值
        state.list.filter(item=>{
          if(item.id==payload.id*1){
            item.count++
            return Object.assign({},payload,{count:item.count})
          }
        })
      }
     },
    //改变count
     changeCount(state,payload){  
         //直接返回值        
         state.list[payload.index].count=payload.count
     }
  },
  actions: {

  }
})
