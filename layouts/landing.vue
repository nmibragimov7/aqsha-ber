<template>
  <div class="bg-white">
    <div class='promo__wrap d-flex flex-column' :class="{'h-100':isDesktop}">
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
</style>
