<template>
  <div class='footer__wrap pb-5 pt-5' :class='{"footer__desktop": isDesktop}'>
    <div class='container'>
      <div class='footer row'>
        <div class="col-12 mb-4 footer__col col-md-6">
          <div class='footer__form d-flex flex-column align-items-center '>
            <div class="footer__form-text">
              <h3 class='m-0 mb-2'>Не нашли ответа на свой вопрос?</h3>
              <p class='m-0 mb-1'>Оставьте свои контактные данные, чтобы мы могли связаться с вами!</p>
            </div>
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
                       class='mb-4'
                       is-footer />
            <BaseButton :width="100" uppercase >Оставить заявку</BaseButton>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class='footer__contact row justify-content-between'>
            <div class='col-6 col-md-12 mb-4 d-flex justify-content-between p-0'>
              <div class="footer__item">
                <div>
                  <p class="my-0">РК, 0500004, г.Алматы</p>
                  <p class="my-0">ул. Тулебаева 38/61</p>
                </div>
              </div>
            </div>
            <div class='col-6 col-md-12 mb-4 d-flex justify-content-between p-0'>
              <div class="footer__item">
                <div>
                  <p class="my-0"><a class='footer__item--link' href="tel:+7 (727) 364 88 88 ">+7 (727) 364 88 88 </a></p>
                  <p class="my-0"><a class='footer__item--link' href="tel:+7 (707) 364 88 88">+7 (707) 364 88 88</a></p>
                  <p class="my-0"><a class='footer__item--link' href="mailto:info@akshaber.kz">info@akshaber.kz</a></p>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-12 mb-4 p-0">
              <div>
                <div class="d-flex flex-column">
                  <NuxtLink to='/documents' class='footer__item--link'>
                    <span>Документы</span>
                  </NuxtLink>
                  <NuxtLink to='/' class='footer__item--link'>
                    <span>Контакты</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-12 mb-4 p-0">
              <div>
                <NuxtLink to='/lc' class='footer__item--link'>
                  <span>Личный кабинет</span>
                </NuxtLink>
              </div>
            </div>
            <div class='col-12 mb-0 p-0'>
              <div class="footer__item">
                <p class="footer__item--text">
                  ТОО «МФО "Взаймы"» Лицензия № 02.21.0018.М. от 12 марта 2021 года, выданная Агентством РК по регулированию и развитию финансового рынка
                </p>
              </div>
            </div>
          </div>
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
      anything: "",
      isDesktop: null
    }
  },
  mounted() {
    this.isDesktop = this.contentDisplay === "desktop"
  },
}
</script>

<style lang='scss'>
.footer {
  color: #FFF;
  &__col{
    @media (min-width: 768px) {
      order: 1;
    }
  }
  &__wrap {
    background: url("/svg/promo-icon2.svg") no-repeat 0% 69%/40%,
                url("/svg/promo-icon4.svg") no-repeat 100% 5%/35%,
                url("/svg/promo-icon5.svg") no-repeat 85% 21%/14%,
                linear-gradient(45deg, #F17C85 0%, #a258c5 27.08%, #5D54AB 49.32%, #3854e3 85.59%);
  }

  &__desktop {
    border-top-left-radius: 33px;
    border-top-right-radius: 33px;
    background: url("/images/footer_desktop_group.png") no-repeat center/cover;
  }

  &__contact {
    margin: 0 auto;
    width: 85%;
  }

  &__form {
    margin: 0 auto;
    text-align: center;
    width: 79%;


    &--title {
      font-size: 24px;
      font-weight: 800;
      @media (min-width: 900px) {
        font-size: 48px;
        line-height: 130%;
      }
    }

    &-text {
        width:81%;
        & > h3{
          font-size: 27px;
          line-height: 2rem;
        }
    }

    &--button {
      box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.25);
    }
  }



  &__item {
    line-height: 24px;
    @media screen and (min-width: 768px) {
      line-height: 30px;
      font-size: 20px;
    }
    &--link {
      color: #FFF;
      text-decoration: none;
    }

    &--text {
      font-size: 11px;
      line-height: 18px;
    }
  }
}
</style>
