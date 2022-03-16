<template>
  <div class="page">
    <div class="page__bg pb-3">
      <Header logoSmall />
      <div class="container">
        <div v-if="creditDenied">
          <h1 class="text-center page__title my-2">Отказано</h1>
          <p class="text-center page__description">
            К сожалению, мы не можем одобрить микрокредит.
          </p>
        </div>
        <div v-else-if="smsError">
          <h1 class="text-center page__title my-2">Заблокированно</h1>
          <p class="text-center page__description">
            К сожалению, вы исчерпали попытки ввода кода.
          </p>
        </div>
        <div v-else-if="giveToMoney">
          <h1 class="text-center page__title my-2">152 000 ₸</h1>
          <p class="text-center page__description">
            Оформление закончено: вы получите одобренную сумму выбранным вами способом
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div v-if="smsError || creditDenied" class="d-flex justify-content-center px-5 mt-4">
        <img src="@/assets/images/warning.png" class="w-100" alt="">
      </div>
      <BaseButton bg="#FFDF11" classes="mt-4" @click="goToMain">
        В личный кабинет
      </BaseButton>
      <BaseButton bg="#3A2784" color="#fff" classes="mt-3" @click="goToMain">
        На главную
      </BaseButton>
    </div>
    <div v-if="smsError || giveToMoney" class="page__decor" :class="{giveToMoney}">
      <img src="/svg/money_decor.svg" class="w-100" alt="">
    </div>
    <div v-if="smsError" class="page__decor page__decor--back">
      <img src="/svg/money_decor.svg" class="w-100" alt="">
    </div>
  </div>
</template>


<script>
import Header from "@/components/layout/Header/Header";

export default {
  components: {
    Header
  },
  data() {
    return {
      creditDenied: false,
      smsError: false,
      giveToMoney: false
    }
  },
  mounted() {
    this.creditDenied = this.$route.query.creditDenied;
    this.smsError = this.$route.query.smsError;
    this.giveToMoney = this.$route.query.giveToMoney;
  },
  methods: {
    goToMain() {
      this.$router.push("/")
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  position: relative;

  &__bg {
    background-image: linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
    border-radius: 0 0 20px 20px;
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
    right: -15%;
    top: 165px;
    max-width: 60%;
    &.giveToMoney{
      right: auto;
      left:-26%;
      top:80px;
      z-index: 1;
    }

    &--back {
      left: -15%;
      top: 400px;
      z-index: -1;
      filter: blur(2px);
      transform: rotate(-47.42deg);
      right: auto;
    }
  }
}
</style>
