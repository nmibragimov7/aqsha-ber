<template>
  <div class="bg-white">
    <div class='promo__wrap d-flex flex-column'>
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
  components: {Header,Promo, Footer}
}
</script>

<style lang='scss' scoped>

</style>
