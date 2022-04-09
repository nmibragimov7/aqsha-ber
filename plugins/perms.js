import Vue from "vue";

const perms = {
  install(Vue) {
    Vue.mixin({
      // async mounted() {
      //   if (!this.$store.getters["auth/isAuth"]) {
      //     await this.$router.push("/")
      //   }
      // },
    })
  }
}

Vue.use(perms);
