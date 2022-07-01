<template>
  <PageWrap title="Продление срока выплаты" bg-transparent>
    <div class='block bg-white'>
      <ul class="pl-0 p-3 mx-auto mw-600">
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
    </div>
    <div class='block bg-white'>
      <ul class="pl-0 p-3 mt-4 mx-auto mw-600">
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
    </div>
    <template #page__footer>
      <div class="px-3 mw-310 mx-auto">
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
  components: {PageWrap},
  layout: "withFooter",
}
</script>
<style lang="scss" scoped>
.mw-600 {
  max-width: 600px;
}

.mw-310 {
  max-width: 310px;
}

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
