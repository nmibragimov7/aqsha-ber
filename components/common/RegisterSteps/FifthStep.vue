<template>
  <div class='page'>
    <Header logo-small />
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
          <div class='page__form--wrap'>
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
        </div>
        <div class='page__form d-flex flex-column'>
          <div class='page__form--wrap'>
            <p class='page__form--text mb-3 mx-auto'>Адрес прописки:</p>
            <div class='mb-3'>
              <BaseInput :value='city'
                         classes="text-center"
                         placeholder='Город'
                         @input='value => $emit("inputHandler", "city", value)' />
            </div>
            <div class='mb-3'>
              <BaseInput :value='street'
                         classes="text-center"
                         placeholder='Улица'
                         @input='value => $emit("inputHandler", "street", value)' />
            </div>
            <div class="row mb-3 justify-content-between">
              <div class='col-6'>
                <BaseInput :value='home'
                           classes="text-center"
                           placeholder='Дом'
                           @input='value => $emit("inputHandler", "home", value)' />
              </div>
              <div class='col-6'>
                <BaseInput :value='apartment'
                           classes="text-center"
                           placeholder='Квартира'
                           @input='value => $emit("inputHandler", "apartment", value)' />
                <p class='page__form--desc text-center mt-2'>- Если нет номера квартиры, поставьте прочерк</p>
              </div>
            </div>
            <BaseButton uppercase
                        next
                        @click='$emit("stepHandler", "SixthStep")'>подтвердить</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '../../layout/Header/Header'
import BaseInput from '../../base/BaseInput/BaseInput'
import BaseButton from '../../base/BaseButton/BaseButton'
export default {
  components: { BaseButton, BaseInput, Header },
  props: {
    isDesktop: {
      type: Boolean,
      default: false
    },
    city: {
      type: String,
      default: ''
    },
    street: {
      type: String,
      default: ''
    },
    home: {
      type: String,
      default: ''
    },
    apartment: {
      type: String,
      default: ''
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

    &--wrap {
      width: 100%;

      @media (min-width: 900px) {
        width: 45%;
        margin: 0 auto;
      }
    }
  }

  &__avatar {
    width: 100%;
    height: 100%;
    background: url("assets/images/circle.svg") no-repeat 50% 20%, url("assets/images/avatar-icon.png") no-repeat center;
  }
}
</style>
