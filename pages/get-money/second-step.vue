<template>
  <div class='page'>
    <Header logoSmall />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p class='text-center page__step m-0 mb-2'>Шаг 2 из 6</p>
        <p class='text-center page__text m-0 mb-2'>Сделайте фото обратной стороны вашего удостоверения личности</p>
        <div class='steps d-flex align-items-center justify-content-between mb-5'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 2}]'></div>
        </div>
        <div class='page__form'>
          <div class='row mb-5'
               v-for='(block, index) in blocks'
               :key='index'>
            <div class='col-4'>
              <img :src='"~/assets/images/" + block.img + ".svg"' alt='Scan' />
            </div>
            <div class='col-8'>
              <p class='m-0'>{{ block.text }}</p>
            </div>
          </div>
          <BaseButton classes='scan__button--start' @click='stepHandler'>Сканировать</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/layout/Header/Header'
import BaseButton from '../../components/base/BaseButton/BaseButton'

export default {
  components: { BaseButton, Header },
  data() {
    return {
      blocks: [
        {
          img: 'scan',
          text: 'Отсканируйте обе стороны удостоверения: сначала лицевую, затем оборотную.'
        },
        {
          img: 'photo',
          text: 'Наведите камеру на удостоверение. Расположите документ так, чтобы он попадал в рамку и убедитесь, что весь текст считывается.'
        }
      ],
      step: 1
    }
  },
  methods: {
    stepHandler() {
      this.$router.replace("/get-money/third-step")
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
}

.scan {

  &__button {

    &--start {
      background: url("assets/images/scan-icon.png") no-repeat 20% 50%, rgba(162, 162, 201, 0.06) !important;
      border: 1px solid rgba(162, 162, 201, 0.47) !important;
      border-radius: 24.5px !important;
      text-transform: capitalize !important;
    }
  }
}
</style>
