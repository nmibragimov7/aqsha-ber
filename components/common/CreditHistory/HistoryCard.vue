<template>
  <div class="history__content">
    <div class="d-flex my-2 align-items-center justify-content-between">
      <div class="mr-2"><b>{{ history.Sum }}тг</b></div>
      <div class="mr-2"><span>до {{ new Date(history.LastOperationDate) | date('dd.MM.yyyy') }}</span></div>
      <div>
        <div class="d-flex align-items-center">
          <p class="my-0 mr-2">Текущий</p>
          <div class="d-flex history__info-img">
            <img src="/svg/info__ic.svg" alt="" class="w-100">
          </div>
        </div>
      </div>
    </div>
    <div class='row history__action'>
      <div class='col-12 d-flex justify-content-between mx-0 my-auto'>
        <BaseButton history bg='#3A2784' color='#fff'>продлить</BaseButton>
        <div class='mr-1'></div>
        <BaseButton history>погасить</BaseButton>
      </div>
    </div>
    <div class="history__line mt-3"/>
  </div>
</template>

<script>
export default {
  props: {
    history: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
