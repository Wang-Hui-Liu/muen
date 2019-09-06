import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     list:[]
  },
  mutations: {
     getList(state,payload){
      let index=state.list.findIndex(item=>item.id==payload.id)
      if(index===-1){
        state.list.push(payload);
      }else{
        state.list.filter(item=>{
          if(item.id==payload.id*1){
            item.count++
            return Object.assign({},payload,{count:item.count})
          }
        })
      }
     },
     changeCount(state,payload){
         state.list[payload.index].count=payload.count
     }
  },
  actions: {

  }
})
