<template>
  <div class='page'>
    <Header logoSmall />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <FirstStep v-if='currentStep === 1'
                   :phone='form.phone'
                   :currentStep='currentStep'
                   :steps='steps'
                   @getCodeHandler='$modal.show("getMoney")'
                   @inputHandler='phoneHandler' />
      </div>
    </div>
    <GetMoneyModal :code='form.code'
                   @stepHandler='stepHandler'
                   @inputHandler='inputHandler' />
  </div>
</template>

<script>
import Header from '../components/layout/Header/Header'
import GetMoneyModal from '../components/common/modal/getMoneyModal/getMoneyModal'
import FirstStep from '../components/common/GetmoneySteps/FirstStep'

export default {
  name: 'get-money',
  components: { FirstStep, GetMoneyModal, Header },
  data() {
    return {
      steps: 6,
      currentStep: 1,
      form: {
        phone: null,
        code: ['', '', '', '']
      }
    }
  },
  methods: {
    inputHandler(value, index) {
      this.form.code[index] = value
    },
    getCodeHandler() {
      this.$modal.show('getMoney')
    },
    stepHandler() {
      this.currentStep += 1
      this.$modal.hide('getMoney')
    },
    phoneHandler(value) {
      this.form.phone = value
    }
  }
}
</script>

<style lang='scss' scoped>
.page {
  background: url("assets/images/money_1.svg") no-repeat 0 50%,
  url("assets/images/money_2.svg") no-repeat 100% 30%,
  url("assets/images/money_3.svg") no-repeat 0 10%,
  linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
  min-height: 70vh;
  border-radius: 0 0 20px 20px;

  &__wrap {
    position: relative;
  }

  &__body {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
  }
}
</style>
