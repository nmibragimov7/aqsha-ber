<template>
  <div>
    <h1 class="text-center page__title mb-3">Документы</h1>
    <ul class="page__list px-4 py-5 mb-4">
      <li class="mb-4 py-1">Правила предоставления микрокредитов</li>
      <li class="mb-4 py-1">Политика обработки данных</li>
      <li class="mb-4 py-1">Политика информационной безопасности</li>
      <li class="mb-4 py-1">Лицензия</li>
      <li class="mb-4 py-1">Договор о предоставлении микрокредита</li>
      <li class="mb-1 py-1">Реквизиты ТОО МФО «Взаймы»</li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
.page {
  &__title {
    color: #fff;
    font-size: 24px;
    font-weight: 500;
  }
  &__list{
    background: #fff;
    list-style: none;
    border-radius: 15px;
    color: #322443;
    &>li{
      text-decoration: underline;
    }
  }
}
</style>
