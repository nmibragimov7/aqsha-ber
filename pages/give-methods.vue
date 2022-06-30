<template>
  <div class="page">
    <Header logo-small/>
    <div class="container page__wrap">
      <div class="page__body px-4">
        <h1 class="text-center page__title mb-3" :class='{"mb-5": isDesktop}'>Способы получения</h1>
        <div class='page__row'>
          <div class="page__list py-4 mb-4 px-2">
            <img v-if='isDesktop' class='h-50 w-100' src='/svg/bank-card.svg' alt=''/>
            <h3 class="text-center m-0">Банковская карта</h3>
            <ol class="mb-4">
              <li class="pl-1">пройдите регистрацию</li>
              <li class="pl-1">выберите сумму и срок микрокредита</li>
              <li class="pl-1">выберите способ «Получение на карту»</li>
              <li class="pl-1">введите данные карты, на которую вы хотите получить деньги</li>
              <li class="pl-1">получите смс-код и введите его для подписания договора</li>
            </ol>
            <p class="px-3">После этого деньги моментально зачислятся на вашу карту</p>
          </div>
          <div class="page__list py-4 mb-5 px-2">
            <img v-if='isDesktop' class='h-50 w-100' src='/svg/kaz-mail.svg' alt=''/>
            <h3 class="text-center m-0">Наличными в АО «Казпочта»</h3>
            <ol class="mb-2">
              <li class="pl-1">пройдите регистрацию</li>
              <li class="pl-1">получите смс-код</li>
              <li class="pl-1">пройдите в любое отделение АО «Казпочта»</li>
              <li class="pl-1">предъявите кассиру удостоверение личности и назовите код</li>
            </ol>
            <p class="px-3">После этого кассир выдаст вам деньги</p>
          </div>
          <div v-if="isAuth" class="page__list py-4 mb-5 px-2">
            <h3 class="text-center m-0">Наличными в банкомате</h3>
            <ol class="mb-2">
              <li class="pl-1">пройдите регистрацию</li>
              <li class="pl-1">выберите сумму и срок микрокредита</li>
              <li class="pl-1">выберите способ «Наличными в банкомате»</li>
              <li class="pl-1">получите смс-код и введите его для подписания договора</li>
              <li class="pl-1">получите секретный код из двух частей, и в течение 24 часов в любом банкомате Halyk Bank
                введите номер телефона, секретный код и сумму одобренного микрокредита
              </li>
            </ol>
            <p class="px-3">Если вы ввели все данные верно, банкомат выдаст деньги</p>
          </div>
          <div v-if="isAuth" class="page__list py-4 mb-5 px-2">
            <h3 class="text-center m-0">На QIWI-кошелек</h3>
            <ol class="mb-2">
              <li class="pl-1">пройдите регистрацию</li>
              <li class="pl-1">выберите сумму и срок микрокредита</li>
              <li class="pl-1">выберите способ «QIWI-кошелек»</li>
              <li class="pl-1">введите номер телефона кошелька QIWI, на который вы хотите получить деньги</li>
              <li class="pl-1">получите смс-код и введите его для подписания договора</li>
            </ol>
            <p class="px-3">После этого полученный микрокредит отобразится на счете кошелька QIWI</p>
          </div>
        </div>
        <div class='mt-10 mw-360 w-100 mx-auto'>
          <BaseButton classes="mb-3" uppercase>
            Получить деньги
          </BaseButton>
          <BaseButton uppercase next>
            На главную
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Header from "@/components/layout/Header/Header";

export default {
  components: {
    Header
  },
  data() {
    return {
      isDesktop: null
    }
  },
  computed: {
    ...mapGetters({
      isAuth: "auth/isAuth"
    })
  },
  mounted() {
    this.isDesktop = this.contentDisplay === "desktop"
  },
  methods: {
    goToMain() {
      this.$router.push("/")
    }
  },

}
</script>
<style scoped lang="scss">
.h-50 {
  height: 50px;
}

.mt-10 {
  margin-top: 30px !important;

  @media (min-width: 900px) {
    margin-top: 100px;
  }
}

.mw-360 {
  max-width: 360px;
}

.page {
  background-image: linear-gradient(120deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  min-height: 25vh;
  border-radius: 0 0 20px 20px;
  @media screen and (min-width: 600px) {
    background: url("/images/bg-on-anotherpage.png") no-repeat center / cover;
    min-height: 40vh;
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;

    @media (min-width: 900px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 30px;
    }
  }

  &__wrap {
    position: relative;
  }

  &__body {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    padding-bottom: 100px;
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
  }

  &__title {
    margin-top: 0;
    color: #fff;
    font-size: 24px;
    font-weight: 500;

    @media (min-width: 900px) {
      font-size: 46px;
    }
  }

  &__list {
    background: #fff;
    border-radius: 15px;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
    color: #322443;
    height: 100%;

    & li {
      margin-bottom: 0;
    }
  }
}


</style>
