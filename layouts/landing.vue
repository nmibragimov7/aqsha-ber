<template>
  <div class="bg-white">
    <div class='promo__wrap d-flex flex-column' :class="{'h-100 promo__desktop':isDesktop}">
      <Header/>
      <Promo />
    </div>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/layout/Header/Header'
import Promo from '../components/common/Promo/Promo'
import Footer from '../components/layout/Footer/Footer'

export default {
  components: {Header,Promo, Footer},
  mixins:["token"],
  data(){
    return {
      isDesktop:false
    }
  },
  mounted() {
    this.isDesktop = this.contentDisplay === "desktop"
  }
}
</script>

<style lang='scss' scoped>
.h-100{
  height: 100vh;
}
.promo{
  &__desktop{
    background: url("@/assets/images/header-background2.png") no-repeat 85% bottom / 49%, linear-gradient(270deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  }
}
</style>
