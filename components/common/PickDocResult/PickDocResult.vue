<template>
  <div class='page__form d-flex flex-column align-items-center'>
    <div class='page__feedback text-center mb-3'>Успешно отсканировано</div>
    <img src='~/assets/images/document.png'
         alt='Scan'
         class='mb-3' />
    <BaseButton classes='page__button--prev mb-2' @click='$emit("goBack")'>Назад</BaseButton>
    <BaseButton classes='page__button--next'
                @click='stepHandler'>Далее</BaseButton>
  </div>
</template>

<script>
export default {
  name: 'PickDocResult',
  props: {
    path: {
      type: String,
      default: ''
    }
  },
  methods: {
    stepHandler() {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style lang='scss'>
.page {

  &__form {
    padding: 50px 40px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  &__feedback {
    width: 100%;
    background: url("assets/images/check-icon.svg") no-repeat 90% 50%, rgba(162, 162, 201, 0.06);
    font-size: 14px;
    padding: 15px 0;
    color: #81C688;
    border: 1px solid #81C688;
    box-sizing: border-box;
    border-radius: 24.5px;
  }

  &__button {

    &--prev {
      border: 1px solid rgba(162, 162, 201, 0.47) !important;
      font-size: 14px !important;
      background: rgba(162, 162, 201, 0.06) !important;
    }

    &--next {
      background: #3A2784 !important;
      color: #FFF !important;
      border-radius: 42px !important;
    }
  }
}
</style>
