<template>
  <div class='page'>
    <Header logoSmall />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p v-if='!isAuth' class='text-center page__step m-0 mb-2'>Шаг 3 из 6</p>
        <p class='text-center page__text m-0 mb-2'>Сделайте фото оборотной стороны удостоверения личности</p>
        <div v-if='!isAuth' class='steps d-flex align-items-center justify-content-between mb-3'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 3}]'></div>
        </div>
        <ScanDocForm v-if='!isLoadedFile'
                     icon="scan_icon.png"
                     text='Сканировать'
                     @pickFile='pickFile'/>
        <PickDocResult v-else
                       :file='file'
                       path='/register/fourth-step'
                       @goBack='goBack'/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/layout/Header/Header'
import ScanDocForm from '../../components/common/ScanDocForm/ScanDocForm'
import PickDocResult from '../../components/common/PickDocResult/PickDocResult'

export default {
  components: { PickDocResult, ScanDocForm, Header },
  data() {
    return {
      isLoadedFile: false,
      file: null
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters['auth/isAuth']
    }
  },
  methods: {
    pickFile(file) {
      this.file = file
      this.isLoadedFile = !!file
    },
    goBack() {
      this.file = null
      this.isLoadedFile = false
    }
  }
}
</script>

<style lang='scss' scoped>
.page {
  background: linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
  min-height: 40vh !important;
  border-radius: 0 0 20px 20px;

  &__wrap {
    position: relative;
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
