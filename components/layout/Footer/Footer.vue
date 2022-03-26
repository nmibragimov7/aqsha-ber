<template>
  <div class='footer__wrap'>
    <div class='container'>
      <div class='footer d-flex flex-column py-5 px-3'>
        <div class='footer__form d-flex flex-column align-items-center mb-4'>
          <h3 class='footer__form--title m-0 mb-4'>Не нашли ответа на свой вопрос?</h3>
          <p class='footer__form--text m-0 mb-4'>Оставьте свои контактные данные, чтобы мы могли связаться с вами!</p>
          <BaseInput v-model='name'
                     placeholder='Имя'
                     class='mb-3'
                     color="#fff"
                     is-footer />
          <BaseInput v-model='phone'
                     placeholder='+7 (_ _ _) _ _ _ - _ _ - _ _'
                     mask="+7 (###) ###-##-##"
                     color="#fff"
                     class='mb-3'
                     is-footer />
          <BaseInput v-model='anything'
                     color="#fff"
                     placeholder='Что-то еще?'
                     class='mb-5'
                     is-footer />
          <BaseButton classes='footer__form--button'>Оставить заявку</BaseButton>
        </div>
        <div class='footer__block'>
          <div class='footer__item d-flex justify-content-between'>
            <div>
              <p>РК, 0500004, г.Алматы</p>
              <p>ул. Тулебаева 38/61</p>
            </div>
            <div>
              <p>+7 (727) 364 88 88</p>
              <p>+7 (707) 364 88 88</p>
              <p>info@akshaber.kz</p>
            </div>
          </div>
          <div class='footer__item d-flex justify-content-between'>
            <div>
              <NuxtLink to='/' class='footer__item--link'>
                <p>Документы</p>
              </NuxtLink>
              <NuxtLink to='/' class='footer__item--link'>
                <p>Правовые акты</p>
              </NuxtLink>
            </div>
            <div>
              <NuxtLink to='/' class='footer__item--link'>
                <p>Личнй кабинет</p>
              </NuxtLink>
              <NuxtLink to='/' class='footer__item--link'>
                <p>Контакты</p>
              </NuxtLink>
            </div>
          </div>
          <p class='footer__item--text'>
            ТО «МФО "Взаймы"» Лицензия № 02.21.0018.М. от 12 марта 2021 года, выданная Агентством РК по регулированию и развитию финансового рынка
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseInput from '../../base/BaseInput/BaseInput'
import BaseButton from '../../base/BaseButton/BaseButton'
export default {
  name: 'Footer',
  components: { BaseButton, BaseInput },
  data() {
    return {
      name: "",
      phone: "",
      anything: ""
    }
  }
}
</script>

<style lang='scss'>
.footer {
  color: #FFF;
  @media (min-width: 900px) {
    flex-direction: row !important;
  }

  &__wrap {
    background: linear-gradient(60deg, #F17C85 0%, #a258c5 27.08%, #5D54AB 49.32%, #3854e3 85.59%);
  }

  &__form {
    margin: 0 auto;
    text-align: center;
    @media (min-width: 900px) {
      order: 2;
    }

    &--title {
      font-size: 24px;
      font-weight: 800;
      @media (min-width: 900px) {
        font-size: 48px;
      }
    }

    &--text {
      @media (min-width: 900px) {
        font-size: 20px;
      }
    }

    &--button {
      box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.25);
    }
  }

  &__block {
    @media (min-width: 900px) {
      order: 1;
    }
  }

  &__item {
    font-size: 18px;
    @media (min-width: 900px) {
      flex-direction: column;
    }

    &--link {
      color: #FFF;
      text-decoration: none;
    }

    &--text {
      font-size: 11px;
    }
  }
}
</style>
