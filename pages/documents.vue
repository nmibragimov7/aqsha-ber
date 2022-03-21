<template>
  <div class="page">
    <Header logoSmall/>
    <div class="container page__wrap">
      <div class="page__body px-4">
        <h1 class="text-center page__title mb-4">Документы</h1>
        <div class="bg-white p-3 page__content mb-4">
          <ul class="page__list p-0 m-0">
            <li class="py-1">Правила предоставления микрокредитов</li>
            <li class="py-1">Политика обработки данных</li>
            <li class="py-1">Политика информационной безопасности</li>
            <li class="py-1">Лицензия</li>
            <li class="py-1">Договор о предоставлении микрокредита</li>
            <li class="py-1">Реквизиты ТОО МФО «Взаймы»</li>
          </ul>
        </div>
        <BaseButton @click="goToMain" bg="#3A2784" color="#fff">
          На главную
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
  &__content{
    border-radius: 15px;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
    color: #322443;
  }
  &__list {
    list-style: none;

    & > li {
      text-decoration: underline;
    }
  }
}
</style>
