<template>
  <div class='page'>
    <div class='container py-3'>
      <div class='page__header d-flex flex-column align-items-center'>
        <div class="page__inner-container text-center">
          <h3 class='page__title mt-3 mb-0'>152 000 ₸</h3>
          <p class='mt-0 mb-1'>Ваша заявка одобрена!</p>
          <p class='mt-0 px-2 mb-4'>
            Максимальная сумма микрокредита — 152 000 ₸
          </p>
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

export default {
  components: {InputRange},

  data() {
    return {
      code: '',
      sum: 152000,
      duration: 15
    }
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

  &__inner-container {
    max-width: 450px;
    margin: 0 auto;
  }

  &__header {
    background: linear-gradient(226.59deg, #FFDF11 27.08%, #FF8D65 112.49%);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px 10px 0 0;
  }

  &__title {
    font-weight: 800;
    font-size: 66px;
    line-height: 74px;
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
