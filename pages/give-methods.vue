<template>
  <div class="page">
    <Header logoSmall/>
    <div class="container page__wrap">
      <div class="page__body px-4">
        <h1 class="text-center page__title mb-3">Cпособы получения</h1>
        <div class="page__list py-5 mb-4 px-2">
          <h3 class="text-center m-0">Банковская карта</h3>
          <ol class="mb-4">
            <li class="pl-1">Пройдите регистрацию</li>
            <li class="pl-1">Выберите сумму и срок микрокредита</li>
            <li class="pl-1">Выберите способ «Получение на карту»</li>
            <li class="pl-1">Введите данные карты, на которую вы хотите получить деньги</li>
            <li class="pl-1">Получите смс-код и введите его для подписания договора</li>
          </ol>
          <p class="px-3">После этого деньги моментально  зачислятся на вашу карту</p>
        </div>
        <div class="page__list py-5 mb-5 px-2">
          <h3 class="text-center m-0">Наличными в банкомате</h3>
          <ol class="mb-2">





            <li class="pl-1">Пройдите регистрацию</li>
            <li class="pl-1">выберите сумму и срок микрокредита</li>
            <li class="pl-1">выберите способ «Наличными в банкомате»</li>
            <li class="pl-1">получите смс-код и введите его для подписания договора</li>
            <li class="pl-1">получите секретный код из двух частей, и в течение 24 часов в любом банкомате Halyk Bank введите номер телефона, секретный код и сумму одобренного микрокредита</li>
          </ol>
          <p class="px-3">Если вы ввели все данные верно, банкомат выдаст деньги</p>
        </div>
        <div class="page__list py-5 mb-5 px-2">
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
        <div class="page__list py-5 mb-5 px-2">
          <h3 class="text-center m-0">Наличными в АО «Казпочта»</h3>
          <ol class="mb-2">
            <li class="pl-1">пройдите регистрацию</li>
            <li class="pl-1">Получите смс-код</li>
            <li class="pl-1">Пройдите в любое отделение АО «Казпочта»</li>
            <li class="pl-1">Предъявите кассиру удостоверение личности и назовите код</li>
          </ol>
          <p class="px-3">После этого кассир выдаст вам деньги</p>
        </div>
        <BaseButton classes="mb-3">
          Получить деньги
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header/Header";

export default {
  components:{
    Header
  },
  methods:{
    goToMain(){
      this.$router.push("/")
    }
  }
}
</script>
<style scoped lang="scss">
.page {
  background-image: linear-gradient(120deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  min-height: 25vh;
  border-radius: 0 0 20px 20px;
  &__wrap{
    position: relative;
  }
  &__body{
    position: absolute;
    right:0;
    top:0;
    left:0;
  }
  &__title {
    margin-top:0;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
  }
  &__list{
    background: #fff;
    border-radius: 15px;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
    color: #322443;
    & li{
      margin-bottom: 0;
    }
  }
}
</style>
