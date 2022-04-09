<template>
  <div class='page'>
    <Header logo-small />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p v-if='!isAuth' class='text-center page__step m-0 mb-4'>Шаг 2 из 6</p>
        <p v-if='!isLoadedFile && isDesktop' class='text-center page__text m-0 mb-2'>Сделайте фото лицевой стороны
          удостоверения личности или загрузите готовое фото</p>
        <p v-else-if='!isLoadedFile && !isDesktop' class='text-center page__text m-0 mb-2'>Сделайте фото лицевой стороны
          вашего удостоверения личности</p>
        <p v-else class='text-center page__text m-0 mb-2'>Сделайте фото обратной стороны удостоверения личности</p>
        <div v-if='!isAuth' class='steps d-flex align-items-center justify-content-between mb-4'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 2}]'></div>
        </div>
        <ScanDocForm v-if='!isLoadedFile'
                     icon='scan_icon.png'
                     text='Сканировать'
                     @pickFile='(file) => $emit("pickFile", "frontDocFile", file)' />
        <PickDocResult v-else
                       :file='frontDocFile'
                       @stepHandler='$emit("stepHandler", "ThirdStep")'
                       @goBack='$emit("goBack", "frontDocFile")' />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../layout/Header/Header'
import ScanDocForm from '../ScanDocForm/ScanDocForm'
import PickDocResult from '../PickDocResult/PickDocResult'

export default {
  name: 'SecondStep',
  components: { PickDocResult, ScanDocForm, Header },
  props: {
    isDesktop: {
      type: Boolean,
      default: false
    },
    frontDocFile: {
      default: null
    },
    isLoadedFile: {
      type: Boolean,
      default: false
    },
    isAuth: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang='scss' scoped>
.page {
  background: linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
  min-height: 40vh;
  border-radius: 0 0 20px 20px;

  @media (min-width: 900px) {
    background: url("assets/images/promo_icon.png") no-repeat 0 0/20%,
    url("assets/images/promo_icon_2.png") no-repeat 10% 100%/15%,
    url("assets/images/promo_icon_3.png") no-repeat 100% 70%/15%,
    linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
    min-height: 50vh;
  }

  &__wrap {
    position: relative;

    @media (min-width: 900px) {
      max-width: 800px;
    }
  }

  &__body {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    line-height: 150%;
  }

  &__text,
  &__step {
    color: #FFF;
  }

  &__step {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
