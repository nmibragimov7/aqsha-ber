<template>
  <modal name='signIn' :width='370' height='auto'>
    <div class='modal-signIn d-flex flex-column align-items-center'>
      <template v-if='!isSendCode'>
        <p class='m-0 mb-3 modal-signIn__title'>Личный кабинет</p>
        <BaseInput v-model='form.phone'
                   placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _'
                   mask='+7 (# # #) # # # - # # - # #'
                   :hasError='$v.form.$error'
                   class='mb-3' />
        <BaseInput v-model='form.password'
                   type='password'
                   class='mb-3' />
        <BaseButton classes='modal-signIn__button'
                    :disabled='$v.form.$error'
                    @click='sign'>ВХОД
        </BaseButton>
        <p style='font-weight: 700'>Регистрация</p>
      </template>
      <template v-if='isSendCode'>
        <SendCode name='signIn'
                  :code='form.code'
                  btn-text='подтвердить'
                  @sendCode='sendCode'
                  @inputHandler='inputHandler' />
      </template>
    </div>
  </modal>
</template>

<script>
import { mapState } from 'vuex'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

import BaseInput from '../../../base/BaseInput/BaseInput'
import BaseButton from '../../../base/BaseButton/BaseButton'
import SendCode from '../../SendCode/SendCode'
import { cleanNumber } from '../../../../helpers/maskUtils'
import { tokenLs } from '../../../../assets/js/ls'

export default {
  name: 'SignInModal',
  components: { SendCode, BaseButton, BaseInput },
  data() {
    return {
      form: {
        phone: '',
        code: '',
        password: ''
      },
      isSendCode: false
    }
  },
  computed: {
    ...mapState({
      isLoaded: (state) => state.auth.loaded
    })
  },
  validations: {
    form: {
      phone: {
        required,
        minLength: minLength(28),
        maxLength: maxLength(28)
      }
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
      this.$requests.login({
        body: {
          phone: cleanNumber(this.form.username),
          password: this.form.code
        },
        options: {},
        onStart: () => {
          this.isLoaded = true
        },
        onSuccess: (data) => {
          this.$store.commit('auth/setAuth', true)
          this.$modal.hide('signIn')
        },
        onError: (e) => {
        },
        onFinally: () => {
          this.isLoaded = false
        }
      })
    },
    sign() {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.$requests.login({
          body: {
            phone: cleanNumber(this.form.phone),
            password: this.form.password
          },
          options: {},
          onStart: () => {
            this.$store.commit('auth/start')
          },
          onSuccess: (response) => {
            if (response.data.Success) {
              tokenLs.save(response.data.Data)
              this.$store.commit('auth/setAuth', response.data.Data)
              this.$modal.hide('signIn')
            }
          },
          onError: (e) => {
          },
          onFinally: () => {
            this.$store.commit('auth/end')
          }
        })
      }
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
