<template>
  <div class='page'>
    <Header logoSmall />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p class='text-center page__step m-0 mb-2'>Шаг 3 из 6</p>
        <p class='text-center page__text m-0 mb-2'>Сделайте фото обратной стороны вашего удостоверения личности</p>
        <div class='steps d-flex align-items-center justify-content-between mb-5'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 3}]'></div>
        </div>
        <div class='page__form d-flex flex-column align-items-center'>
          <div class='page__desc text-center mb-3'>Успешно отсканировано</div>
          <img src='~/assets/images/document.png'
               alt='Scan'
               class='mb-3' />
          <BaseButton classes='scan__button--next' @click='stepHandler'>Далее</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../../components/base/BaseButton/BaseButton'
import Header from '../../components/layout/Header/Header'

export default {
  name: 'third-step',
  components: { Header, BaseButton },
  methods: {
    stepHandler() {
      this.$router.replace("/get-money/fourth-step")
    }
  }
}
</script>

<style lang='scss'>
.page {
  background: linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
  min-height: 40vh !important;
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
    padding: 50px 40px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  &__desc {
    width: 100%;
    background: url("assets/images/check-icon.svg") no-repeat 90% 50%, rgba(162, 162, 201, 0.06);
    font-size: 14px;
    padding: 15px 0;
    color: #81C688;
    border: 1px solid #81C688;
    box-sizing: border-box;
    border-radius: 24.5px;
  }
}

.scan {
  background: url("assets/images/scan-icon.png") no-repeat 20% 50%, rgba(162, 162, 201, 0.06) !important;
  border: 1px solid rgba(162, 162, 201, 0.47) !important;
  border-radius: 24.5px !important;
  text-transform: capitalize !important;

  &__button {

    &--next {
      background: #3A2784 !important;
      color: #FFF !important;
      border-radius: 42px !important;
    }
  }
}
</style>
