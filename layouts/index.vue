<template>
  <div>
    <div class='promo__wrap'>
      <Header/>
      <Promo />
    </div>
    <Nuxt/>
  </div>
</template>

<script>
import Header from '../components/layout/Header/Header'
import Promo from '../components/common/Promo/Promo'

export default {
  components: {Header,Promo}
}
</script>

<style lang='scss' scoped>

</style>
