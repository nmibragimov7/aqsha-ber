<template>
  <div class='py-3 bg-bodyBg'>
    <div class='container'>
      <div class='row py-4 align-items-stretch' :class="[{'my-5': isDesktop}, {'bg-info': !isDesktop}]">
        <template v-for='(card, index) in cards'>
          <div :key='index' class='col-12 col-lg-4 mb-4'>
            <div class="card__about p-3  ">
              <div>
                <img class='card__image'
                     :src='"~/assets/images/"+card.image+".png"'
                     :alt='card.title'/>
                <p class='card__title font-gilroy'>{{ card.title }}</p>
                <p class='card__text'>{{ card.description }}</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <div :class="{'container': isDesktop}">
      <div class='promotion__wrap' :class="{'my-5 py-4': isDesktop}">
        <div class="container">
          <div class='promotion py-4 d-flex align-items-center justify-content-between' :class="{'desktop':isDesktop}">
            <div class='promotion__block'>
              <p class='promotion__title m-0 font-gilroy'>Первый микрокредит под 0,1%</p>
              <div v-if="isDesktop" class="promotion__button mt-3">
                <BaseButton small next color='#FFF'>Подробнее</BaseButton>
              </div>
            </div>
            <div class="promotion__image-wrap">
              <div class="promotion__image">
                <img src='~/assets/images/pig-large.png'/>
              </div>
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
              <Card rounded classes='bg-white card__hands py-5 mt-2 h-100 justify-content-end'>
                <div class="info__get">
                  <img v-if='information.image === "get"' src="@/assets/images/get.png" class="w-100"
                       alt="qweqw">
                </div>
                <div class="info__repay">
                  <img v-if='information.image === "repay"' src="@/assets/images/repay.png" class=" w-100"
                       alt="qwqe">
                </div>
                <div class="px-4">
                  <p class='card__title font-gilroy'>{{ information.title }}</p>
                  <ul class='card__descriptions'>
                    <li v-for='(d, idx) in information.description' :key='idx'>{{ d }}</li>
                  </ul>
                </div>
                <div class="px-5 w-100">
                  <BaseButton :width='80' small next>
                    <nuxt-link style='text-decoration: none; color: #FFF;font-weight: 500' :to='information.path'>
                      Подробнее
                    </nuxt-link>
                  </BaseButton>
                </div>
              </Card>
            </div>
          </template>
        </div>
      </div>
      <div class="decoration" :class='{"mb-5": isDesktop}'>
        <div class="container pt-5">
          <h2 class='m-0 types__title font-gilroy'>Виды микрокредитов</h2>
          <div class='row'>
            <div v-for='(type, index) in types' :key='index' class='col-12 col-md-6' :class='{"mb-4": !isDesktop}'>
              <Card shadow="0px 4px 4px rgba(0, 0, 0, 0.25)" classes="pb-4" rounded bg='#FFF'>
                <div class="flex-grow-1">
                  <div class='types__header d-flex flex-column justify-content-center align-items-center'
                       :class='[{"types__header--first": index === 0}, {"types__header--last": index === 1}]'>
                    <p class='types__header--title mb-3 mt-0'>{{ type.header.title }}</p>
                    <p class='types__header--text m-0'>{{ type.header.text }}</p>
                  </div>
                  <div class='types__body mt-4 d-flex flex-column justify-content-center align-items-center'>
                    <p class='types__body--title font-gilroy m-0 mb-4'>{{ type.body.title }}</p>
                    <p class='types__body--text m-0 mb-4'>{{ type.body.text }}</p>
                  </div>
                </div>
                <div class="types__body w-100 mt-3">
                  <BaseButton :width='80' small next>
                    <nuxt-link style='text-decoration: none; color: #FFF' :to='type.path'>Подробнее</nuxt-link>
                  </BaseButton>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='promo__wrap py-5 company' :class='{"promo__desktop": isDesktop}'>
      <div class="container">
        <div class='row about align-items-center'>
          <div class="col-md-6 about__first-col">
            <h3 class='m-0 mb-5 about__title font-gilroy'>О компании</h3>
            <div class='about__text mx-auto mb-4'>
              <p class='m-0 mb-3'>
                Простой и надежный сервис для быстрого получения микрокредитов.
              </p>
              <p class="m-0 mb-3">
                Мы рядом, когда вам нужна помощь, чтобы хватило денег до зарплаты или на срочную покупку.
              </p>
              <p class="m-0"> Работаем честно, быстро и удобно: никаких скрытых комиссий, рассмотрение
                за минуту. Получить деньги можно на карту или наличными.</p>
              <div class='d-inline-flex mx-auto mt-4'>
                <NuxtLink to='/' class="mr-4">
                  <p class='about__link m-0'>Документы</p>
                </NuxtLink>
                <NuxtLink to='/'>
                  <p class='about__link m-0'>Контакты</p>
                </NuxtLink>
              </div>
            </div>
            <div class="about__button-first-col">
              <BaseButton classes="font-gilroy">ПОЛУЧИТЬ ДЕНЬГИ</BaseButton>
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
    <div class='container py-7' :class="{'bg-fag': !isDesktop}">
      <h2 class='m-0 about__title font-gilroy'>Частые вопросы</h2>
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

