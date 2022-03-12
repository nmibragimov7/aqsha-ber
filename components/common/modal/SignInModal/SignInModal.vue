<template>
  <modal name='signIn' :width='370' height='auto'>
    <div class='modal-signIn d-flex flex-column align-items-center'>
      <template v-if='!isSendCode'>
        <p class='m-0 mb-3 modal-signIn__title'>Личный кабинет</p>
        <BaseInput v-model='form.username'
                   placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _'
                   mask='+7 (# # #) # # # - # # - # #'
                   classes='username'
                   class='mb-3'/>
        <BaseButton classes='modal-signIn__button' @click='sendCodeHandler'>ВХОД</BaseButton>
        <p style='font-weight: 700'>Регистрация</p>
      </template>
      <template v-if='isSendCode'>
        <p class='m-0 mb-3 modal-signIn__title'>Введите код из СМС</p>
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
        <label class="d-flex justify-content-between align-items-center mb-3">
          <div v-for='(input, index) in form.code'
               :key='index'
               contenteditable='true'
               @input='inputHandler($event, index)'
               :ref='"input-" + index'
               class='code__input'>{{input}}</div>
        </label>
        <BaseButton classes='modal-signIn__button'>подтвердить</BaseButton>
        <p style='font-weight: 700'>Отправить еще раз</p>
      </template>
    </div>
  </modal>
</template>

<script>
import BaseInput from '../../../base/BaseInput/BaseInput'
import BaseButton from '../../../base/BaseButton/BaseButton'
export default {
  name: 'SignInModal',
  components: { BaseButton, BaseInput },
  data() {
    return {
      form: {
        username: "",
        code: "0000"
      },
      isSendCode: false
    }
  },
  methods: {
    inputHandler(event, index) {
      this.$refs["input-" + index][0].innerHTML = event.data;
      // this.form.code[index] = event.target.value
      // if(event.target.value.length > 1) {
      //   event.target.value = this.form.code[index];
      //   return;
      // }
      // this.form.code[index] = event.target.value;
    },
    sendCodeHandler() {
      if(this.form.username.length) this.isSendCode = true;
    }
  }
}
</script>

<style lang='scss'>
.modal-signIn {
  padding: 20px 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  &__title {
    font-weight: 800;
  }

  &__button {
    background: #3A2784 !important;
    color: #FFF !important;
  }
}

.code__input {
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
</style>
