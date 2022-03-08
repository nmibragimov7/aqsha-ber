<template>
  <div class='header'>
    <div class='container header__container d-flex align-items-center'>
      <NuxtLink to='/' class='header__logo'>
        <img src='~/assets/images/logo.svg' alt='Logo' />
      </NuxtLink>
      <button class='header__bars'></button>
      <div class='header__item'>
        <div class='header__navs flex-grow-1 d-flex'>
          <NuxtLink v-for='(menu, index) in menus'
                    :key='index'
                    :to='menu.path'
                    class='header__nav p-2 ml-2'>
            {{ menu.title }}
          </NuxtLink>
          <div class='header__signBtns p-2 ml-2'>
            <nuxt-link class='header__nav' to='/login'>Вход</nuxt-link>
            <span class='header__nav'>/</span>
            <nuxt-link class='header__nav' to='/register'>Регистрация</nuxt-link>
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
      menus
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

  &__nav {
    text-decoration: underline;
    color: #FFF;
    font-size: 24px;
  }

  @media (min-width: 768px) {
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
