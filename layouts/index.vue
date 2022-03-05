<template>
  <div>
    <div class='promo__wrap'>
      <Header/>
      <div class='container'>
        <Promo/>
      </div>
    </div>
    <div class='container'>
      <Nuxt/>
    </div>
  </div>
</template>

<script>
import Header from '../components/layout/Header/Header';
import Promo from '../components/common/Promo/Promo';
export default {
  components: { Promo, Header }
}
</script>

<style lang='scss' scoped>
.promo {
  &__wrap {
    background-image: url("assets/images/header-background2.png"), url("assets/images/header-background.png");
    background-position: 50% 31.5%, center;
    background-repeat: no-repeat, no-repeat;
    background-size: auto, 100%;
    height: 100vh;
    padding: 15px 0;
    border-radius: 0 0 33px 33px;

    @media (min-width: 900px) {
      background-repeat: no-repeat, no-repeat;
      background-position: 100% bottom, center;
      background-size: 60%, 100%;
      padding: 50px 0 0 0;
    }
  }
}
</style>
