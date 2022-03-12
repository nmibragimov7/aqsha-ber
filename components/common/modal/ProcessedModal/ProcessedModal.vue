<template>
  <modal name='processed' :width='370' height='auto'>
    <div class='modal-processed d-flex flex-column align-items-center text-center'>
      <img src='~/assets/images/close.svg' class='modal-processed--close' @click='close'/>
      <div class='loader d-flex justify-content-between mt-5 mb-5'>
        <div v-for='(num, index) in 4'
             :key='num'
             :class='["loader__dot ml-1 mr-1"]'
             :style="{animationDelay: `${0.4*index}s`}"></div>
      </div>
      <p class='m-0 mb-3 modal-processed__title'>Ваши данные обрабатываются</p>
      <p class='m-0 mb-3 modal-processed__text'>Пожалуйста, подождите — обычно это занимает меньше минуты</p>
    </div>
  </modal>
</template>

<script>
export default {
  name: 'ProcessedModal',
  methods: {
    close() {
      this.$modal.hide("processed");
    }
  }
}
</script>

<style lang='scss' scoped>
.modal-processed {
  position: relative;
  padding: 20px;

  &--close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  &__title {
    font-size: 22px;
    font-weight: 800;
  }

  &__title,
  &__text {
    color: #322443;
  }
}

.loader {
  max-width: 180px;
  margin: 0 auto;

  &__dot {
    width: 43px;
    height: 6px;
    background: linear-gradient(89.77deg, #FF8D65 23.04%, #974ECD 99.94%);
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    animation: loaderDot ease-in-out 2s infinite;
  }
}

@keyframes loaderDot {
  25% {
    transform: scaleY(1.8);
    border-radius: 20px;
  }
  50% {
    transform: scaleY(1);
    border-radius: 5px;
  }
}
</style>
