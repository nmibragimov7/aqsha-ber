<template>
  <div class='code'>
    <img src='~/assets/images/close.svg'
         alt='Close'
         class='code--close'
         @click='close' />
    <p class='text-center m-0 mb-3 code__title'>Введите код из СМС</p>
    <!--        <div class='d-flex justify-content-between align-items-center mb-3'>-->
    <!--          <template v-for='(input, index) in form.code'>-->
    <!--            <div :key='index' class='mr-1 ml-1'>-->
    <!--              <label>-->
    <!--                <input-->
    <!--                  class='code__input'-->
    <!--                  :value='input'-->
    <!--                  @input="inputHandler($event, index)"-->
    <!--                />-->
    <!--              </label>-->
    <!--            </div>-->
    <!--          </template>-->
    <!--        </div>-->
    <label class='d-flex justify-content-between align-items-center mb-3'>
      <div v-for='(input, index) in code'
           :key='index'
           contenteditable='true'
           @input='inputHandler($event, index)'
           :ref='"input-" + index'
           class='code__input'>{{ input }}
      </div>
    </label>
    <BaseButton classes='code__button' @click='sendCode'>{{ btnText }}</BaseButton>
    <p class='text-center code__text'>Отправить еще раз</p>
  </div>
</template>

<script>
import BaseButton from '../../base/BaseButton/BaseButton'

export default {
  name: 'SendCode',
  props: {
    name: {
      type: String,
      default: ''
    },
    code: {
      type: Array
    },
    btnText: {
      type: String,
      default: ''
    }
  },
  components: { BaseButton },
  methods: {
    inputHandler(event, index) {
      this.$refs['input-' + index][0].innerHTML = event.data
      this.$emit('inputHandler', event.data, index)
      // this.form.code[index] = event.target.value
      // if(event.target.value.length > 1) {
      //   event.target.value = this.form.code[index];
      //   return;
      // }
      // this.form.code[index] = event.target.value;
    },
    sendCode() {
      switch (this.name) {
        case 'signIn':
          console.log('signIn')
          break
        case 'getMoney':
          this.$emit('stepHandler')
          break
      }
    },
    close() {
      switch (this.name) {
        case 'signIn':
          this.$modal.hide('signIn')
          break
        case 'getMoney':
          this.$modal.hide('getMoney')
          break
      }
    }
  }
}
</script>

<style lang='scss'>
.code {
  position: relative;

  &__title {
    font-weight: 800;
  }

  &__button {
    background: #3A2784 !important;
    color: #FFF !important;
  }

  &__input {
    color: #7080A9;
    font-weight: 800;
    font-size: 72px;
    background: rgba(162, 162, 201, 0.06);
    border: 1px solid rgba(162, 162, 201, 0.47);
    border-radius: 10px;
    border: 1px solid #A2A2C9;
    margin: 0 5px;
    box-sizing: border-box;
    width: 70px;
    height: auto;
    padding: 15px;
    outline: none;
  }

  &__text {
    font-weight: 700;
  }

  &--close {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
