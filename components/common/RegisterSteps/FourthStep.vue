<template>
  <div class='page'>
    <Header logo-small />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p v-if='!isAuth' class='text-center page__step m-0 mb-3'>Шаг 4 из 6</p>
        <p class='text-center page__text m-0 mb-3'>Сделайте селфи</p>
        <div v-if='!isAuth' class='steps d-flex align-items-center justify-content-between'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 4}]'></div>
        </div>
        <ScanDocForm v-if='!isLoadedFile'
                     classes='mb-2'
                     :blocks='blocks'
                     icon='self-icon'
                     text='Открыть камеру'
                     is-fourth-step
                     @pickFile='(file) => $emit("pickFile", "avatarFile", file)' />
        <PickDocResult v-else
                       :file='avatarFile'
                       @stepHandler='$emit("stepHandler", "FifthStep")'
                       @goBack='$emit("goBack", "avatarFile")' />
      </div>
    </div>
  </div>
</template>

<script>

import Header from '../../layout/Header/Header'
import ScanDocForm from '../ScanDocForm/ScanDocForm'
import PickDocResult from '../PickDocResult/PickDocResult'

export default {
  components: { PickDocResult, ScanDocForm, Header },
  props: {
    isDesktop: {
      type: Boolean,
      default: false
    },
    avatarFile: {
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
  },
  data() {
    return {
      blocks: [
        {
          img: 'selfi_get',
          text: ['Сделайте селфи. Снимите головной убор и очки, убедитесь, что лицо хорошо освещено и попадает в рамку.']
        }
      ]
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
  }

  &__text,
  &__step {
    color: #FFF;
  }

  &__step {
    font-size: 24px;
    font-weight: 700;
  }

  &__form {
    padding: 50px 40px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  &__avatar {
    width: 100%;
    height: 100%;
    background: url("assets/images/circle.svg") no-repeat 50% 32px, url("assets/images/avatar-icon.png") no-repeat center;
  }
}
</style>
