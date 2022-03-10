<template>
  <div>
    <h1 class="text-center page__title mb-3">Cпособы получения</h1>
    <div class="page__list py-5 mb-4 px-2">
      <h3 class="text-center m-0">Банковская карта</h3>
      <ol class="mb-4">
        <li class="mb-3 py-1 pl-1">Пройдите регистрацию</li>
        <li class="mb-3 py-1 pl-1">Выберите сумму и срок микрокредита</li>
        <li class="mb-3 py-1 pl-1">Выберите способ «Получение на карту»</li>
        <li class="mb-3 py-1 pl-1">Введите данные карты, на которую вы хотите получить деньги</li>
        <li class="mb-3 py-1 pl-1">Получите смс-код и введите его для подписания договора</li>
      </ol>
      <p class="px-3">После этого деньги моментально  зачислятся на вашу карту</p>
    </div>
    <div class="page__list py-5 mb-5 px-2">
      <h3 class="text-center m-0">Наличными в АО «Казпочта»</h3>
      <ol class="mb-2">
        <li class="mb-3 py-1 pl-1">Получите смс-код</li>
        <li class="mb-3 py-1 pl-1">Пройдите в любое отделение АО «Казпочта»</li>
        <li class="mb-3 py-1 pl-1">Предъявите кассиру удостоверение личности и назовите код</li>
      </ol>
      <p class="px-3">После этого кассир выдаст вам деньги</p>
    </div>
    <BaseButton classes="mb-3">
      Получить деньги
    </BaseButton>
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
    border-radius: 15px;
    color: #322443;

  }
}
</style>
