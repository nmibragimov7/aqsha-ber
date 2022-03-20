<template>
  <div class='page'>
    <Header logoSmall />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p class='text-center page__step m-0 mb-2'>Шаг 5 из 6</p>
        <p class='text-center page__text m-0 mb-2'>Личная информация</p>
        <div class='steps d-flex align-items-center justify-content-between mb-3'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 5}]'></div>
        </div>
        <div class='page__form mb-3'>
          <div class='mb-2 d-flex justify-content-between align-items-center'>
            <span class='page__form--text'>Имя:</span>
            <span class="page__dotted"></span>
            <span>Иван</span>
          </div>
          <div class='mb-2 d-flex justify-content-between align-items-center'>
            <span class='page__form--text'>Фамилия:</span>
            <span class="page__dotted"></span>
            <span>Иванов</span>
          </div>
          <div class='d-flex justify-content-between align-items-center'>
            <span class='page__form--text'>Отчество:</span>
            <span class="page__dotted"></span>
            <span>Иванович</span>
          </div>
        </div>
        <div class='page__form d-flex flex-column align-items-end'>
          <p class='page__form--text mb-3 mx-auto'>Адрес прописки:</p>
          <div class='mb-1'>
            <BaseInput v-model='form.city' placeholder='Город' />
          </div>
          <div class='mb-1'>
            <BaseInput v-model='form.street' placeholder='Улица' />
          </div>
          <div class='row mb-3'>
            <div class='col-6'>
              <BaseInput v-model='form.home' placeholder='Дом' />
            </div>
            <div class='col-6 mb-2'>
              <BaseInput v-model='form.apartment' placeholder='Квартира' />
            </div>
            <div class='col-6 ml-auto'>
              <p class='page__form--desc m-0'>- Если нет номера квартиры, поставьте прочерк</p>
            </div>
          </div>
          <BaseButton classes='page__form--button' @click='stepHandler'>подтвердить</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/layout/Header/Header'
import BaseInput from '../../components/base/BaseInput/BaseInput'
import BaseButton from '../../components/base/BaseButton/BaseButton'

export default {
  components: { BaseButton, BaseInput, Header },
  data() {
    return {
      form: {
        city: '',
        street: '',
        home: '',
        apartment: ''
      }
    }
  },
  methods: {
    stepHandler() {
      this.$router.replace("/register/sixth-step")
    }
  }
}
</script>

<style lang='scss'>
.page {
  background: linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
  min-height: 30vh !important;
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

  &__dotted {
    height: 8px;
    margin: 0 9px;
    flex-grow: 1;
    border-bottom: 2px dotted #000;
  }

  &__form {
    padding: 20px 30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    &--text {
      font-weight: 800;
    }

    &--desc {
      color: #974ECD;
      font-size: 10px;
      line-height: 150%;
    }

    &--button {
      background: #3A2784 !important;
      color: #FFF !important;
      border-radius: 42px !important;
    }
  }

  &__avatar {
    width: 100%;
    height: 100%;
    background: url("assets/images/circle.svg") no-repeat 50% 20%, url("assets/images/avatar-icon.png") no-repeat center;
  }
}
</style>
