<template>
  <div class="page">
    <Header logoSmall/>
    <div class="container page__wrap">
      <div class="page__body px-4">
        <h1 class="text-center page__title mb-4">Документы</h1>
        <ul class="page__list px-4 py-5 mb-4">
          <li class="mb-4 py-1">Правила предоставления микрокредитов</li>
          <li class="mb-4 py-1">Политика обработки данных</li>
          <li class="mb-4 py-1">Политика информационной безопасности</li>
          <li class="mb-4 py-1">Лицензия</li>
          <li class="mb-4 py-1">Договор о предоставлении микрокредита</li>
          <li class="mb-1 py-1">Реквизиты ТОО МФО «Взаймы»</li>
        </ul>
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
  background-image: linear-gradient(45deg, #8055A1, #6C83F3,#AE6E9C);
  min-height: 30vh;
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
    color: #fff;
    font-size: 24px;
    font-weight: 500;
  }

  &__list {
    background: #fff;
    list-style: none;
    border-radius: 15px;
    color: #322443;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);

    & > li {
      text-decoration: underline;
    }
  }
}
</style>
