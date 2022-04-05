import {tokenLs} from "@/assets/js/ls";

export default {
  state: () => ({
    profile: null,
    isAuth: tokenLs.get(),
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
  actions:{

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
