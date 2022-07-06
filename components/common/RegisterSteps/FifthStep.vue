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
              <span class='page__form--text font-gilroy'>Имя:</span>
              <span class='page__dotted'></span>
              <span>Иван</span>
            </div>
            <div class='mb-2 d-flex justify-content-between align-items-center'>
              <span class='page__form--text font-gilroy'>Фамилия:</span>
              <span class='page__dotted'></span>
              <span>Иванов</span>
            </div>
            <div class='d-flex justify-content-between align-items-center'>
              <span class='page__form--text font-gilroy'>Отчество:</span>
              <span class='page__dotted'></span>
              <span>Иванович</span>
            </div>
          </div>
        </div>
        <div class='page__form d-flex flex-column'>
          <div class='page__form--wrap'>
            <p class='page__form--text mb-3 text-center font-gilroy mx-auto'>Адрес прописки:</p>
            <div class='mb-3'>
              <BaseInput :value='city'
                         classes='text-center'
                         placeholder='Город'
                         :hasError='$v.city && $v.city.$dirty && $v.city.$error'
                         :validations='$v.city'
                         @input='value => $emit("inputHandler", "city", value)' />
            </div>
            <div class='mb-3'>
              <BaseInput :value='street'
                         classes='text-center'
                         placeholder='Улица'
                         :hasError='$v.street && $v.street.$dirty && $v.street.$error'
                         :validations='$v.street'
                         @input='value => $emit("inputHandler", "street", value)' />
            </div>
            <div class='row mb-3 justify-content-between'>
              <div class='col-6'>
                <BaseInput :value='home'
                           classes='text-center'
                           placeholder='Дом'
                           :hasError='$v.home && $v.home.$dirty && $v.home.$error'
                           :validations='$v.home'
                           @input='value => $emit("inputHandler", "home", value)' />
              </div>
              <div class='col-6'>
                <BaseInput :value='apartment'
                           classes='text-center'
                           placeholder='Квартира'
                           :hasError='$v.apartment && $v.apartment.$dirty && $v.apartment.$error'
                           :validations='$v.apartment'
                           @input='value => $emit("inputHandler", "apartment", value)' />
                <p class='page__form--desc text-center mt-3'>- Если нет номера квартиры, поставьте прочерк</p>
              </div>
            </div>
            <BaseButton uppercase
                        class='mb-4'
                        next
                        :disabled='$v.$error'
                        @click='saveData'>подтвердить
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { minLength, required } from 'vuelidate/lib/validators'
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
  },
  validations: {
    city: {
      required,
      minLength: minLength(3)
    },
    street: {
      required
    },
    home: {
      required
    },
    apartment: {
      required
    }
  },
  methods: {
    saveData() {
      this.$v.city.$touch()
      this.$v.street.$touch()
      this.$v.home.$touch()
      this.$v.apartment.$touch()
      if (!this.$v.city.$error
        && !this.$v.street.$error
        && !this.$v.home.$error
        && !this.$v.apartment.$error) {
        this.$store.commit('auth/addRegistrationData', {
          'Address': `${this.city} ${this.street} ${this.home}/${this.apartment}`
        })
        this.$emit('stepHandler', 'SixthStep')
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
      font-weight: 700;
      font-size: 1.1rem;
    }

    &--desc {
      color: #974ECD;
      font-size: 10px;
      line-height: 100%;
    }

    &--wrap {
      width: 100%;

      @media (min-width: 900px) {
        width: 55%;
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
