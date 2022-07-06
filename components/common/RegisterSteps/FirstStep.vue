<template>
  <div class='page'>
    <Header logo-small />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <div v-if='isDesktop' class='page__decor'>
          <img src='/svg/money_decor.svg' class='w-100' alt=''>
        </div>
        <h1 class='text-center page__title mt-4 mb-4'>{{ user.SumDefault }} ₸</h1>
        <div class="page__description">
          <p class='text-center page__text page__text mt-3 mb-0'>Поздравляем! Предварительно одобренная сумма микрокредита.</p>
          <p class='text-center page__desc mt-1 mb-4'>Не переживайте — на этом этапе вы нам ничего не должны!</p>
        </div>
        <p class='text-center page__step mt-1 mb-2'>Шаг 1 из 6</p>
        <p class='text-center page__text m-0 mb-4'>Пройдите все 6 шагов, чтобы зарегистрироваться. После этого вы
          сможете
          выбрать сумму микрокредита и подписать договор.</p>
        <div class='steps d-flex align-items-center justify-content-between mb-4'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 1}]'></div>
        </div>
        <div class='page__info page__form mb-4'>
          <div class='w-100 mw-295 mx-auto'>
            <p class='text-center text-bold m-0 mb-4'>Для регистрации иполучения микрокредита вам понадобится:</p>
            <p class='text-center m-0'>1. Удостоверение личности</p>
            <p class='text-center m-0'>2. Мобильный телефон</p>
            <p class='text-center m-0'>3. Веб-камера</p>
          </div>
        </div>
        <div class='page__form'>
          <div class='page__form--wrap'>
            <p class='text-center m-0 mb-3'>Проверьте номер телефона — на него придет смс с кодом</p>
            <BaseInput :value='phone'
                       is-register
                       mask='+7 (# # #) # # # - # # - # #'
                       placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _'
                       :hasError='$v.phone && $v.phone.$dirty && $v.phone.$error'
                       :validations='$v.phone'
                       @input='value => $emit("inputHandler", "phone", value)' />
            <BaseButton classes='mt-3 font-gilroy'
                        uppercase
                        :disabled='$v.phone.$error'
                        @click='sendCode'>получить смс
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
    <SendCodeModal :code='code'
                   @stepHandler='confirmSmsCode'
                   @inputHandler='value => $emit("inputHandler", "code", value)' />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { maxLength, minLength, required } from 'vuelidate/lib/validators'

import Header from '../../layout/Header/Header'
import BaseInput from '../../base/BaseInput/BaseInput'
import BaseButton from '../../base/BaseButton/BaseButton'
import SendCodeModal from '../modal/SendCodeModal/SendCodeModal'
import { cleanNumber } from '~/helpers/maskUtils'

export default {
  name: 'FirstStep',
  components: {
    SendCodeModal,
    BaseButton,
    BaseInput,
    Header
  },
  props: {
    isDesktop: {
      type: Boolean,
      default: false
    },
    code: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/userData'
    })
  },
  validations: {
    phone: {
      required,
      minLength: minLength(28),
      maxLength: maxLength(28)
    }
  },
  methods: {
    sendCode() {
      this.$modal.show('sendCode')

      this.$v.phone.$touch()
      if (!this.$v.phone.$error) {
        const successCall = () => {
          this.$modal.show('sendCode')
        }
        this.$store.dispatch('auth/registerClient', {
          phone: cleanNumber(this.phone),
          successCall
        })
      }
    },
    confirmSmsCode() {
      const _this = this
      this.$requests.confirmRegisterCode({
        body: {
          iin: this.$store.state.auth.userData.iin,
          code: this.code
        },
        onSuccess(response) {
          if (response.data.Success) {
            _this.$emit('stepHandler', 'SecondStep')
          }
        },
        onError() {
          alert('ошибка')
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.mw-295 {
    max-width: 295px;
}

.page {
  background: url("assets/images/money_1.svg") no-repeat 0 55%,
              url("assets/images/money_2.svg") no-repeat 100% 30%,
              url("assets/images/money_3.svg") no-repeat 0 15%,
              linear-gradient(45deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  min-height: 70vh;
  border-radius: 0 0 20px 20px;
  position: relative;

  &__description{
    margin:0 auto;
    max-width: 72.5%;
  }

  @media (min-width: 900px) {
    background: url("assets/images/money_4.svg") no-repeat 85% 30%,
                url("assets/images/money_3.svg") no-repeat 35% 15%,
                linear-gradient(45deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
    min-height: 55vh;
  }

  &__wrap {
    position: relative;

    @media (min-width: 900px) {
      max-width: 800px;
    }
  }

  &__decor {
    position: absolute;
    left: -15%;
    bottom: 15%;
    max-width: 60%;
    z-index: 10;
  }

  &__body {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    line-height: 150%;
  }

  &__title {
    font-size: 74px;
    font-weight: 800;
    text-shadow: 0 4px 9px rgba(0, 0, 0, 0.25);
  }

  &__title,
  &__text,
  &__step {
    color: #FFF;
  }

  &__desc {
    color: #FFDF11;
    font-size: 18px;

    @media (min-width: 900px) {
      color: #FFF;
    }
  }

  &__step {
    font-size: 24px;
    font-weight: 600;
  }

  &__form {
    padding: 25px 40px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    &--wrap {
      width: 100%;

      @media (min-width: 900px) {
        width: 45%;
        margin: 0 auto;
      }
    }
  }

  &__info {
    display: none;

    @media (min-width: 900px) {
      display: block;
    }
  }
}
</style>
