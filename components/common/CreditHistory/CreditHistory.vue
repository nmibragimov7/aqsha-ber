<template>
  <div class="profile__block p-4 mt-4">
    <h2 class="history__title text-center">Кредитная история</h2>
    <div class="history__line"/>
    <div class="history__content">
      <div class="d-flex my-3 align-items-center justify-content-between">
        <div class="mr-2"><b>152 000тг</b></div>
        <div class="mr-2"><span>до 20.02.15</span></div>
        <div>
          <div class="d-flex align-items-center">
            <p class="my-0 mr-2">Текущий</p>
            <div class="d-flex history__info-img">
              <img src="/svg/info__ic.svg" alt="" class="w-100">
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex my-3 align-items-center justify-content-between">
        <div class="mr-2"><b>152 000тг</b></div>
        <div class="mr-2"><span>до 20.02.15</span></div>
        <div>
          <div class="d-flex align-items-center">
            <p class="my-0 mr-2">Текущий</p>
            <div class="d-flex history__info-img">
              <img src="/svg/info__ic.svg" alt="" class="w-100">
            </div>
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='col-6'>
          <BaseButton classes='profile__button profile__button--blue'>продлить</BaseButton>
        </div>
        <div class='col-6'>
          <BaseButton classes='profile__button'>погасить</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
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
  &__content{
    @media screen and (max-width:375px) {
        font-size: 14px;
    }
  }
}

.profile {

  &__button {
    font-size: 11px !important;

    &--blue {
      background: #3A2784 !important;
      color: #FFF !important;
    }
  }
}
</style>
