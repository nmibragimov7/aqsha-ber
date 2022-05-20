import {tokenRegister} from "assets/js/ls";

export default {
  state: () => ({
    profile: null,
    isAuth: null,
    loaded: false,
    userData: {}
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
      state.userData = {
        ...state.userData,
        ...payload
      }
    }
  },
  actions: {
    getClientRateAnonymous(ctx, data) {
      this.$requests.getClientRateAnonymous({
        body: {
          iin: data.iin
        },
        onSuccess(response) {
          ctx.commit("addRegistrationData", {
            iin: data.iin,
            ...response.data.Data
          })
          data.successCall()
        }
      })
    },
    async registerClient(ctx, payload) {
      await this.$requests.register({
        body: {
          iin: ctx.state.userData.iin,
          phone: payload.phone
        },
        onSuccess(response) {
          if (response.data.Message === "ok") {
            payload.successCallBack()
          }
        },
        onError() {
          alert("ошибка")
        }
      })
    },
    confirmRegistration(ctx, payload) {
      const requests = this.$requests
      const multiForm = new FormData()
      multiForm.append("file", payload.backfile)
      requests.registrationComplete({

        options: {
          headers: {
            "content-type": "multipart/form-data"
          },
          params: {
            iin: ctx.state.userData.iin
          }
        },
        body: multiForm,
        onSuccess(response) {
          if (response.data.Success) {
            tokenRegister.save(response.data.Data)
            const multiForm = new FormData()
            multiForm.append("file", payload.frontfile)
            requests.uploadFrontSide({
              options: {
                headers: {
                  "content-type": "multipart/form-data",
                  "Authorization": `Bearer ${response.data.Data}`
                },
              },
              body: multiForm,
              onSuccess(response){
                if(response.data.Success){
                  payload.successCall();
                }
              },
              onError(){
                alert("ошибка")
              }
            })
          }
        },
        onError(){
          alert("ошибка")
        }
      })
    }
  },
  getters: {
    profile: (state) => {
      return state.profile
    },
    userData(state) {
      return state.userData;
    },
    isAuth: (state) => {
      return state.isAuth
    },
    loaded: (state) => {
      return state.loaded
    },
  }
}
