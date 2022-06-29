<template>
  <div class="page">
    <Header logoSmall/>
    <div class="container page__wrap">
      <div class="page__body px-4">
        <h1 class="text-center page__title mb-3">Способы погашения</h1>
        <ul v-if="!!creditId" class='page__inner-container page__list p-3 font-default'>
          <li class='mb-4 d-flex justify-content-between align-items-center'>
            <b>Сумма микрокредита:</b>
            <span class='page__dotted'></span>
            <span class='ml-2 info__info'>000 000₸</span>
          </li>
          <li class='d-flex justify-content-between align-items-center'>
            <b>Дата погашения:</b>
            <span class='page__dotted'></span>
            <span class='ml-2 info__info'>дд.мм.гг</span>
          </li>
        </ul>
        <div class="page__list pt-2 pb-2 mb-4 px-2">
          <div class="d-flex align-items-center">
            <div class="img__wrap" style="width: 32%">
              <img style="width: 100px" src="/svg/pay-cards.svg" alt="" class="img">
            </div>
            <h3 class="text-center m-0 ">Банковская карта</h3>
          </div>

          <ol class="mb-4">
            <li class="pl-1">зайдите в личный кабинет</li>
            <li class="pl-1">выберите вкладку кредита и нажмите «Погасить»</li>
            <li class="pl-1"> выберите способ «Банковская карта»</li>
            <li class="pl-1">выберите нужную карту или добавьте новую</li>
          </ol>
        </div>
        <div class="page__list pt-3 pb-3 mb-4 px-3">
          <div class="d-flex align-items-center">
            <div class="img__wrap" style="width: 25%">
              <img src="/svg/kazpochta.svg" alt="" class="img" style="width: 75px">
            </div>
            <h3 class="text-center m-0">Наличными в АО «Казпочта»</h3>
          </div>
          <ol class="mb-2 mt-0">
            <li class="pl-1">придите в почтовое отделение</li>
            <li class="pl-1">сообщите оператору свой ИИН</li>
            <li class="pl-1">подтвердите сумму погашения</li>
            <li class="pl-1">внесите необходимую сумму погашения</li>
          </ol>
        </div>

<!--        3-->
        <div class="page__list pt-3 pb-3 mb-4 px-3">
          <div class="d-flex align-items-center">
            <div class="img__wrap" style="width: 28%">
              <img src="/svg/qiwi-wallet.svg" alt="" class="img" style="width: 75px">
            </div>
            <h3 class="m-0">Через терминалы и QIWI-кошелек</h3>
          </div>
          <ol class="mb-2 mt-0">
            <li class="pl-1">выберите в терминале раздел «Погашение кредитов/фин.услуги» /«МКО и МФО»/Ақша Бер</li>
            <li class="pl-1"> выберите «Погашение микрокредита»</li>
            <li class="pl-1"> введите ИИН</li>
            <li class="pl-1"> проверьте данные и подтвердите правильность</li>
            <li class="pl-1">  внесите необходимую сумму и нажмите «Оплатить»</li>
          </ol>
        </div>

        <div class="page__list pt-2 pb-2 mb-4 px-3">
          <div class="d-flex align-items-center">
            <div class="img__wrap" style="width: 25%">
              <img src="/svg/kassa.svg" alt="" class="img" style="width: 75px">
            </div>
            <h3 class="text-center m-0">Через терминалы Касса 24</h3>
          </div>
          <ol class="mb-2 mt-0">
            <li class="pl-1">выберите в терминале раздел «Оплата услуг»/ «Финансовые организации» /«МФО и МКО»/Ақша Бер</li>
            <li class="pl-1"> выберите «Погашение микрокредита»</li>
            <li class="pl-1"> введите номер телефона</li>
            <li class="pl-1"> внесите необходимую сумму и нажмите «Оплатить»</li>
          </ol>
        </div>

      <div style="height: 150px"/>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Header from "@/components/layout/Header/Header";

export default {
  components: {
    Header
  },
  data() {
    return {
      creditId: null
    }
  },
  computed: {
    ...mapGetters({
      isAuth: "auth/isAuth"
    })
  },
  methods: {
    goToMain() {
      this.$router.push("/")
    }
  },
  mounted() {
    this.creditId = this.$route.query.id
  }
}
</script>
<style scoped lang="scss">
.page {
  background-image: linear-gradient(120deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  min-height: 25vh;
  border-radius: 0 0 20px 20px;

  &__wrap {
    position: relative;
  }

  &__body {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    padding-bottom: 100px;
  }

  &__title {
    margin-top: 0;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
  }

  &__list {
    background: #fff;
    border-radius: 15px;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
    color: #322443;

    & li {
      margin-bottom: 0;
    }
  }
}

.page__dotted {
  height: 1px;
  flex-grow: 1;
  border-bottom: 3px dotted #000;
  margin: 0 5px;
}

.img {
  &__wrap {
    display: flex;
    align-items: center;
    height: 53px;
  }

}
</style>
