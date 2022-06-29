<template>
  <PageWrap title="Продление срока выплаты" bg-transparent>
    <ul class="bg-white pl-0 block p-3">
      <li class='mb-4 d-flex justify-content-between align-items-center'>
        <b>Сумма микрокредита:</b>
        <span class='page__dotted'></span>
        <span class='ml-2 info__info'>000 000₸</span>
      </li>
      <li class='d-flex justify-content-between align-items-center'>
        <b>Дата погашения:</b>
        <span class='page__dotted'></span>
        <span class='ml-2 info__info'>00.00.00.</span>
      </li>
    </ul>
    <ul class="bg-white pl-0 block p-3 mt-4">
      <li class='mb-4 d-flex justify-content-between align-items-center'>
        <b>Новая дата погашения:</b>
        <span class='page__dotted'></span>
        <span class='ml-2 info__info'>22.22.22</span>
      </li>
      <li class='d-flex justify-content-between align-items-center'>
        <b style="font-size: 1.3rem">Сумма к выплате:</b>
        <span class='page__dotted'></span>
        <span class='ml-2 info__info'>00.00.00.</span>
      </li>
    </ul>
    <template #page__footer>
      <div class="px-3">
        <BaseButton bg='#3A2784' color="white">
          Продлить
        </BaseButton>
      </div>
    </template>
  </PageWrap>
</template>
<script>
import PageWrap from "~/components/common/PageWrap";

export default {
  components: {PageWrap}
}
</script>
<style lang="scss" scoped>
.block{
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
.page__dotted {
  height: 1px;
  flex-grow: 1;
  border-bottom: 3px dotted #000;
  margin: 0 5px;
}
</style>
