<template>
  <div class='page'>
    <Header v-if='isDesktop' logo-small />
    <div class='container py-3 page--wrap'>
      <div class='page__item'>
        <div class='page__header d-flex flex-column align-items-center'>
          <p v-if='isDesktop' class='my-4 text-bold' style='font-size: 20px'>Ваша заявка одобрена!</p>
          <div class='page__inner-container page__header--inner' :class='{"text-center": !isDesktop}'>
            <h3 class='page__title m-0 font-gilroy' :class='{"mt-3": !isDesktop}'>{{ userData.SumDefault }} ₸</h3>
            <div :class='{"my-4 ml-1": isDesktop}' style='line-height: 26px'>
              <p v-if='!isDesktop' class='m-0 px-2'>Ваша заявка одобрена!</p>
              <p class='m-0 px-2' :class='{"mb-4": !isDesktop}'>
                Максимальная сумма микрокредита - {{ userData.SumMax }} ₸
              </p>
            </div>
          </div>
        </div>
        <div class='page__body p-4'>
          <div class='page__inner-container'>
            <div class='d-flex justify-content-between align-items-center mt-2'>
              <span class='mr-2 info__title'>Вы берёте сумму</span>
              <span class='page__dotted'></span>
              <span class='ml-2 info__info'>{{ userData.SumDefault }} ₸</span>
            </div>
            <div class='mt-3'>
              <InputRange v-model='userData.SumDefault' :min='userData.SumMin' :step='userData.SumIncrementValue'
                          :max='userData.SumMax' />
            </div>
            <div class='d-flex mt-3 justify-content-between align-items-center'>
              <span class='mr-2 info__title'>Срок возврата</span>
              <span class='page__dotted'></span>
              <span class='ml-2 info__info'>{{ userData.DaysDefault }} дней</span>
            </div>
            <div class='mt-3'>
              <InputRange v-model='userData.DaysDefault' :min='userData.DaysMin' purple :max='userData.DaysMax' />
            </div>
            <div class='mt-4'>
              <div class='page__stars my-3' />
              <BaseInput :value='code'
                         @input='(value) => sendPromoCode(value)'
                         :hasError='validations.$dirty && !validations.isValidPromoCode'
                         :validations='validations'
                         :icon='validations.$dirty ? !validations.isValidPromoCode ? "error-icon" : "success-icon" : null'
                         left='auto'
                         right='20px'
                         placeholder='ПРОМОКОД' />
              <div class='page__stars my-3' />
            </div>
            <div class='d-flex mt-3 justify-content-between align-items-center'>
              <span class='mr-2 info__bold font-gilroy'>Процент по микрокредиту:</span>
              <span class='page__dotted'></span>
              <span class='ml-2 info__title'>{{ userData.PercentNormal }}%</span>
            </div>
            <div class='d-flex mt-3 justify-content-between align-items-center'>
              <span class='mr-2 info__bold font-gilroy'>Переплата по микрокредиту:</span>
              <span class='page__dotted'></span>
              <span class='ml-2 info__title'>{{ percentSum }}₸</span>
            </div>
            <div class='page__stars my-3' />
            <div class='d-flex mt-4 justify-content-between align-items-center'>
              <span class='mr-2 info__info font-gilroy'>ИТОГО К ВОЗВРАТУ:</span>
              <span class='page__dotted'></span>
              <span class='ml-2 info__title'>{{ result }}₸</span>
            </div>
            <BaseButton classes='mt-4' @click='giveToMoney'>
              Получить деньги
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InputRange from '@/components/common/InputRange/InputRange.vue'
import Header from '@/components/layout/Header/Header'
import { tokenRegister } from '@/assets/js/ls'

export default {
  components: { Header, InputRange },
  mixins: 'perms',
  computed: {
    ...mapGetters({
      user: 'auth/userData'
    }),
    isAuth() {
      return this.$store.getters['auth/isAuth']
    },
    percentSum(){
      return this.userData.SumDefault* (this.userData.PercentNormal * 0.01) * this.userData.DaysDefault;
    },
    result(){
      return this.userData.SumDefault + this.percentSum;
    }
  },
  data() {
    return {
      code: '',
      validations: {
        $dirty: false,
        $error: false,
        isValidPromoCode: false
      },
      userData: {
        'SumMin': 0,
        'SumMax': 0,
        'SumDefault': 0,
        'DaysMin': 0,
        'DaysMax': 0,
        'DaysDefault': 0,
        'PercentNormal': 0,
        'SumIncrementValue': 1000
      },
      isDesktop: false
    }
  },
  mounted() {
    if (!this.user.SumDefault) {
      this.$router.push('/')
    } else {
      this.userData = { ...this.user }
    }
    this.contentDisplay === 'desktop' ? this.isDesktop = true : this.isDesktop = false
    // this.$store.dispatch("pay/getClientRate")
  },
  methods: {
    sendPromoCode(value) {
      this.code = value
      if(value) {
        const isValidPromoCode = Math.round(Math.random())
        this.validations = {
          $dirty: true,
          $error: !isValidPromoCode,
          isValidPromoCode: !!isValidPromoCode
        }
        return
      }

      this.validations = {
        $dirty: false,
        $error: false,
        isValidPromoCode: false
      }
    },
    giveToMoney() {
      const onSuccess = (response) => {
        if (response.data.Success) {
          this.$router.push('/approved/select-card')
        }
        if (response.data.ErrorCode === 1) {
          this.$router.push({
            path: '/feedback',
            query: {
              creditDenied: true
            }
          })
        }
      }
      const token = tokenRegister.get() ? tokenRegister.get() : this.isAuth
      this.$requests.addVerificationRequest({
        options: {
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
        body: {
          sum: this.SumDefault,
          days: this.DaysDefault
        },
        onSuccess
      })
    }
  }
}
</script>


<style lang='scss' scoped>
.page {
  background-image: linear-gradient(45deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  min-height: 100vh;

  @media screen and (min-width: 900px) {
    background: url("assets/images/promo_icon.png") no-repeat 0 0/20%,
                url("assets/images/promo_icon_2.png") no-repeat 10% 100%/15%,
                url("assets/images/promo_icon_3.png") no-repeat 100% 70%/15%,
                linear-gradient(45deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
    min-height: 50vh;
    border-radius: 0 0 20px 20px;
  }
  &__inner-container {
    max-width: 450px;
    margin: 0 auto;
  }

  &--wrap {
    position: relative;
    max-width: 371px;

    @media (min-width: 900px) {
      max-width: 800px;
    }
  }

  &__item {
    position: absolute;
    right: 0;
    top: 20px;
    left: 0;
    line-height: 150%;

    @media (min-width: 900px) {
      top: 0;
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
    font-size: 4rem;
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
