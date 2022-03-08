<template>
  <div class='promo'>
    <div class="container d-flex flex-column justify-content-between align-items-center h-100">
      <div class="promo__text">
        <h2 class='promo__title my-2'>мгновенные выплаты</h2>
        <h2 class='promo__description mt-1'>на карту и наличными</h2>
      </div>
      <div class="promo__img">
        <img src="@/assets/images/header-background2.png" class="w-100" alt="">
      </div>
      <div class="form">
        <div class="mb-3">
          <BaseInput
            placeholder='Введите ИИН'
            icon='document'
            classes='header'/>
        </div>
        <div class="mb-3">
          <BaseButton>ПОЛУЧИТЬ ДЕНЬГИ</BaseButton>
        </div>
        <p class="mt-0 mb-1 form__text"> нажимая на кнопку “рассчитать сумму кредита” вы даете свое согласие на сбор и обработку данных</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Promo'
}
</script>

<style lang='scss' scoped>
.promo {
  color: #FFF;
  width: 100%;
  flex-grow: 1;

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
  padding: 37px 31px 30px;
  margin-top: -4px;

  &__text {
    text-align: center;
    font-size: 13px;
  }
}
</style>
