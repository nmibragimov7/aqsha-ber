<template>
  <div class="history__content">
    <div class="d-flex my-2 align-items-center justify-content-between">
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
    <div class="history__line mt-3"/>
  </div>
</template>
