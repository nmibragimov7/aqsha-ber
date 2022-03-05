<template>
  <div>
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
            <Card classes='info'>
<!--              :class='[{"info__first": information.image === "get"}, {"info__last": information.image === "repay"}]'-->
<!--              :style='{backgroundImage: `url(${require("@/assets/images/"+information.image+".png")})`}'-->
              <p class='card__title'>{{ information.title }}</p>
              <ul class='card__descriptions'>
                <li v-for='(d, index) in information.description' :key='index'>{{ d }}</li>
              </ul>
              <BaseButton classes='card__button'>
                <nuxt-link style='text-decoration: none; color: #FFF' :to='information.path'>ПОДРОБНЕЕ</nuxt-link>
              </BaseButton>
            </Card>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { cards, infos } from '../fixstures/cards'
import Card from '../components/common/Card/Card'
import BaseButton from '../components/base/BaseButton/BaseButton'

export default {
  components: { BaseButton, Card },
  layout: 'index',
  data() {
    return {
      cards,
      infos
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

//.info {
//  background-repeat: no-repeat !important;
//  background-size: 70% !important;
//  padding: 55% 10% 8% 10% !important;
//  @media (min-width: 900px) {
//    padding: 50% 10% 8% 10% !important;
//  }
//  &__first {
//    background-position: 0% 0% !important;
//    @media (min-width: 900px) {
//      background-position: -20% 0% !important;
//    }
//  }
//  &__last {
//    background-position: 0% 0% !important;
//    @media (min-width: 900px) {
//      background-position: 0% 0% !important;
//      background-position: 20% 0% !important;
//    }
//  }
//}
</style>
