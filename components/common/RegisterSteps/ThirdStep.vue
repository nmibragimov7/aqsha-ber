<template>
  <div class='page'>
    <Header logo-small />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p v-if='!isAuth' class='text-center page__step m-0 mb-2'>Шаг 3 из 6</p>
        <p class='text-center page__text m-0 mb-2'>Отсканируйте оборотную сторону удостоверения личности </p>
        <div v-if='!isAuth' class='steps d-flex align-items-center justify-content-between mb-3'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 3}]'></div>
        </div>
        <ScanDocForm v-if='!isLoadedFile'
                     icon='scan_icon.png'
                     text='Сканировать'
                     @pickFile='(file) => $emit("pickFile", "backDocFile", file)' />
        <PickDocResult v-else
                       :file='backDocFile'
                       @stepHandler='confirmRegistration'
                       @goBack='$emit("goBack", "backDocFile")' />
      </div>
    </div>
    <ProcessedModal />
  </div>
</template>

<script>

import Header from '../../layout/Header/Header'
import ScanDocForm from '../ScanDocForm/ScanDocForm'
import PickDocResult from '../PickDocResult/PickDocResult'
import ProcessedModal from '@/components/common/modal/ProcessedModal/ProcessedModal'

export default {
  components: { PickDocResult, ScanDocForm, Header, ProcessedModal },
  props: {
    isDesktop: {
      type: Boolean,
      default: false
    },
    backDocFile: {
      default: null
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
  },
  methods: {
    confirmRegistration() {
      const successCall = () => {
        this.$emit('stepHandler', 'FourthStep')
        this.$modal.hide('processed')
      }
      this.$modal.show('processed')
      if (this.frontDocFile && this.backDocFile) {
        this.$store.dispatch('auth/confirmRegistration', {
          frontfile: this.frontDocFile,
          backfile: this.backDocFile,
          successCall
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.page {
  background: linear-gradient(45deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  min-height: 40vh;
  border-radius: 0 0 20px 20px;

  @media (min-width: 900px) {
    background: url("assets/images/promo_icon.png") no-repeat 0 0/20%,
                url("assets/images/promo_icon_2.png") no-repeat 10% 100%/15%,
                url("assets/images/promo_icon_3.png") no-repeat 100% 70%/15%,
                linear-gradient(45deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
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
}
</style>
