<template>
  <div class="page">
    <Header logoSmall/>
    <div class="container page__wrap">
      <div class="page__body px-4">
        <h1 class="text-center page__title m-0 mb-1">152 000 ₸</h1>
        <p class='text-center page__text m-0 mb-3'>Предварительно одобренная сумма микрокредита. Поздравляем!</p>
        <p class='text-center page__desc m-0 mb-3'>Не переживайте — на этом этапе вы нам ничего не должны!</p>
        <p class='text-center page__step m-0 mb-2'>Шаг {{currentStep}} из {{steps}}</p>
        <p class='text-center page__text m-0 mb-2'>Пройдите все 6 шагов, чтобы зарегистрироваться. После этого вы сможете выбрать сумму микрокредита и подписать договор.</p>
        <div class='steps d-flex align-items-center justify-content-between mb-5'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": currentStep === num}]'></div>
        </div>
        <div class='page__form'>
          <p class='text-center m-0 mb-3'>Проверьте номер телефона — на него придет смс с кодом</p>
          <BaseInput v-model='form.phone'
                     placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _'/>
          <BaseButton classes='mt-3'>получить смс</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/layout/Header/Header'
import BaseInput from '../components/base/BaseInput/BaseInput'
import BaseButton from '../components/base/BaseButton/BaseButton'
export default {
  name: 'get-money',
  components: { BaseButton, BaseInput, Header },
  data() {
    return {
      steps: 6,
      currentStep: 1,
      form: {
        phone: null
      }
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.page {
  background: url("assets/images/money_1.svg") no-repeat 0 50%,
              url("assets/images/money_2.svg") no-repeat 100% 30%,
              url("assets/images/money_3.svg") no-repeat 0 10%,
              linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
  min-height: 70vh;
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
  }
}

.steps {

  &__dot {
    width: 54px;
    height: 9px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 9px;

    &--active {
      transform: scale(1.2);
      background: #FFC117;
    }
  }
}
</style>
