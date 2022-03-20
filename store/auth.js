export default {
  state: () => ({
    profile: null,
    isAuth: false,
    loaded: false
  }),
  mutations: {
    setAuth(state, payload) {
      state.isAuth = payload
    },
    start(state) {
      state.loaded = true
    },
    end(state) {
      state.loaded = false
    }
  },
  getters: {
    profile: (state) => {
      return state.profile
    },
    isAuth: (state) => {
      return state.isAuth
    },
    loaded: (state) => {
      return state.loaded
    }
  }
}
