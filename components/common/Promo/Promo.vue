<template>
  <div class='promo'>
    <p class='promo__title m-0 mb-5'>мгновенные выплаты</p>
    <p class='promo__description m-0 mb-5'>на карту и наличными</p>
    <BaseInput class='mb-2'
               placeholder='Введите ИИН'
               icon='document'
               classes='header'/>
    <BaseButton classes='mb-2'>ПОЛУЧИТЬ ДЕНЬГИ</BaseButton>
    <p class='m-0 mb-2'>нажимая на кнопку “рассчитать сумму кредита”
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
  backdrop-filter: blur(5px);
  transform: translateX(-50%);
  border-radius: 10px;
  &__title,
  &__description {
    display: none;
    color: #FFF;
  }
  &__title {
    font-size: 74px;
    font-weight: 800;
    text-transform: uppercase;
  }
  &__description {
    font-size: 42px;
    font-weight: 300;
  }
  @media (min-width: 900px) {
    bottom: 20%;
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
