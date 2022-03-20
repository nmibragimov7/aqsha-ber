<template>
  <div class='page'>
    <Header logoSmall />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p v-if='!isAuth' class='text-center page__step m-0 mb-2'>Шаг 4 из 6</p>
        <p class='text-center page__text m-0 mb-2'>Сделайте селфи</p>
        <div v-if='!isAuth' class='steps d-flex align-items-center justify-content-between mb-3'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 4}]'></div>
        </div>
        <div v-if='!isLoadedFile' class='page__form'>
          <div class='row mb-5'>
            <div class='col-3'>
              <div class='page__avatar'></div>
            </div>
            <div class='col-9'>
              <p class='m-0'>Сделайте селфи. Снимите головной убор и очки, убедитесь, что лицо хорошо освещено и
                попадает в рамку.</p>
            </div>
          </div>
          <BaseButton classes='page__button--camera mb-2'
                      @click='stepHandler'>Открыть камеру</BaseButton>
          <BasePickFile name='load-document'
                        icon='load-icon'
                        text='Загрузить'
                        @pickFile='pickFile' />
        </div>
        <PickDocResult v-else
                       :file='file'
                       :isAuth='isAuth'
                       path='/register/fifth-step'
                       @goBack='goBack'/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../../components/base/BaseButton/BaseButton'
import Header from '../../components/layout/Header/Header'
import PickDocResult from '../../components/common/PickDocResult/PickDocResult'

export default {
  components: { PickDocResult, Header, BaseButton },
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
    stepHandler() {
      this.$router.replace('/register/fifth-step')
    },
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

<style lang='scss'>
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

  &__button {

    &--camera {
      font-size: 14px !important;
      background: url("assets/images/self-icon.svg") no-repeat 20% 50%, rgba(162, 162, 201, 0.06) !important;
      border: 1px solid rgba(162, 162, 201, 0.47) !important;
      box-shadow: none !important;
      border-radius: 24.5px !important;
      text-transform: capitalize !important;
      padding: 15px !important;
    }
  }
}
</style>
