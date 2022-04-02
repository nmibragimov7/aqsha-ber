<template>
  <div class='page'>
    <Header v-if='isDesktop' logo-small/>
    <div class='container py-3 page--wrap'>
      <div class='page__header d-flex flex-column align-items-center'>
        <div class="page__inner-container page__header--inner" :class='{"text-center": !isDesktop}'>
          <h3 class='page__title m-0' :class='{"mt-3": !isDesktop}'>152 000 ₸</h3>
          <div :class='{"my-4 ml-1": isDesktop}' style='line-height: 26px'>
            <p class='m-0 px-2' :class='{"mb-1": !isDesktop}'>Ваша заявка одобрена!</p>
            <p class='m-0 px-2' :class='{"mb-4": !isDesktop}'>
              Максимальная сумма микрокредита - 152 000 ₸
            </p>
          </div>
        </div>
      </div>
      <div class='page__body p-4'>
        <div class="page__inner-container">
          <div class='d-flex justify-content-between align-items-center mt-2'>
            <span class='mr-2 info__title'>Вы берёте сумму</span>
            <span class='page__dotted'></span>
            <span class='ml-2 info__info'>{{ sum }} ₸</span>
          </div>
          <div class='mt-3'>
            <InputRange v-model='sum' :max='152000'/>
          </div>
          <div class='d-flex mt-3 justify-content-between align-items-center'>
            <span class='mr-2 info__title'>Срок возврата</span>
            <span class='page__dotted'></span>
            <span class='ml-2 info__info'>{{ duration }} дней</span>
          </div>
          <div class='mt-3'>
            <InputRange v-model='duration' purple :max='30'/>
          </div>
          <div class='mt-4'>
            <div class='page__stars my-3'/>
            <BaseInput v-model='code' placeholder='ПРОМОКОД'/>
            <div class='page__stars my-3'/>
          </div>
          <div class='d-flex mt-3 justify-content-between align-items-center'>
            <span class='mr-2 info__bold'>Процент по микрокредиту:</span>
            <span class='page__dotted'></span>
            <span class='ml-2 info__title'>0,1%</span>
          </div>
          <div class='d-flex mt-3 justify-content-between align-items-center'>
            <span class='mr-2 info__bold'>Переплата по микрокредиту:</span>
            <span class='page__dotted'></span>
            <span class='ml-2 info__title'>0,00000₸</span>
          </div>
          <div class='d-flex mt-4 justify-content-between align-items-center'>
            <span class='mr-2 info__bold'>Ежемесячный платёж</span>
            <span class='page__dotted'></span>
            <span class='ml-2 info__info'>000000₸</span>
          </div>
          <div class='page__stars my-3'/>
          <div class='d-flex mt-4 justify-content-between align-items-center'>
            <span class='mr-2 info__info'>ИТОГО К ВОЗВРАТУ:</span>
            <span class='page__dotted'></span>
            <span class='ml-2 info__title'>000 000₸</span>
          </div>
          <BaseButton classes='mt-4' @click='giveToMoney'>
            Получить деньги
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputRange from '@/components/common/InputRange/InputRange.vue'
import Header from '@/components/layout/Header/Header'

export default {
  components: { Header, InputRange},

  data() {
    return {
      code: '',
      sum: 152000,
      duration: 15,
      isDesktop: false
    }
  },
  mounted() {
    this.contentDisplay === 'desktop' ? this.isDesktop = true : this.isDesktop = false
  },
  methods: {
    giveToMoney() {
      this.$router.push('/approved/select-card')
    }
  }
}
</script>


<style lang='scss' scoped>
.page {
  background-image: linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);

  @media (min-width: 900px) {
    background: url("assets/images/promo_icon.png") no-repeat 0 0/20%,
    url("assets/images/promo_icon_2.png") no-repeat 10% 100%/15%,
    url("assets/images/promo_icon_3.png") no-repeat 100% 70%/15%,
    linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
    max-height: 50vh;
    min-height: auto;
  }

  &__inner-container {
    max-width: 450px;
    margin: 0 auto;
  }

  &--wrap {

    @media (min-width: 900px) {
      max-width: 800px;
    }
  }

  &__header {
    background: linear-gradient(226.59deg, #FFDF11 27.08%, #FF8D65 112.49%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px 10px 0 0;

    &--inner {
      display: flex;
      flex-direction: column;

      @media (min-width: 900px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  &__title {
    font-weight: 800;
    font-size: 52px;
    line-height: 70px;
    white-space: nowrap;
  }

  &__body {
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 0 0 10px 10px;
  }

  &__dotted {
    height: 1px;
    flex-grow: 1;
    border-bottom: 3px dotted #000;
  }

  &__stars {
    background-image: url("/images/stars_decor.png");
    background-position: center;
    background-size: contain;
    height: 8px;
  }
}

.info {
  &__title {
    font-size: 20px;
  }

  &__bold {
    font-weight: bold;
  }

  &__info {
    font-weight: bold;
    font-size: 24px;
  }
}


</style>
