<template>
  <PageWrap title="Детали кредита" bgTransparent>
    <p class="detail__title font-gilroy bg-white">
      Текущий
    </p>
    <div class="mt-2 bg-white detail__content">
      <ul class='page__inner-container page__list pl-3 pr-3 pt-4 pb-4 font-default'>
        <li class='mb-4 d-flex justify-content-between align-items-center'>
          <b>Сумма микрокредита:</b>
          <span class='page__dotted'></span>
          <span class='ml-2 info__info'>000 000₸</span>
        </li>
        <li class='mb-4 d-flex justify-content-between align-items-center'>
          <b>Дата получения:</b>
          <span class='page__dotted'></span>
          <span class='ml-2 info__info'>000 000₸</span>
        </li>
        <li class='mb-4 d-flex justify-content-between align-items-center'>
          <b>Дата погашения:</b>
          <span class='page__dotted'></span>
          <span class='ml-2 info__info'>дд.мм.гг</span>
        </li>
        <li class=' d-flex justify-content-between align-items-center'>
          <b>Способ получения:</b>
          <span class='page__dotted'></span>
          <span class='ml-2 detail__value'>Дебетовая карта
№00000000000000</span>
        </li>
        <li class="mt-3 d-flex gap-1">
          <BaseButton history bg='#3A2784' color="white">
            Продлить
          </BaseButton>
          <BaseButton history>
            Погасить
          </BaseButton>
        </li>
      </ul>
    </div>
    <template #page__footer>
      <BaseButton bg='#3A2784' color="white" @click="goToGiveMethods">
        Как погасить
      </BaseButton>
    </template>
  </PageWrap>
</template>
<script>
import PageWrap from "~/components/common/PageWrap";

export default {
  components: {PageWrap},
  methods:{
    goToGiveMethods(){
      this.$router.push("/repay?id=1");
    }
  }
}
</script>
<style lang="scss" scoped>
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
