<template>
  <div class='page'>
    <Header logo-small />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <h1 class='text-center page__title mb-4'>Способы получения</h1>
        <div class='page__option--wrap mb-5'>
          <div class='page__option'>
            <div class='px-3 py-4 h-100'>
              <label class='d-flex align-items-center justify-content-between mb-4'>
                <span class='d-inline-flex align-items-center mr-2'>
                  <span class='page__option-image mr-3'>
                    <img src='/svg/pay-cards.svg' class='w-100' alt=''>
                  </span>
                  <span class='title'>На карту любого банка</span>
                </span>
                <RadioButton v-model='isCard' val='card' name='pay-method' />
              </label>
              <BaseInput v-model='cardNumber' mask='####-####-####-####' placeholder='Номер дебетовой карты' />
            </div>
          </div>
          <div class='page__option'>
            <div class='px-3 py-4 h-100'>
              <label class='d-flex align-items-center justify-content-between mb-4'>
                <span class='d-inline-flex align-items-center mr-2'>
                  <span class='page__option-image mr-3'>
                    <img src='/svg/kazpochta.svg' class='w-100' alt=''>
                  </span>
                  <span class='title'>Наличнымив АО «Казпочта»</span>
                </span>
                <RadioButton v-model='isCard' val='card' name='pay-method' />
              </label>
              <p class='m-0 text-center' style='color: rgba(50, 36, 67, 0.5)'>Отправим смс с кодом на ваш номер</p>
            </div>
          </div>
<!--          <div class='page__option'>-->
<!--            <div class='px-3 py-4'>-->
<!--              <label class='d-flex align-items-center justify-content-between mb-1'>-->
<!--            <span class='d-inline-flex align-items-center mr-2'>-->
<!--              <span class='page__option-image mr-3'>-->
<!--                <img src='/svg/qiwi-wallet.svg' class='w-100' alt=''>-->
<!--              </span>-->
<!--              <span class='title'>На QIWI-кошелёк</span>-->
<!--            </span>-->
<!--                <RadioButton v-model='isCard' val='card' name='pay-method' />-->
<!--              </label>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class='page__option'>-->
<!--            <div class='px-3 py-4'>-->
<!--              <label class='d-flex align-items-center justify-content-between mb-1'>-->
<!--            <span class='d-inline-flex align-items-center'>-->
<!--              <span class='page__option-image mr-3 mr-2'>-->
<!--                <img src='/svg/halyk-pay.svg' class='w-100' alt=''>-->
<!--              </span>-->
<!--              <span class='title'>Наличнымив банкомате</span>-->
<!--            </span>-->
<!--                <RadioButton v-model='isCard' val='card' name='pay-method' />-->
<!--              </label>-->
<!--            </div>-->
<!--          </div>-->
        </div>
        <div class='page__action'>
          <BaseButton bg='#3A2784' color='#fff' @click='goToConfirm'>
            ПОДТВЕРДИТЬ
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/Header/Header'
import RadioButton from '@/components/base/RadioButton'

export default {
  components: {
    Header,
    RadioButton
  },
  data() {
    return {
      cardNumber: '',
      isCard: ''
    }
  },
  methods: {
    goToConfirm() {
      this.$router.push('/approved/confirm')
    }
  }
}
</script>
<style scoped lang='scss'>

.page {
  background-image: linear-gradient(45deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  min-height: 30vh;
  border-radius: 0 0 20px 20px;

  @media screen and (min-width: 600px) {
    background: url("/images/bg-on-anotherpage.png") no-repeat center / cover;
    min-height: 50vh;
  }

  &__wrap {
    position: relative;

    @media (min-width: 900px) {
      max-width: 800px;
    }
  }

  &__body {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
  }

  &__title {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
  }

  &__option {
    background: #fff;
    list-style: none;
    border-radius: 15px;
    color: #322443;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);

    &-image {
      max-width: 180px;
      min-width: 80px;
      display: inline-block;
    }

    &--wrap {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-gap: 30px;

      @media (min-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
      }
    }
  }

  &__radio-btn {
    width: 28px;
    height: 28px;
    color: #A0A0C5;
  }

  &__action {
    max-width: 325px;
    margin: 0 auto;
  }
}

.title {
  font-size: 22px;
  font-weight: bold;
}
</style>
