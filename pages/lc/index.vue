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
      <div class='profile__block p-4 mt-4'>
        <h2 class='profile__title text-center'>Кредитная история</h2>
        <div class='profile__line'></div>
        <div>
          <div class='row'>
            <div class='col-4 d-inline-flex align-items-center profile__text'><b>152 000тг</b></div>
            <div class='col-4 d-inline-flex align-items-center profile__text'><span>до 20.02.15</span></div>
            <div class='col-4 d-inline-flex align-items-center profile__text'>
              <p class='mr-2'>Текущий</p>
              <img src='/svg/info__ic.svg' alt=''>
            </div>
          </div>
          <div class='row'>
            <div class='col-6'>
              <BaseButton classes='profile__button profile__button--blue'>продлить</BaseButton>
            </div>
            <div class='col-6'>
              <BaseButton classes='profile__button'>погасить</BaseButton>
            </div>
          </div>
        </div>
      </div>
      <div class='profile__block p-4 mt-4'>
        <BaseInput v-model='password'
                   class='mb-3'
                   type='password'
                   placeholder='Старый пароль' />
        <BaseInput v-model='newPassword'
                   class='mb-3'
                   type='password'
                   placeholder='Новый пароль' />
        <div class='d-flex justify-content-between mb-3'>
          <div v-for='num in 4' :key='num' class='profile__level'></div>
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

export default {
  components: { BaseButton, BaseInput, PageWrap },
  data() {
    return {
      password: null,
      newPassword: null
    }
  }
}
</script>

<style lang='scss'>
.page {
  &__header {

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

  &__button {
    font-size: 11px !important;

    &--blue {
      background: #3A2784 !important;
      color: #FFF !important;
    }
  }

  &__level {
    background: linear-gradient(89.77deg, #FF8D65 23.04%, #974ECD 99.94%);
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 6px;
    margin-right: 12px;
    width: 25%;

    &:last-child {
      margin-right: 0;
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
