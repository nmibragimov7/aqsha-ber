<template>
  <div class='promo'>
    <div class='container promo__container d-flex'
         :class="{' flex-column justify-content-between align-items-center h-100':!isDesktop}">
      <div :class="{'col-5 promo__payments':isDesktop}">
        <div class='promo__text'>
          <h2 class='promo__title font-gilroy my-2'>мгновенные выплаты</h2>
          <h2 class='promo__description mt-1'>на карту и наличными</h2>
        </div>
        <div>
          <div v-if='!isDesktop' class='promo__img'>
            <img src='@/assets/images/header-background2.png' class='w-100' alt=''>
          </div>
          <div class='form' :class="{'desktop':isDesktop}">
            <div class='mb-3'>
              <BaseInput
                v-if='!isAuth'
                v-model='valueInput'
                placeholder='Введите ИИН'
                mask='### ### ### ###'
                :hasError='$v.valueInput.$error'
                bg='transparent'
                color='#FFF'
                is-promo
                icon='document'
                classes='header text-center' />
              <base-button v-else
                           uppercase
                           next
                           @click='$router.push("/lc")'>Личный кабинет</base-button>
            </div>
            <div class='mb-3'>
              <base-button :disabled='!valueInput.length || $v.valueInput.$error'
                          @click='getHandler'>
                ПОЛУЧИТЬ ДЕНЬГИ
              </base-button>
            </div>
            <p class='mt-0 mb-0 form__text'> нажимая на кнопку “получить деньги” вы даете свое согласие на сбор
              и
              обработку данных</p>
          </div>
        </div>
      </div>
    </div>
    <ProcessedModal />
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

import ProcessedModal from '../modal/ProcessedModal/ProcessedModal'
import BaseButton from '~/components/base/BaseButton/BaseButton'
import { cleanNumber } from '~/helpers/maskUtils'
import { isValidHandler } from '~/helpers/isValidIin'

export default {
  name: 'Promo',
  components: { BaseButton, ProcessedModal },
  data() {
    return {
      valueInput: '',
      isDesktop: false
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters['auth/isAuth']
    }
  },
  mounted() {
    this.isDesktop = this.contentDisplay === 'desktop'
  },
  validations: {
    valueInput: {
      isValidIin(value) {
        return isValidHandler(cleanNumber(value, false))
      },
      required
    }
  },
  methods: {
    getHandler() {
      this.$v.valueInput.$touch()
      if (!this.$v.valueInput.$error) {
        this.$modal.show('processed')
        const successCall = () => {
          this.$modal.hide('processed')
          this.$router.replace('register')
        }
        const data = {
          iin: cleanNumber(this.valueInput, false),
          successCall
        }
        if(this.isAuth) {
          this.$store.dispatch('auth/getClientRate', data)
        } else {
          this.$store.dispatch('auth/getClientRateAnonymous', data)
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.promo {
  color: #FFF;
  width: 100%;
  flex-grow: 1;

  &__container {
    height: 100%;
  }

  &__payments {
    align-self: center;
    margin-bottom: 10vh;

    .promo__title {
      font-size: clamp(40px, 6.5vh, 70px);
      line-height: 58px;
      text-align: left;
    }

    .promo__description {
      font-size: clamp(27px, 3.5vh, 35px);
      text-align: left;
      font-weight: normal;
    }
  }

  &__img {
    margin-bottom: -31px;
  }


  &__text {
    text-align: center;
  }

  &__title {
    font-size: 26px;
    text-transform: uppercase;
  }

  &__description {
    font-size: 14px;
    font-weight: normal;
  }

  &__button {
    font-size: 16px !important;
  }
}

.form {
  &.desktop {
    top: 0;
    background: none;
    padding: 0;
    max-width: 340px;
    margin-top: 35px;
  }

  background: rgba(255, 255, 255, 0.36);
  backdrop-filter: blur(15px);
  border-radius: 10px;
  position: relative;
  top: 20px;
  padding: 34px 26px 40px;

  &__text {
    text-align: center;
    font-size: 14px;
    line-height: 24px;
    text-decoration: underline;
  }
}
</style>
