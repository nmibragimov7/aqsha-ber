<template>
  <div class='py-3 mt-5 bg-bodyBg'>
    <div class='container'>
      <div class='row align-items-stretch' :class="{'my-5':isDesktop}">
        <template v-for='(card, index) in cards'>
          <div :key='index' class='col-12 col-lg-4 mb-4'>
            <div class="card__about p-3  ">
              <div>
                <img class='card__image'
                     :src='"~/assets/images/"+card.image+".png"'
                     :alt='card.title'/>
                <p class='card__title'>{{ card.title }}</p>
                <p class='card__description'>{{ card.description }}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div :class="{'container':isDesktop}">
      <div class='promotion__wrap' :class="{'my-5 py-4':isDesktop}">
        <div class="container">
          <div class='promotion d-flex align-items-center justify-content-between' :class="{'desktop':isDesktop}">
            <div class='promotion__block'>
              <p class='promotion__title m-0'>Первый микрокредит под 0,1%</p>
              <div v-if="isDesktop" class="promotion__button mt-3">
                <BaseButton small next color='#FFF'>Подробнее</BaseButton>
              </div>
            </div>
            <div class="promotion__image">
              <img class='w-100' src='~/assets/images/pig-large.png'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='bg-bodyBg'>
      <div class="hands pb-4 container">
        <div class='row'>
          <template v-for='(information, index) in infos'>
            <div :key='index' class='col-12 mb-4 col-md-6'>
              <Card classes='bg-white card__hands py-5 h-100 justify-content-end'>
                <div class="info__get">
                  <img v-if='information.image === "get"' src="@/assets/images/get.png" class="w-100"
                       alt="qweqw">
                </div>
                <div class="info__repay">
                  <img v-if='information.image === "repay"' src="@/assets/images/repay.png" class=" w-100"
                       alt="qwqe">
                </div>
                <div class="px-4">
                  <p class='card__title'>{{ information.title }}</p>
                  <ul class='card__descriptions'>
                    <li v-for='(d, idx) in information.description' :key='idx'>{{ d }}</li>
                  </ul>
                </div>
                <div class="px-5 w-100">
                  <BaseButton next>
                    <nuxt-link style='text-decoration: none; color: #FFF' :to='information.path'>ПОДРОБНЕЕ</nuxt-link>
                  </BaseButton>
                </div>
              </Card>
            </div>
          </template>
        </div>
      </div>
      <div class="container pt-5">
        <h2 class='m-0 types__title'>Виды микрокредитов</h2>
        <div class='row'>
          <div v-for='(type, index) in types' :key='index' class='col-12 col-md-6 mb-4'>
            <Card classes="pb-4" rounded>
              <div class="flex-grow-1">
                <div class='types__header d-flex flex-column justify-content-center align-items-center'
                     :class='[{"types__header--first": index === 0}, {"types__header--last": index === 1}]'>
                  <p class='types__header--title mb-3 mt-0'>{{ type.header.title }}</p>
                  <p class='types__header--text m-0'>{{ type.header.text }}</p>
                </div>
                <div class='types__body mt-4 d-flex flex-column justify-content-center align-items-center'>
                  <p class='types__body--title m-0 mb-2'>{{ type.body.title }}</p>
                  <p class='types__body--text m-0'>{{ type.body.text }}</p>
                </div>
              </div>
              <div class="types__body w-100 mt-3">
                <BaseButton small classes="py-3" next>
                  <nuxt-link style='text-decoration: none; color: #FFF' :to='type.path'>ПОДРОБНЕЕ</nuxt-link>
                </BaseButton>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <div class='promo__wrap mb-5 py-5 company'>
      <div class="container">
        <div class='row about align-items-center'>
          <div class="col-md-6 about__first-col">
            <h3 class='m-0 mb-4 about__title'>О компании</h3>
            <p class='m-0 mb-1'>Простой и надежный сервис для быстрого получения микрокредитов.
            </p>
            <p class="my-2">
              Мы рядом, когда вам нужна помощь, чтобы хватило денег до зарплаты или на срочную покупку.
            </p>
            <p class="my-2"> Работаем честно, быстро и удобно: никаких скрытых комиссий, рассмотрение
              за минуту. Получить деньги можно на карту или наличными.</p>
            <div class='d-inline-flex'>
              <NuxtLink to='/' class="mr-4">
                <p class='about__link'>Документы</p>
              </NuxtLink>
              <NuxtLink to='/'>
                <p class='about__link'>Контакты</p>
              </NuxtLink>
            </div>
            <div class="about__button-first-col">
              <BaseButton>ПОЛУЧИТЬ ДЕНЬГИ</BaseButton>
            </div>
          </div>
          <div class="col-md-6">
            <NuxtLink to='/' class='about__img'>
              <img src='/images/large_logo.png' alt='About'/>
            </NuxtLink>
            <div class="about__button">
              <BaseButton>ПОЛУЧИТЬ ДЕНЬГИ</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='container mb-5'>
      <h2 class='m-0 types__title'>Частые вопросы</h2>
      <template v-for='(faq, index) in faqs'>
        <Accordion :key='index'
                   :active-index='activeFaqIndex'
                   :index='index'
                   :question='faq.question'
                   :answer='faq.answer'
                   @faqHandler='faqHandler'/>
      </template>
    </div>
  </div>
</template>

<script>
import {cards, infos, types} from "../fixstures/cards"
import {faqs} from "../fixstures/accordions"
import Card from "../components/common/Card/Card"
import BaseButton from "../components/base/BaseButton/BaseButton"
import Accordion from "../components/common/Accordion/Accordion"

