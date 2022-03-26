<template>
  <div class='page'>
    <Header logoSmall/>
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p class='text-center page__step m-0 mb-2'>Шаг 6 из 6</p>
        <p class='text-center page__text m-0 mb-2'>Сведения о работе</p>
        <div class='steps d-flex align-items-center justify-content-between mb-3'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 6}]'></div>
        </div>
        <div class='page__form d-flex flex-column mt-4'>
          <div class='mb-3'>
            <BaseInput v-model='form.placeOfWork' label='Место работы (название)'/>
          </div>
          <div class='mb-3'>
            <BaseInput v-model='form.position' label='Должность'/>
          </div>
          <div class="row justify-content-between ">
            <div class='col-6'>
              <BaseInput v-model='form.income' label='Ежемес. доходы'/>
            </div>
            <div class='col-6'>
              <BaseInput v-model='form.expenses' label='Ежемес. расходы'/>
            </div>
          </div>
        </div>
        <BaseButton uppercase
                    @click='confirm'
                    classes='page__form--button mt-3'>подтвердить</BaseButton>
      </div>
    </div>
    <ProcessedModal/>
  </div>
</template>

<script>
import Header from "../../components/layout/Header/Header"
import BaseInput from "../../components/base/BaseInput/BaseInput"
import BaseButton from "../../components/base/BaseButton/BaseButton"
import ProcessedModal from '../../components/common/modal/ProcessedModal/ProcessedModal'

export default {
  components: { ProcessedModal, BaseButton, BaseInput, Header},
  data() {
    return {
      form: {
        placeOfWork: "",
        position: "",
        income: "",
        expenses: ""
      }
    }
  },
  methods: {
    confirm() {
      this.$modal.show('processed')
      setTimeout(() => {
        this.$modal.hide('processed')
        this.$router.push('/approved')
      }, 5000)
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
