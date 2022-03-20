<template>
  <div class='page__form d-flex flex-column align-items-center'>
    <div class='page__feedback text-center mb-4'>Успешно отсканировано</div>
    <img :src='imagePreview'
         v-show='showPreview'
         alt='Scan'
         class='mb-4' />
    <BaseButton classes='page__button--prev mb-2' @click='$emit("goBack")'>Назад</BaseButton>
    <BaseButton classes='page__button--next'
                @click='stepHandler'>Далее
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: 'PickDocResult',
  props: {
    path: {
      type: String,
      default: ''
    },
    file: {
      default: null
    },
    isAuth: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showPreview: false,
      imagePreview: ''
    }
  },
  mounted() {
    const reader = new FileReader()
    reader.addEventListener('load', function() {
      this.showPreview = true
      this.imagePreview = reader.result
    }.bind(this), false)
    if (this.file) {
      if (/\.(jpe?g|png|gif)$/i.test(this.file.name)) {
        reader.readAsDataURL(this.file)
      }
    }
  },
  methods: {
    stepHandler() {
      if(this.isAuth) {
        this.$router.replace('/approved')
        return
      }
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

    & > img {
      width: 100%;
      height: auto;
    }
  }

  &__feedback {
    width: 100%;
    background: url("assets/images/check-icon.svg") no-repeat 90% 50%, rgba(162, 162, 201, 0.06);
    font-size: 14px;
    padding: 8px 0;
    color: #81C688;
    border: 1px solid #81C688;
    box-sizing: border-box;
    border-radius: 24.5px;
  }

  &__button {

    &--prev {
      box-shadow: none !important;
      border: 1px solid rgba(162, 162, 201, 0.47) !important;
      font-size: 14px !important;
      background: rgba(162, 162, 201, 0.06) !important;
      padding: 15px !important;
    }

    &--next {
      background: #3A2784 !important;
      color: #FFF !important;
      border-radius: 42px !important;
    }
  }
}
</style>
