<template>
  <PageWrap title="Детали кредита" bg-transparent>
    <p class="detail__title font-gilroy bg-white">
      Текущий
    </p>
    <div class="mt-2 bg-white detail__content">
      <ul class='page__inner-container page__list pl-3 pr-3 pt-4 pb-4 font-default mw-600 mx-auto'>
        <li class='mb-4 d-flex justify-content-between align-items-center'>
          <b class='font-gilroy'>Сумма микрокредита:</b>
          <span class='page__dotted'></span>
          <span class='ml-2 info__info'>000 000₸</span>
        </li>
        <li class='mb-4 d-flex justify-content-between align-items-center'>
          <b class='font-gilroy'>Дата получения:</b>
          <span class='page__dotted'></span>
          <span class='ml-2 info__info'>000 000₸</span>
        </li>
        <li class='mb-4 d-flex justify-content-between align-items-center'>
          <b class='font-gilroy'>Дата погашения:</b>
          <span class='page__dotted'></span>
          <span class='ml-2 info__info'>дд.мм.гг</span>
        </li>
        <li class=' d-flex justify-content-between align-items-center'>
          <b class='font-gilroy'>Способ получения:</b>
          <span class='page__dotted'></span>
          <span class='ml-2 detail__value'>Дебетовая карта №00000000000000</span>
        </li>
        <li class="mt-3 d-flex gap-1 mw-310 mx-auto">
          <BaseButton history bg='#3A2784' color="white" @click="$router.push('/lc/credit/extend/1')">
            Продлить
          </BaseButton>
          <BaseButton history @click="$router.push('/lc/credit/repay/1')">
            Погасить
          </BaseButton>
        </li>
      </ul>
    </div>
    <template #page__footer>
      <div class='mw-310 mx-auto'>
        <BaseButton bg='#3A2784' color="white" @click="goToGiveMethods">
          Как погасить
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
  methods:{
    goToGiveMethods(){
      this.$router.push("/repay?id=1");
    }
  }
}
</script>
<style lang="scss" scoped>
.mw-600 {
  max-width: 600px;
}

.mw-310 {
  max-width: 310px;
}

.detail {
  &__title {
    text-align: center;
    color: #9472C2;
    padding: 0.7rem;
    font-weight: 600;
    border-radius: 10px;
    font-size: 1.2rem;
  }

  &__content {
    border-radius: 10px;
  }

  &__value {
    max-width: 150px;
    text-align: right;
    word-wrap: break-word;
  }
}

.page__dotted {
  height: 1px;
  flex-grow: 1;
  border-bottom: 3px dotted #000;
  margin: 0 5px;
}
</style>
