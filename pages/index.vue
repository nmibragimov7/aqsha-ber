<template>
  <div class='py-3 mt-5'>
    <div class='container'>
      <div class='row align-items-stretch'>
        <template v-for='(card, index) in cards'>
          <div :key='index' class='col-12 col-lg-4'>
            <Card>
              <img class='card__image'
                   :src='"~/assets/images/"+card.image+".png"'
                   :alt='card.title' />
              <p class='card__title'>{{ card.title }}</p>
              <p class='card__description'>{{ card.description }}</p>
            </Card>
          </div>
        </template>
      </div>
    </div>
    <div class='promotion__wrap'>
      <div class='promotion'>
        <div class='promotion__block'>
          <p class='promotion__title m-0'>Первый микрокредит под 0,1%</p>
          <BaseButton classes='promotion__button' color='#FFF'>Подробнее</BaseButton>
        </div>
        <img class='promotion__image' src='~/assets/images/pig.png' />
        <img class='promotion__image--large' src='~/assets/images/pig-large.png' />
      </div>
    </div>
    <div class='container'>
      <div class='row align-items-stretch'>
        <template v-for='(information, index) in infos'>
          <div :key='index' class='col-12 col-lg-6'>
            <Card classes='info'
                  :class='[{"info__first": information.image === "get"}, {"info__last": information.image === "repay"}]'>
              <p class='card__title'>{{ information.title }}</p>
              <ul class='card__descriptions'>
                <li v-for='(d, idx) in information.description' :key='idx'>{{ d }}</li>
              </ul>
              <BaseButton classes='card__button'>
                <nuxt-link style='text-decoration: none; color: #FFF' :to='information.path'>ПОДРОБНЕЕ</nuxt-link>
              </BaseButton>
            </Card>
          </div>
        </template>
      </div>
      <h2 class='m-0 types__title'>Виды микрокредитов</h2>
      <div class='row align-items-stretch'>
        <template v-for='(type, index) in types'>
          <div :key='index' class='col-12 col-lg-6'>
            <Card classes='p-0 types__item'>
              <div class='types__header d-flex flex-column justify-content-center align-items-center'
                          :class='[{"types__header--first": index === 0}, {"types__header--last": index === 1}]'>
                <p class='types__header--title m-0'>{{type.header.title}}</p>
                <p class='types__header--text m-0'>{{type.header.text}}</p>
              </div>
              <div class='types__body d-flex flex-column justify-content-center align-items-center'>
                <p class='types__body--title m-0 mb-4'>{{type.body.title}}</p>
                <p class='types__body--text m-0 mb-4'>{{type.body.text}}</p>
                <BaseButton classes='card__button' :width='60'>
                  <nuxt-link style='text-decoration: none; color: #FFF' :to='type.path'>ПОДРОБНЕЕ</nuxt-link>
                </BaseButton>
              </div>
            </Card>
          </div>
        </template>
      </div>
    </div>
    <div class='promo__wrap' style='border-radius: 33px'>
      <div class='container d-flex flex-column align-items-center about'>
        <NuxtLink to='/' class='about__img'>
          <img src='@/assets/images/logo-large.svg' alt='About' />
        </NuxtLink>
        <h3 class='m-0 mb-3 about__title'>О компании</h3>
        <p class='m-0 mb-3'>Простой и надежный сервис для быстрого получения микрокредитов.
          <br>
          <br>
          Мы рядом, когда вам нужна помощь, чтобы хватило денег до зарплаты или на срочную покупку.
          <br>
          <br>
          Работаем честно, быстро и удобно: никаких скрытых комиссий, рассмотрение
          за минуту. Получить деньги можно на карту или наличными.
        </p>
        <div class='d-flex justify-content-around align-items-center w-100 mb-3'>
          <NuxtLink to='/'>
            <p class='about__link'>Документы</p>
          </NuxtLink>
          <NuxtLink to='/'>
            <p class='about__link'>Контакты</p>
          </NuxtLink>
        </div>
        <BaseButton classes='mb-4'>ПОЛУЧИТЬ ДЕНЬГИ</BaseButton>
      </div>
    </div>
    <div class='container mb-5'>
      <h2 class='m-0 types__title mt-5'>Частые вопросы</h2>
      <template v-for='(faq, index) in faqs'>
        <Accordion :key='index'
                   :activeIndex='activeFaqIndex'
                   @faqHandler='faqHandler'
                   :index='index'
                   :question='faq.question'
                   :answer='faq.answer'/>
      </template>
    </div>
  </div>
