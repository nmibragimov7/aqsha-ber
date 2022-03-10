<template>
  <modal name='signIn' :width='370' :height='240'>
    <div class='modal-signIn d-flex flex-column align-items-center'>
      <p class='m-0 mb-3 modal-signIn__title'>Личный кабинет</p>
      <BaseInput v-model='username'
                 placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _'
                 classes='signIn'
                 class='mb-3'/>
      <BaseButton classes='modal-signIn__button'>ВХОД</BaseButton>
      <p style='font-weight: 700'>Регистрация</p>
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
      username: ""
    }
  }
}
</script>

<style lang='scss'>
.modal-signIn {
  padding: 20px 30px;

  &__title {
    font-weight: 800;
  }

  &__button {
    background: #3A2784 !important;
    color: #FFF !important;
  }
}
</style>