export default {
  components: {Accordion, BaseButton, Card},
  layout: "landing",
  data() {
    return {
      cards,
      infos,
      types,
      faqs,
      activeFaqIndex: null,
      isDesktop: false
    }
  },
  mounted() {
    this.isDesktop = this.contentDisplay === "desktop"
  },
  methods: {
    faqHandler(index) {
      if (index === this.activeFaqIndex) {
        this.activeFaqIndex = null;
        return;
      }
      this.activeFaqIndex = index;
    }
  },
}
</script>

<style lang='scss'>

.card {
  &__hands {
    min-height: 460px;
  }

  &__about {
    text-align: center;
    position: relative;
    z-index: 10;
    cursor: pointer;
    background: transparent;
    @media (min-width: 550px) {
      margin-bottom: 0;
      box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
      border-radius: 30px;
      height: 100%;
      background: #fff;
      transition: all 0.4s;
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  @media screen and (min-width: 550px) {
    margin-bottom: 30px;
    overflow: hidden;
  }

  &__image {
    display: none;
    @media (min-width: 900px) {
      display: block;
      max-width: 150px;
      margin: 0 auto 20px;
    }
  }

  &__title {
    font-size: 30px;
    font-weight: 800;
    margin: 10px 0;
  }

  &__description {
    font-size: 20px;
  }

  &__descriptions {
    text-align: left;
    font-size: 20px;
    line-height: 150%;
  }

  &__button {
    background: #3A2784 !important;
  }
}

.hands {
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
  overflow: hidden;
  background: #fff;
  @media screen and (min-width: 550px) {
    background: transparent;
    & > .row {
      margin-top: 30px;
    }
  }
}

.promotion {
  &.desktop {
    max-width: 65%;
    margin: 0 auto;
  }

  &__wrap {
    background: linear-gradient(224.25deg, #FFDF11 31.92%, #FF8D65 90.72%);
    margin: 0 auto;
    position: relative;
    z-index: 20;
    @media (min-width: 900px) {
      border-radius: 25px;
    }
  }

  &__image {
    max-width: 100px;
    transform: scale(1.75);
  }

  &__title {
    font-size: 34px;
    font-weight: 800;
    line-height: 100%;
    @media (min-width: 900px) {
      margin-bottom: 30px !important;
    }
  }

  &__button {
    max-width: 55%;
  }
}

.info {
  background: #fff;

  &__get, &__repay {
    //background: url("assets/images/get.png") 0% 0% no-repeat !important;
    //@media (min-width: 900px) {
    //  background: url("assets/images/get-large.png") 0% 0% no-repeat !important;
    //  background-position: -20% 0% !important;
    //}
    position: absolute;
    top: 0;
  }

  &__get {
    left: -20px;
    right: 33%;
  }

  &__repay {
    right: -20px;
    left: 27%;
  }

  @media screen and (min-width: 550px) {
    &__get {
      left: -20px;
      transform: rotate(50deg);
      top: -12%;
      right: auto;
      width: 346px;
    }
    &__repay {
      transform: rotate(-50deg);
      top: -15%;
      right: auto;
      width: 346px;
    }
  }
}

.types {
  &__item {
    background: #FFFFFF;
    box-shadow: 0 4px 4px rgb(0, 0, 0, 0.2);
    border-radius: 10px;
    @media screen and (min-width: 550px) {
      background: transparent;
      & > .row {
        margin-bottom: 30px;
      }
    }
  }

  &__title {
    text-align: center;
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 6% !important;
    @media (min-width: 900px) {
      font-size: min(7.5vh, 60px);
    }
  }

  &__header {
    width: 100%;
    padding: 28px 0;

    &--title {
      font-weight: 800;
      font-size: 46px;

    }

    &--text {
      font-size: 24px;
    }

    &--first {
      background: linear-gradient(226.59deg, #FFDF11 27.08%, #FF8D65 112.49%);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
      border-radius: 10px 10px 0px 0px;
    }

    &--last {
      background: linear-gradient(226.59deg, #FF8D65 27.08%, #3A2784 112.49%);
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
      border-radius: 10px 10px 0px 0px;
      color: #FFF;
    }
  }

  &__body {
    max-width: 80%;
    margin: 0 auto;

    &--title {
      font-size: 26px;
      font-weight: 800;

    }

    &--text {
      @media (min-width: 900px) {
        font-size: 19px;
      }
    }
  }
}

.about {
  color: #FFF;
  &__first-col{
    order:1;
    text-align: center;
    @media (min-width: 768px){
      order:0;
      text-align: left;
    }
  }

  &__img {
    width:50%;
    display: block;
    margin: 0 auto;
    @media (min-width: 768px){
      width:100%;
    }
    & > img {
      width: 100%;
    }
  }

  &__button {
    min-width: 300px;
    max-width: 400px;
    margin: -40px auto 0;
    display: none;
    @media (min-width: 768px){
      display: block;
    }
    &-first-col{
      @media (min-width: 768px){
        display: none;
      }
    }
  }

  &__title {
    font-size: 46px;
    font-weight: 800;
  }

  &__link {
    color: #FFF;
    font-weight: bold;
    text-decoration: underline;
  }
}

.company {
  transform: translateY(-48px);
  @media screen and (min-width: 675px) {
    transform: translateY(0);
    margin-top: 40px;
  }
}
</style>
