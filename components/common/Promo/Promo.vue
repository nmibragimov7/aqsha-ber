<template>
  <div class='promo'>
    <div class='container d-flex flex-column justify-content-between align-items-center h-100'>
      <div class='promo__text'>
        <h2 class='promo__title my-2'>мгновенные выплаты</h2>
        <h2 class='promo__description mt-1'>на карту и наличными</h2>
      </div>
      <div>
        <div class='promo__img'>
          <img src='@/assets/images/header-background2.png' class='w-100' alt=''>
        </div>
        <div class='form'>
          <div class='mb-3'>
            <BaseInput
              v-model="valueInput"
              placeholder='Введите ИИН'
              icon='document'
              classes='header'/>
          </div>
          <div class='mb-3'>
            <BaseButton @click='getHandler'>ПОЛУЧИТЬ ДЕНЬГИ</BaseButton>
          </div>
          <p class='mt-0 mb-0 form__text'> нажимая на кнопку “рассчитать сумму кредита” вы даете свое согласие на сбор и
            обработку данных</p>
        </div>
      </div>
    </div>
    <ProcessedModal/>
  </div>
</template>

<script>
import ProcessedModal from '../modal/ProcessedModal/ProcessedModal'

export default {
  name: 'Promo',
  components: {ProcessedModal},
  data() {
    return {
      valueInput: ""
    }
  },
  methods: {
    getHandler() {
      this.$modal.show('processed')
      setTimeout(() => {
        this.$modal.hide('processed')
        this.$router.replace('register')
      }, 5000)
    }
  }
}
</script>

<style lang='scss' scoped>
.promo {
  color: #FFF;
  width: 100%;
  flex-grow: 1;

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
}

.form {
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
  }
}
</style>
