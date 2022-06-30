<template>
  <div class='page' :class='{giveMoney}'>
    <Header logo-small />
    <div class='container page__wrap'>
      <div class='page__body px-4 d-flex flex-column justify-content-between' :class='{giveMoney}'>
        <div v-if='creditDenied'>
          <h1 class='text-center page__title my-2'>Отказано</h1>
          <p class='text-center page__description'>
            К сожалению, мы не можем одобрить микрокредит.
          </p>
        </div>
        <div v-else-if='networkError'>
          <h1 class='text-center page__title my-2'>Ошибка</h1>
          <p class='text-center page__description'>
            Проверьте подключение к интернету и попробуйте снова.
          </p>
        </div>
        <div v-else-if='smsError'>
          <h1 class='text-center page__title my-2'>Заблокированно</h1>
          <p class='text-center page__description'>
            К сожалению, вы исчерпали попытки ввода кода.
          </p>
        </div>
        <div v-else-if='giveMoney'
             class='give_money'>
          <h1 class='text-center page__title my-2'>152 000 ₸</h1>
          <p class='text-center page__description mt-4'>
            Оформление закончено: вы получите одобренную сумму выбранным вами способом
          </p>
        </div>
        <div v-if='smsError || creditDenied || networkError'
             class='d-flex justify-content-center px-5'>
          <img src='@/assets/images/warning.png'
               style='z-index: 1'
               class='w-100'
               alt=''>
        </div>
        <div v-if='(smsError && !isDesktop) || giveMoney' class='page__decor' :class='{smsError}'>
          <img src='/svg/money_decor.svg' class='w-100' alt=''>
        </div>
        <div v-if='smsError && !isDesktop' class='page__decor page__decor--back'>
          <img src='/svg/money_decor_2.svg' class='w-100' alt=''>
        </div>
        <div class='page__action' :class='{"mt-6": giveMoney}'>
          <BaseButton v-if='giveMoney' bg='#FFDF11' classes='mt-4' @click='goToMain'>
            В личный кабинет
          </BaseButton>
          <BaseButton bg='#3A2784' color='#fff' classes='mt-3' @click='goToMain'>
            На главную
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/layout/Header/Header'

export default {
  components: {
    Header
  },
  data() {
    return {
      creditDenied: false,
      smsError: false,
      networkError: false,
      giveMoney: false,
      isDesktop: false
    }
  },
  mounted() {
    this.creditDenied = this.$route.query.creditDenied
    this.smsError = this.$route.query.smsError
    this.networkError = this.$route.query.networkError
    this.giveMoney = this.$route.query.giveMoney
    this.contentDisplay === 'desktop' ? this.isDesktop = true : this.isDesktop = false
  },
  methods: {
    goToMain() {
      this.$router.push('/lc')
    }
  }
}
</script>
<style lang='scss' scoped>
.page {
  position: relative;
  border-radius: 0 0 20px 20px;
  min-height: 40vh;
  background: linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
  @media screen and (min-width: 600px) {
    background: url("/images/bg-on-anotherpage.png") no-repeat center / cover;
    min-height: 30vh;
  }


  &.giveMoney {
    background: url("assets/images/money_2.svg") no-repeat 100% 35%,
      url("assets/images/money_3.svg") no-repeat 30% 15%,
      linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);

    @media (min-width: 900px) {
      background: url("assets/images/promo_icon.png") no-repeat 0 0/20%,
        url("assets/images/promo_icon_2.png") no-repeat 10% 100%/15%,
        url("assets/images/promo_icon_3.png") no-repeat 100% 70%/15%,
        linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
    }
  }

  @media (min-width: 900px) {
    min-height: 50vh;
  }

  &__wrap {
    position: relative;
  }

  &__body {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    min-height: 50vh;

    @media (min-width: 900px) {
      margin: 0 auto 0 auto;
      max-width: 520px;

      &.giveMoney {
        background: url("assets/images/money_4.svg") no-repeat 102% -5%/25%,
        url("assets/images/money_3.svg") no-repeat 20% 5%;
      }
    }
  }

  &__title {
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    text-shadow: 0 4px 9px rgba(0, 0, 0, 0.25);
  }

  &__description {
    color: #fff;
  }

  &__decor {
    position: absolute;
    top: 25%;
    left: -20%;
    max-width: 50%;
    transform: rotate(-30deg);

    @media (min-width: 900px) {
      top: 50%;
      left: -30%;
    }

    &.smsError {
      right: 0%;
      left: auto;
      top: 30%;
      z-index: 1;
      transform: rotate(0deg);
      max-width: 50%;
    }

    &--back {
      left: 0%;
      top: 50%;
      z-index: 0;
      filter: blur(0px);
      transform: rotate(5deg);
      max-width: 40%;
    }
  }

  &__action {
    max-width: 325px;
    min-width: 325px;
    margin: 0 auto;
  }
}

.give_money {
  position: relative;
  z-index: 2;

  @media (min-width: 900px) {
    margin: 15% 0;
  }

  & .page__title {
    font-size: 66px;
  }
}
</style>
