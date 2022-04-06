export default {
  state: () => ({
    loaded: false,
    clientRate:{}
  }),
  mutations: {
    setClientRate(state, payload) {
      state.clientRate = payload
    },
    start(state) {
      state.loaded = true
    },
    end(state) {
      state.loaded = false
    }
  },
  actions:{
    async getClientRate(){
      await this.$requests.getClientRate({
        onError(e){
          console.log(e)
        },
        onSuccess(data){
          console.log(data)
        }
      })
    }
  },
  getters: {
    loaded: (state) => {
      return state.loaded
    }
  }
}
