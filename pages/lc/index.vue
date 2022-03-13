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
      <div class="profile__block p-4 mt-4">
        <h2 class="profile__title text-center">Кредитная история</h2>
        <div class="profile__line">

        </div>
        <div>
          <div class="row">
            <div class="col-3 d-inline-flex align-items-center"><b>152 000тг</b></div>
            <div class="col-3 d-inline-flex align-items-center"><span>до 20.02.15</span></div>
            <div class="col-3 d-inline-flex align-items-center"><p>Текущий</p></div>
            <div class="col-3 d-inline-flex align-items-center">
              <div>
                <img src="/svg/info__ic.svg" alt="" class="w-100">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <BaseButton>продлить</BaseButton>
            </div>
            <div class="col-6">
              <BaseButton>погасить</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PageWrap>
</template>
<script>
import PageWrap from "@/components/common/PageWrap.vue";
export default {
  components: {PageWrap}
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
  &__title{
    font-size: 26px;
    font-weight: 600;
  }
  &__line{
    border: 1px solid #D3D3E6;
  }
}
</style>
