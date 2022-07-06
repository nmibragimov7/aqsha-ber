<template>
  <PageWrap :title="currentStep===1 ?'Погашение микрокредита' :'Выберите способ погашения'" bg-transparent>
    <template v-if="currentStep===1">
      <div class='bg-white pl-0 block p-3 mb-5'>
        <ul class='p-0' :class='{"mx-600 mx-auto": isDesktop}'>
          <li class='mb-4 d-flex justify-content-between align-items-center'>
            <b class="font-gilroy">Сумма микрокредита:</b>
            <span class='page__dotted'></span>
            <span class='ml-2 info__info'>000 000₸</span>
          </li>
          <li class='d-flex mb-2 justify-content-between align-items-center'>
            <b class="font-gilroy">Дата погашения:</b>
            <span class='page__dotted'></span>
            <span class='ml-2 info__info'>00.00.00.</span>
          </li>
          <div class='page__stars my-3'/>
          <li class='d-flex mb-4 justify-content-between align-items-center'>
            <b class="font-gilroy" style="font-size: 0.9rem">Процент по микрокредиту:</b>
            <span class='page__dotted'></span>
            <span class='ml-2 info__info'>01%.</span>
          </li>
          <li class='d-flex mb-2 justify-content-between align-items-center'>
            <b class="font-gilroy" style="font-size: 0.9rem">Переплата по микрокредиту:</b>
            <span class='page__dotted'></span>
            <span class='ml-2 info__info'>000000</span>
          </li>
          <div class='page__stars my-3'/>
          <li class='d-flex justify-content-between align-items-center'>
            <b class="font-gilroy">ИТОГО К ВОЗВРАТУ:</b>
            <span class='page__dotted'></span>
            <span class='ml-2 info__info'>00.00.00.</span>
          </li>
        </ul>
      </div>
    </template>
    <template v-else>
      <div class="page__option--wrap">
        <div class='page__option bg-white block' :class='{"grid-row": isDesktop}'>
          <div class='px-3 py-4'>
            <label class='d-flex align-items-center justify-content-between mb-3'>
              <span class='d-inline-flex align-items-center mr-2'>
                <span class='page__option-image mr-3'>
                  <img src='/svg/pay-cards.svg' class='w-100' alt=''>
                </span>
                <span class='title text-bold'>Картой онлайн</span>
              </span>
              <RadioButton v-model='isCard' val='card' name='pay-method'/>
            </label>
            <BaseInput v-model='cardNumber'
                       mask='####-####-####-####'
                       :hasError='$v.cardNumber && $v.cardNumber.$dirty && $v.cardNumber.$error'
                       :validations='$v.cardNumber'
                       placeholder='Номер дебетовой карты'/>
            <label class='d-flex align-items-center justify-content-between mt-2'>
              <span class='d-inline-flex align-items-center mr-2'>
                <span class='page__option-image mr-3'>
                  <img src='/svg/pay-cards.svg' class='w-100' alt=''>
                </span>
                <span class="d-inline-flex flex-column">
                  <small class='title old-cards'>Visa 7287</small>
                  <small class='title'>01/24</small>
                </span>
              </span>
              <RadioButton name='type-card' val='visa'/>
            </label>
            <label class='d-flex align-items-center justify-content-between mt-2'>
              <span class='d-inline-flex align-items-center mr-2'>
                <span class='page__option-image mr-3'>
                  <img src='/svg/pay-cards.svg' class='w-100' alt=''>
                </span>
                <span class="d-inline-flex flex-column">
                  <small class='title old-cards'>MasterCard *9345</small>
                  <small class='title'>01/24</small>
                </span>
              </span>
              <RadioButton name='type-card' val='mastercard'/>
            </label>
          </div>
        </div>
        <div class='page__option bg-white block'>
          <div class='px-3 py-4'>
            <label class='d-flex align-items-center justify-content-between'>
              <span class='d-inline-flex align-items-center mr-2'>
                <span class='page__option-image mr-3'>
                  <img src='/svg/kazpochta.svg' class='w-100' alt=''>
                </span>
                <span class='title text-bold'>Наличными в АО «Казпочта»</span>
              </span>
              <RadioButton val='card' name='pay-method'/>
            </label>
          </div>
        </div>
        <div class='page__option bg-white block'>
          <div class='px-3 py-4'>
            <label class='d-flex align-items-center justify-content-between'>
              <span class='d-inline-flex align-items-center mr-2'>
                <span class='page__option-image mr-3'>
                  <img src='/svg/qiwi-wallet.svg' class='w-100' alt=''>
                </span>
                <span class='title text-bold'>Через терминалы и QIWI-кошелек»</span>
              </span>
              <RadioButton v-model='isCard' val='qiwi' name='pay-method'/>
            </label>
          </div>
        </div>
        <div class='page__option bg-white block'>
          <div class='px-3 py-4'>
            <label class='d-flex align-items-center justify-content-between'>
              <span class='d-inline-flex align-items-center mr-2'>
                <span class='page__option-image mr-3'>
                  <img src='/svg/kassa.svg' class='w-100' alt=''>
                </span>
                <span class='title text-bold'>Через терминалы Касса 24</span>
              </span>
              <RadioButton v-model='isCard' val='kassa24' name='pay-method'/>
            </label>
          </div>
        </div>
      </div>
    </template>
    <template #page__footer>
      <div v-if="currentStep===1" class="px-3">
        <div class='mw-310 mx-auto'>
          <BaseButton bg='#3A2784' color="white" @click="currentStep=2">
            Погасить
          </BaseButton>
        </div>
      </div>
      <div v-else class="px-3">
        <div class='mw-310 mx-auto'>
          <BaseButton uppercase
                      bg='#3A2784'
                      color="white"
                      @click='confirm'>
            подтвердить
          </BaseButton>
        </div>
      </div>
      <div style="height: 250px"/>
    </template>
  </PageWrap>
</template>
<script>
import { required } from 'vuelidate/lib/validators'

import PageWrap from "~/components/common/PageWrap"
import RadioButton from "~/components/base/RadioButton"
import BaseInput from '~/components/base/BaseInput/BaseInput'

export default {
  components: { BaseInput, PageWrap, RadioButton},
  // layout: "withFooter",
  data() {
    return {
      currentStep: 1,
      isDesktop: null,
      cardNumber: null,
      isCard: null
    }
  },
  validations: {
    cardNumber: {
      required
    }
  },
  mounted() {
    this.contentDisplay === "desktop" ? this.isDesktop = true : this.isDesktop = false
  },
  methods: {
    confirm() {
      if(this.isCard === 'card') {
        this.$v.cardNumber.$touch()
        if (!this.$v.cardNumber.$error) {
          this.currentStep = 3
        }
      } else {
        this.currentStep = 3
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.mw-310 {
  max-width: 310px;
}

.mx-600 {
  max-width: 600px;
}

.grid-row {
  grid-row: span 3 / 4;
}

.block {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}

.page__dotted {
  height: 1px;
  flex-grow: 1;
  border-bottom: 3px dotted #000;
  margin: 0 5px;
}

.page {
  &__stars {
    background-image: url("/images/stars_decor.png");
    background-position: center;
    background-size: contain;
    height: 8px;
  }

  &__option--wrap {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    margin-bottom: 30px;

    @media (min-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-gap: 20px 30px;
      margin-bottom: 40px;
    }
  }
}

.old-cards {
  color: rgba(50, 36, 67, 0.5);
}
</style>
