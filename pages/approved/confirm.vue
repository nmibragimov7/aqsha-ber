<template>
  <div class='page'>
    <Header logo-small />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <div class='page__inner-container text-center page__info'>
          <h1 class='page__title mb-0'>Подписание договора</h1>
          <p class='mt-1'>
            Внимательно ознакомьтесь с условиями оформления вашего кредита
          </p>
        </div>
        <div class='page__list'>
          <ul class='page__inner-container p-4'>
            <li class='mb-4 d-flex justify-content-between align-items-center'>
              <b>Сумма микрокредита:</b>
              <span class='page__dotted'></span>
              <span class='ml-2 info__info'>000 000₸</span>
            </li>
            <li class='mb-4 d-flex justify-content-between align-items-center'>
              <b>Срок погашения:</b>
              <span class='page__dotted'></span>
              <span class='ml-2 info__info'>000 000₸</span>
            </li>
            <li class=' d-flex justify-content-between align-items-center'>
              <b>Сумма к погашению:</b>
              <span class='page__dotted'></span>
              <span class='ml-2 info__info'>000 000₸</span>
            </li>
          </ul>
        </div>
        <div class='page__action'>
          <p class='text-center  my-4 page__hint'>Нажимая кнопку “подтвердить” вы соглашаетесь <a href='/'>со всеми условиями</a>.</p>
          <BaseButton class='mb-2'>
            ПОСМОТРЕТЬ ДОГОВОР
          </BaseButton>
          <BaseButton bg='#3A2784' @click='confirm' color='#fff'>
            ПОДТВЕРДИТЬ
          </BaseButton>
        </div>
      </div>
    </div>
    <SendCodeModal :code='form.code'
                   text='ПОДТВЕРДИТЬ'
                   @stepHandler='stepHandler'
                   @inputHandler='inputHandler' />
  </div>
</template>
<script>
import Header from '@/components/layout/Header/Header'
import SendCodeModal from '@/components/common/modal/SendCodeModal/SendCodeModal'

export default {
  components: {
    SendCodeModal,
    Header
  },
  data() {
    return {
      form: {
        code: ''
      }
    }
  },
  methods: {
    confirm() {
      this.$modal.show('sendCode')
    },
    inputHandler(value) {
      this.form.code = value
    },
    stepHandler() {
      this.$modal.hide('sendCode')
      this.$router.push({
        path: '/feedback',
        query: {
          giveMoney: true
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.page {
  background-image: linear-gradient(45deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  min-height: 30vh;
  border-radius: 0 0 20px 20px;

  @media screen and (min-width: 600px) {
    background: url("/images/bg-on-anotherpage.png") no-repeat center / cover;
    min-height: 40vh;
  }

  &__inner-container {
    @media (min-width: 900px) {
      width: 55%;
      margin: 0 auto;
    }
  }

  &__wrap {
    position: relative;

    @media (min-width: 900px) {
      max-width: 800px;
    }
  }

  &__body {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
  }

  &__info {
    color: #fff;
  }

  &__title {
    font-size: 24px;
    font-weight: 500;
  }

  &__dotted {
    height: 8px;
    margin: 0 9px;
    flex-grow: 1;
    border-bottom: 2px dotted #000;
  }

  &__list {
    background: #fff;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
    border-radius: 15px;
    list-style: none;
    color: #322443;
    font-size: 18px;
    max-width: 450px;
    margin: 0 auto;

    @media (min-width: 900px) {
      max-width: 800px;
    }
  }

  &__hint {
    font-size: 12px;
    color: #322443;
    width: 80%;
    margin: 0 auto;

    & > a {
      color: #322443;
    }
  }

  &__action {
    max-width: 325px;
    margin: 0 auto;
  }
}


</style>
