<template>
  <modal name='signIn' :width='370' height='auto'>
    <div class='modal-signIn d-flex flex-column align-items-center'>
      <template v-if='!isSendCode'>
        <p class='m-0 mb-3 modal-signIn__title'>Личный кабинет</p>
        <BaseInput v-model='form.username'
                   placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _'
                   mask='+7 (# # #) # # # - # # - # #'
                   classes='username'
                   class='mb-3' />
        <BaseButton classes='modal-signIn__button'
                    @click='sendCodeHandler'>ВХОД
        </BaseButton>
        <p style='font-weight: 700'>Регистрация</p>
      </template>
      <template v-if='isSendCode'>
        <SendCode name='signIn'
                  :code='form.code'
                  btnText='подтвердить'
                  @sendCode='sendCode'
                  @inputHandler='inputHandler' />
      </template>
    </div>
  </modal>
</template>

<script>
import BaseInput from '../../../base/BaseInput/BaseInput'
import BaseButton from '../../../base/BaseButton/BaseButton'
import SendCode from '../../SendCode/SendCode'

export default {
  name: 'SignInModal',
  components: { SendCode, BaseButton, BaseInput },
  data() {
    return {
      form: {
        username: '',
        code: ''
      },
      isSendCode: false
    }
  },
  methods: {
    sendCodeHandler() {
      if (this.form.username.length) this.isSendCode = true
    },
    inputHandler(value) {
      this.form.code = value
    },
    sendCode() {
      this.$store.commit('auth/setAuth', true)
      this.$modal.hide('signIn')
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
</style>