<style lang='scss' scoped>
.py-7 {
  padding-top: 5.5rem;
  padding-bottom: 6rem;
}

.card {
  &__hands {
    min-height: 420px;
    border-radius: 30px;
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

  &__text {
    max-width: 79%;
    margin: 0 auto;
  }

  &__descriptions {
    text-align: left;
    line-height: 150%;
  }

  &__button {
    background: #3A2784 !important;
  }
}

.hands {
  overflow: hidden;
  position: relative;
  z-index: 3;
  background: #F8F9F9;
  box-shadow: 0px 23px 33px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 30px 30px;

  @media screen and (min-width: 550px) {
    background: inherit;
    border-radius: 0;
    box-shadow: none;
    & > .row {
      margin-top: 30px;
    }
  }
}

.promotion {
  &__block {
    max-width: 45%;
  }

  position: relative;

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

  &__image-wrap {
    position: absolute;
    right: 0;
    top: 55%;
    transform: translateY(-50%);
  }

  &__image {
    max-width: clamp(100px, 24vh, 200px);

    & > img {
      width: 100%;
    }
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
    line-height: 2rem;
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
      font-size: clamp(16px, 6vh, 46px);
      line-height: 50px;

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
      background: linear-gradient(226.59deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
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

  &__first-col::v-deep {
    order: 1;
    text-align: center;
    @media (min-width: 768px) {
      order: 0;
      text-align: left;
    }
  }

  &__img {
    width: 80%;
    display: block;
    margin: 0 auto;
    //@media (min-width: 768px) {
    //  width: 100%;
    //}

    & > img {
      width: 100%;
    }
  }

  &__button {
    min-width: 300px;
    max-width: 400px;
    margin: -40px auto 0;
    display: none;
    @media (min-width: 768px) {
      display: block;
      width: 56%;
    }

    &-first-col {
      margin: 0 auto;
      width: 60%;
      @media (min-width: 768px) {
        display: none;
      }
    }
  }

  &__title {
    text-align: center;
    font-size: 46px;
    font-weight: 800;
    line-height: 2.5rem;
    margin-bottom: 6%;
  }

  &__text {
    max-width: 315px;
  }

  &__link {
    color: #FFF;
    font-weight: 600;
    text-decoration: underline;
  }
}

.company {
  //transform: translateY(-48px);
  margin-top: -48px;
  @media screen and (min-width: 675px) {
    transform: translateY(0);
    margin-top: 40px;
  }
}

.decoration {
  position: relative;

  &::before {
    content: "";
    background: url("/svg/promo_icon_6.png") no-repeat left top /contain;
    width:250px;
    height: 250px;
    display: inline-block;
    position: absolute;
    left:0;
    top:-135px;

    @media (min-width: 900px) {
      background: inherit;
    }
  }
}
</style>
