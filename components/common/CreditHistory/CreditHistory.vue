<template>
  <div class="profile__block p-4 mt-4">
    <h2 class="history__title text-center">Кредитная история</h2>
    <div class="history__line"/>
    <HistoryCard/>
    <div class="d-flex flex-column align-items-center mt-4">
      <button class="history__show-more d-inline-flex align-items-center">Показать полностью
        <img class="ml-1" src="@/assets/images/arrow.svg" alt="">
      </button>
      <BaseButton bg="#3A2784" color="#fff" classes="mt-3" normal>Как погасить</BaseButton>
    </div>
  </div>
</template>
<script>
import HistoryCard from "@/components/common/CreditHistory/HistoryCard.vue"

export default {
  components: {
    HistoryCard
  }
}
</script>
<style lang="scss">
.history {
  &__line {
    border: 1px solid #D3D3E6;
  }

  &__title {
    font-size: 26px;
    font-weight: 600;
  }

  &__info {
    &-img {
      max-width: 100px;
      min-width: 25px;
    }
  }
  &__show-more{
    background: none;
    border:none;
    font-weight: 600;
    cursor: pointer;
    &:focus{
      outline: none;
    }
  }
  &__content {
    @media screen and (max-width: 375px) {
      font-size: 14px;
    }
  }
}

.profile {

  &__button {
    font-size: 11px !important;
    padding-top: 7px !important;
    padding-bottom: 7px !important;

    &--blue {
      background: #3A2784 !important;
      color: #FFF !important;
    }
  }
}
</style>
