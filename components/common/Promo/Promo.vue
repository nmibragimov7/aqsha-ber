<template>
  <div class='promo'>
    <p class='promo__title'>мгновенные выплаты</p>
    <p class='promo__description'>на карту и наличными</p>
    <BaseInput class='mb-4'
               placeholder='Введите ИИН'
               icon='document'
               classes='header'/>
    <BaseButton classes='mb-4'>ПОЛУЧИТЬ ДЕНЬГИ</BaseButton>
    <p class='m-0'>нажимая на кнопку “рассчитать сумму кредита”
      вы даете свое согласие на сбор и обработку данных</p>
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
  text-align: center;
  width: 100%;
  max-width: 371px;
  position: absolute;
  bottom: -30px;
  left: 50%;
  padding: 40px 25px;
  background: rgba(255, 255, 255, 0.36);
  backdrop-filter: blur(15px);
  transform: translateX(-50%);
  border-radius: 10px;
  z-index: 10;
  &__title,
  &__description {
    display: none;
    color: #FFF;
  }

  &__title {
    font-size: 74px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 0 30px;
  }

  &__description {
    font-size: 42px;
    font-weight: 300;
    white-space: nowrap;
    margin: 0 0 60px;
  }

  @media (min-width: 900px) {
    bottom: 10%;
    left: 25%;
    backdrop-filter: none;
    background: inherit;
    &__title,
    &__description {
      display: block;
    }
  }
}
</style>
