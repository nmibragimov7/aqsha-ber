<template>
  <div class='header'>
    <div class='container header__container d-flex align-items-center'>
      <NuxtLink to='/' class='header__logo'>
        <img src='~/assets/images/logo.svg' alt='Logo' />
      </NuxtLink>
      <div class='header__bars'
           @click='barsHandler'></div>
      <div class='header__pop-up-menu' :class='[{"header__pop-up-menu--active": isOpen}]'>
        <div class='header__bars header__bars--active'
             @click='barsHandler'></div>
        <NuxtLink to='/' class='header__pop-up-menu--logo'>
          <img src='~/assets/images/logo-small.svg' alt='Logo' />
        </NuxtLink>
        <div class='container'>
          <NuxtLink to='/' class='header__pop-up-menu--link'>
            <p class='m-0 mb-4'>Главная</p>
          </NuxtLink>
          <NuxtLink to='/' class='header__pop-up-menu--link'>
            <p class='m-0 mb-4'>Способы получения и погашения</p>
          </NuxtLink>
          <NuxtLink to='/' class='header__pop-up-menu--link'>
            <p class='m-0 mb-4'>Документы</p>
          </NuxtLink>
          <NuxtLink to='/' class='header__pop-up-menu--link'>
            <p class='m-0 mb-4'>Контакты</p>
          </NuxtLink>
          <hr class='mb-4'>
          <div>
            <nuxt-link class='header__pop-up-menu--link' to='/login'>Вход</nuxt-link>
            <span class='header__pop-up-menu--link'>/</span>
            <nuxt-link class='header__pop-up-menu--link' to='/register'>Регистрация</nuxt-link>
          </div>
        </div>
      </div>
      <div class='header__item'>
        <div class='header__navs flex-grow-1 d-flex'>
          <NuxtLink v-for='(menu, index) in menus'
                    :key='index'
                    :to='menu.path'
                    class='header__link p-2 ml-2'>
            {{ menu.title }}
          </NuxtLink>
          <div class='p-2 ml-2'>
            <nuxt-link class='header__link' to='/login'>Вход</nuxt-link>
            <span class='header__link'>/</span>
            <nuxt-link class='header__link' to='/register'>Регистрация</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { menus } from '../../../fixstures/menus'

export default {
  name: 'Header',
  data() {
    return {
      menus,
      isOpen: false
    }
  },
  methods: {
    barsHandler() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style lang='scss' scoped>
.header {
  padding: 23px 5px 5px;

  &__container {
    position: relative;
    justify-content: center;
  }

  &__logo {
    max-width: 115px;

    & > img {
      width: 100%;
    }
  }

  &__pop-up-menu {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background: #F8F9F9;
    border-radius: 0 0 30px 30px;
    height: 50vh;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    transform: translateY(-100%);
    padding: 80px 20px 0 20px;
    @media (min-width: 900px) {
      display: none;
    }

    &--active {
      transform: translateY(0%);
    }

    &--logo {
      position: absolute;
      top: 5px;
      right: 26px;
    }

    &--link {
      text-decoration: none;
      color: #322443;
    }
  }

  &__bars {
    cursor: pointer;
    position: absolute;
    left: 21px;
    top: 8px;
    width: 38px;
    border: none;
    height: 5px;
    background-color: #FFF;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;

    &--active {
      top: 31px;
      left: 26px;
      background-color: #322443;
      transform: rotate(90deg);

      &::before,
      &::after {
        background-color: #322443 !important;
      }
    }

    &::before,
    &::after {
      width: 38px;
      height: 5px;
      background-color: #FFF;
      -webkit-transition: 0.2s ease-in-out;
      transition: 0.2s ease-in-out;
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      will-change: transform;
    }

    &::before {
      -webkit-transform: translateY(-10px);
    }

    &:after {
      transform: translateY(10px);
    }
  }

  &__item {
    display: none;
  }

  &__link {
    text-decoration: underline;
    color: #FFF;
    font-size: 24px;
  }

  @media (min-width: 900px) {
    &__container {
      justify-content: space-between;
    }
    &__bars {
      display: none;
    }
    &__item {
      display: flex;
      align-items: center;
    }
  }
}
</style>