</template>

<script>
import { cards, infos, types } from '../fixstures/cards'
import { faqs } from '../fixstures/accordions'
import Card from '../components/common/Card/Card'
import BaseButton from '../components/base/BaseButton/BaseButton'
import Accordion from '../components/common/Accordion/Accordion'

export default {
  components: { Accordion, BaseButton, Card },
  layout: 'landing',
  data() {
    return {
      cards,
      infos,
      types,
      faqs,
      activeFaqIndex: null
    }
  },
  methods: {
    faqHandler(index) {
      if(index === this.activeFaqIndex) {
        this.activeFaqIndex = null;
        return;
      }
      this.activeFaqIndex = index;
    }
  }
}
</script>

<style lang='scss'>
.row {
  margin-bottom: 10%;
  @media (min-width: 900px) {
    margin-bottom: 5%;
  }
}

.card {
  &__image {
    display: none;
    @media (min-width: 900px) {
      display: block;
      margin-bottom: 40px;
    }
  }

  &__title {
    font-size: 26px;
    font-weight: 800;
    margin-bottom: 15px;
  }

  &__description {
    font-size: 20px;
    @media (min-width: 900px) {
      margin-bottom: 40px;
    }
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

.promotion {
  padding: 15px 0;
  max-width: 371px;
  margin: 0 auto;
  @media (min-width: 900px) {
    padding: 30px 0;
    width: 100%;
    max-width: 100%;
    margin: 0;
  }

  &__wrap {
    background: linear-gradient(224.25deg, #FFDF11 31.92%, #FF8D65 90.72%);
    margin: 0 auto 10% auto;
    position: relative;
    @media (min-width: 900px) {
      max-width: 1218px;
      border-radius: 25px;
      margin-bottom: 5%;
    }
  }

  &__block {
    width: 60%;
    @media (min-width: 900px) {
      width: 35%;
      margin-left: 25%;
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
    display: none;
    @media (min-width: 900px) {
      background: #3A2784 !important;
      display: block;
      width: 60% !important;
    }
  }

  &__image {
    position: absolute;
    right: 0;
    top: -25%;
    @media (min-width: 900px) {
      display: none;
    }

    &--large {
      display: none;
      @media (min-width: 900px) {
        position: absolute;
        left: 60%;
        top: -50px;
        display: block;
      }
    }
  }
}

.info {
  padding: 55% 10% 8% 10% !important;
  @media (min-width: 900px) {
    padding: 50% 10% 8% 10% !important;
  }

  &__first {
    background: url("assets/images/get.png") 0% 0% no-repeat !important;
    @media (min-width: 900px) {
      background: url("assets/images/get-large.png") 0% 0% no-repeat !important;
      background-position: -20% 0% !important;
    }
  }

  &__last {
    background: url("assets/images/repay.png") 100% 0% no-repeat !important;
    @media (min-width: 900px) {
      background: url("assets/images/repay-large.png") 0% 0% no-repeat !important;
      background-position: 20% 0% !important;
    }
  }
}

.types {
  &__item {
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  &__title {
    text-align: center;
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 6% !important;
    @media (min-width: 900px) {
      font-size: 64px;
    }
  }

  &__header {
    width: 100%;
    padding: 30px 0;

    &--title {
      font-weight: 800;
      font-size: 46px;
      @media (min-width: 900px) {
        font-size: 72px;
      }
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
    padding: 30px 0;
    @media (min-width: 900px) {
      padding: 50px 0;
    }

    &--title {
      font-size: 26px;
      font-weight: 800;
      @media (min-width: 900px) {
        font-size: 42px;
      }
    }

    &--text {
      @media (min-width: 900px) {
        font-size: 20px;
      }
    }
  }
}

.about {
  color: #FFF;
  text-align: center;
  padding: 20px 45px;
  margin-bottom: 8%;
  @media (min-width: 900px) {
    margin-bottom: 5%;
  }

  &__img {
    max-width: 300px;

    & > img {
      width: 100%;
    }
  }

  &__title {
    font-size: 46px;
    font-weight: 800;
  }

  &__link {
    color: #FFF;
    text-decoration: underline;
  }
}
</style>
