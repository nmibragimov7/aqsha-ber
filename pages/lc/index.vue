<template>
  <PageWrap title='Личный кабинет'>
    <div class='page__header p-4'>
      <div class='row mb-2'>
        <div class='col-6'>
          <div class='profile__image h-100 w-100'></div>
        </div>
        <div class='col-6 p-0'>
          <p class='m-0 d-flex flex-column justify-content-between'>Иванов</p>
          <p class='m-0'>Иван</p>
          <p class='m-0'>Иванович</p>
          <p class='m-0'>№ 21312421</p>
          <p class='m-0'>ИИН 000 302 500 679</p>
        </div>
      </div>
      <div class='row mb-0'>
        <div class='col-6'>
          <p class='m-0'><b>Дата рождения:</b></p>
          <p class='m-0'>+ 777 200 28 77</p>
        </div>
        <div class='col-6'>
          <p class='m-0'><b>Пол:</b></p>
          <p class='m-0'>Мужской</p>
        </div>
        <div class='col-6'>
          <p class='m-0'><b>Телефон::</b></p>
          <p class='m-0'>28.07.2985</p>
        </div>
        <div class='col-6'>
          <p class='m-0'><b>E-mail:</b></p>
          <p class='m-0'>ten@mail.ru</p>
        </div>
      </div>
    </div>
    <template #page__footer>
      <BaseButton bg='#3A2784' color='#fff' classes='mt-3'>
        + новый микрокредит
      </BaseButton>
      <CreditHistory/>
      <div class='profile__block p-4 mt-4'>
        <BaseInput v-model='password'
                   class='mb-3'
                   classes="change__password"
                   type='password'
                   :placeholder='isPassExist ? "Старый пароль": "Пароль"' />
        <BaseInput v-if="isPassExist" v-model='newPassword'
                   class='mb-3'
                   type='password'
                   classes="change__password"
                   placeholder='Новый пароль' />
        <div class='d-flex justify-content-between mb-3'>
          <div v-for='num in 4' :key='num' :class="{'mr-2':num <4}">
            <div class='profile__level'/>
            <span class="profile__level-hint">Ненадежный</span>
          </div>
        </div>
        <p class='m-0 mb-3 text-center profile__description'>
          Должен состоять минимум из 8 символов и содержать
          хотя бы одну цифру, символ и заглавную букву.
          <br>
          <span class='profile__description--red'>Не используйте пробелы и кириллицу.</span>
        </p>
        <BaseButton classes='profile__button--blue'>Сохранить</BaseButton>
      </div>
    </template>
  </PageWrap>
</template>
<script>
import PageWrap from '@/components/common/PageWrap.vue'
import BaseInput from '@/components/base/BaseInput/BaseInput'
import BaseButton from '@/components/base/BaseButton/BaseButton'
import CreditHistory from '@/components/common/CreditHistory/CreditHistory'

export default {
  components: { CreditHistory, BaseButton, BaseInput, PageWrap },
  data() {
    return {
      password: null,
      newPassword: null,
      isPassExist:false
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  &__header{

  }
}

.profile {
  &__image {
    background-color: #C4C4C4;
  }

  &__block {
    background: #fff;
    border-radius: 15px;
    color: #322443;
    font-size: 18px;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
  }

  &__title {
    font-size: 26px;
    font-weight: 600;
  }

  &__line {
    border: 1px solid #D3D3E6;
  }

  &__text {
    font-size: 14px;
  }

  &__level {
    background: linear-gradient(89.77deg, #FF8D65 23.04%, #974ECD 99.94%);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 6px;
    &:nth-child(1){
      background: linear-gradient(90.12deg, #FF8D65 60%, #974ECD 85.86%);
    }
    &:nth-child(2){
      background: linear-gradient(90.12deg, #FF8D65 30%, #974ECD 85.86%);
    }
    &:nth-of-type(3){
      background: linear-gradient(90.12deg, #FF8D65 5%, #974ECD 85.86%);
    }
    &:nth-of-type(4){
      background: linear-gradient(90.12deg, #FF8D65 0%, #974ECD 85.86%);
    }
    &-hint{
      font-size:9px;
      color: #EB5757;
    }
  }

  &__description {
    font-size: 12px;
    line-height: 150%;
    color: #6F6FB0;

    &--red {
      color: #EB5757;
    }
  }
}
</style>
