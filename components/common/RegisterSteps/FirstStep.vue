<template>
  <div class='page'>
    <Header logo-small />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <div v-if='isDesktop' class="page__decor">
          <img src="/svg/money_decor.svg" class="w-100" alt="">
        </div>
        <h1 class='text-center page__title m-0 mb-4'>152 000 ₸</h1>
        <p class='text-center page__text m-0 mb-4'>Предварительно одобренная сумма микрокредита. Поздравляем!</p>
        <p class='text-center page__desc m-0 mb-4'>Не переживайте — на этом этапе вы нам ничего не должны!</p>
        <p class='text-center page__step m-0 mb-2'>Шаг 1 из 6</p>
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
          <p class='text-center text-bold m-0 mb-4'>Для регистрации иполучения микрокредита вам понадобится:</p>
          <p class='text-center m-0'>1. Удостоверение личности</p>
          <p class='text-center m-0'>2. Мобильный телефон</p>
          <p class='text-center m-0'>3. Веб-камера</p>
        </div>
        <div class='page__form'>
          <div class='page__form--wrap'>
            <p class='text-center m-0 mb-3'>Проверьте номер телефона — на него придет смс с кодом</p>
            <BaseInput :value='phone'
                       @input='value => $emit("inputHandler", "phone", value)'
                       isRegister
                       mask='+7 (# # #) # # # - # # - # #'
                       placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _' />
            <BaseButton classes='mt-3'
                        @click='$modal.show("sendCode")'>получить смс</BaseButton>
          </div>
        </div>
      </div>
    </div>
    <SendCodeModal :code='code'
                   @stepHandler='$emit("stepHandler", "SecondStep")'
                   @inputHandler='value => $emit("inputHandler", "code", value)' />
  </div>
</template>

<script>
import Header from '../../layout/Header/Header'
import BaseInput from '../../base/BaseInput/BaseInput'
import BaseButton from '../../base/BaseButton/BaseButton'
import SendCodeModal from '../modal/SendCodeModal/SendCodeModal'
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
      type: String
    },
    phone: {
      type: String
    }
  }
}
</script>

<style lang='scss' scoped>
.page {
  background: url("assets/images/money_1.svg") no-repeat 0 55%,
  url("assets/images/money_2.svg") no-repeat 100% 30%,
  url("assets/images/money_3.svg") no-repeat 0 15%,
  linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
  min-height: 70vh;
  border-radius: 0 0 20px 20px;
  position: relative;

  @media (min-width: 900px) {
    background: url("assets/images/money_4.svg") no-repeat 85% 30%,
    url("assets/images/money_3.svg") no-repeat 35% 15%,
    linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
    min-height: 50vh;
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
    font-size: 68px;
    font-weight: 800;
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
    font-weight: 700;
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