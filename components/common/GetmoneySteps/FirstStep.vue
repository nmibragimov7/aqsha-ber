<template>
  <div>
    <h1 class='text-center page__title m-0 mb-1'>152 000 ₸</h1>
    <p class='text-center page__text m-0 mb-3'>Предварительно одобренная сумма микрокредита. Поздравляем!</p>
    <p class='text-center page__desc m-0 mb-3'>Не переживайте — на этом этапе вы нам ничего не должны!</p>
    <p class='text-center page__step m-0 mb-2'>Шаг {{ currentStep }} из {{ steps }}</p>
    <p class='text-center page__text m-0 mb-2'>Пройдите все 6 шагов, чтобы зарегистрироваться. После этого вы сможете
      выбрать сумму микрокредита и подписать договор.</p>
    <div class='steps d-flex align-items-center justify-content-between mb-5'>
      <div v-for='num in 6'
           :key='num'
           class='steps__dot'
           :class='[{"steps__dot--active": currentStep === num}]'></div>
    </div>
    <div class='page__form'>
      <p class='text-center m-0 mb-3'>Проверьте номер телефона — на него придет смс с кодом</p>
      <BaseInput :value='phone'
                 @input='(value) => $emit("inputHandler", value)'
                 placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _' />
      <BaseButton classes='mt-3' @click='$emit("getCodeHandler")'>получить смс</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseInput from '../../base/BaseInput/BaseInput'
import BaseButton from '../../base/BaseButton/BaseButton'

export default {
  name: 'FirstStep',
  components: { BaseButton, BaseInput },
  props: {
    currentStep: {
      type: Number
    },
    steps: {
      type: Number
    },
    phone: {
      type: String
    }
  }
}
</script>

<style lang='scss' scoped>
.page {

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
