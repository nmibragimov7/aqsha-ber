export default {
  state: () => ({
    profile: null,
    isAuth: null,
    loaded: false,
    registrationData: {}
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
    },
    addRegistrationData(state, payload) {
      state.registrationData = {
        ...state.registrationData,
        ...payload
      }
    }
  },
  actions: {
    getClientRateAnonymous(ctx, iin) {
      this.$requests.getClientRateAnonymous({
        body: {
          iin
        },
        onSuccess(data) {
          console.log(data)
        }
      })
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
    },
  }
}
