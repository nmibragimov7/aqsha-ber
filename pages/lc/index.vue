<template>
  <PageWrap title="Личный кабинет">
    <div class="page__header p-4">
      <div class="row mb-2">
        <div class="col-6">
          <div class="profile__image h-100 w-100">

          </div>
        </div>
        <div class="col-6">
          <p class="mt-0 d-flex flex-column justify-content-between">Иванов</p>
          <p>Иван</p>
          <p>Иванович</p>
          <p>№ 21312421</p>
          <p class="mb-0">ИИН 000 302 500 679</p>
        </div>
      </div>
      <div class="row mb-0">
        <div class="col-6">
          <p><b>Дата рождения:</b></p>
          <p>+ 777 200 28 77</p>
        </div>
        <div class="col-6">
          <p><b>Пол:</b></p>
          <p>Мужской</p>
        </div>
        <div class="col-6">
          <p><b>Телефон::</b></p>
          <p>28.07.2985</p>
        </div>
        <div class="col-6">
          <p><b>E-mail:</b></p>
          <p>ten@mail.ru</p>
        </div>
      </div>
    </div>
    <template #page__footer>
      <BaseButton bg="#3A2784" color="#fff" classes="mt-3">
        + новый микрокредит
      </BaseButton>
      <div class="mt-4">
        <CreditHistory/>
      </div>
    </template>
  </PageWrap>
</template>
<script>
import CreditHistory from "@/components/common/CreditHistory/CreditHistory.vue";
import PageWrap from "@/components/common/PageWrap.vue";
export default {
  components: {CreditHistory, PageWrap}
}
</script>

<style lang="scss" scoped>
.page{
  &__header{

  }
}
.profile{
  &__image{
    background-color: #C4C4C4;
  }
  &__block{
    background: #fff;
    border-radius: 15px;
    color: #322443;
    font-size: 18px;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
  }

}
</style>
