<template>
  <div class='page'>
    <Header logoSmall />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p class='text-center page__step m-0 mb-2'>Шаг 6 из 6</p>
        <p class='text-center page__text m-0 mb-2'>Сведения о работе</p>
        <div class='steps d-flex align-items-center justify-content-between mb-5'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 6}]'></div>
        </div>
        <div class='page__form d-flex flex-column align-items-end'>
          <p class='page__form--text mb-3 mx-auto'>Адрес прописки:</p>
          <div class='mb-3'>
            <BaseInput v-model='form.placeOfWork' label='Место работы (название)' />
          </div>
          <div class='mb-3'>
            <BaseInput v-model='form.position' label='Должность' />
          </div>
          <div class='row'>
            <div class='col-6'>
              <BaseInput v-model='form.income' classes='mb-3' label='Ежемес. доходы' />
            </div>
            <div class='col-6 mb-2'>
              <BaseInput v-model='form.expenses' label='Ежемес. расходы' />
            </div>
          </div>
          <BaseButton classes='page__form--button'>подтвердить</BaseButton>
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
        placeOfWork: '',
        position: '',
        income: '',
        expenses: ''
      }
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

  &__form {
    padding: 20px 30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    &--button {
      background: #3A2784 !important;
      color: #FFF !important;
      border-radius: 42px !important;
    }
  }
}
</style>
