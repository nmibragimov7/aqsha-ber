import Vue from 'vue';
import {tokenLs} from "assets/js/ls";

const token = {
  install(Vue) {
    Vue.mixin( {
      mounted() {
        const token = tokenLs.get()
        if(!this.$store.getters["auth/isAuth"] && token){
          this.$store.commit("auth/setAuth",token)
        }
      },
    })
  }
}

Vue.use(token);
