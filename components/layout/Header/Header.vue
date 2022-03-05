<template>
  <div class='header'>
    <div class='container'>
      <img class='header__logo' src='~/assets/images/logo.png' alt='Logo'/>
      <div class='header__bars'></div>
      <div class='header__item'>
        <img class='header__logo--large' src='~/assets/images/logo-large.png' alt='Logo'/>
        <div class='header__navs'>
          <div :key='index'
               v-for='(menu, index) in menus'
               class='header__nav p-3 ml-4'>
              <nuxt-link :to="menu.path">{{menu.title}}</nuxt-link>
          </div>
          <div class='header__nav p-3 ml-4'>
            <nuxt-link to="/login">Вход</nuxt-link> / <nuxt-link to="/register">Регистрация</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {menus} from "../../../fixstures/menus";

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
  padding: 15px 0;
  @media (min-width: 900px) {
    padding: 0;
  }
  &__item,
  &__navs {
    display: none;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 900px) {
      display: flex;
    }
  }
  &__nav {
    color: #FFF;
    font-size: 24px;
    text-decoration: underline;
    white-space: nowrap;
    & a {
      color: #FFF;
      font-size: 24px;
      text-decoration: underline;
      white-space: nowrap;
    }
  }
  &__logo {
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translateX(-50%);
    @media (min-width: 900px) {
      display: none;
    }
    &--large {
      display: none;
      @media (min-width: 900px) {
        display: block;
      }
    }
  }
  &__bars {
    cursor: pointer;
    position: relative;
    width: 37px;
    height: 5px;
    background-color: #FFF;
    border-radius: 4px;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    @media (min-width: 900px) {
      display: none;
    }
    &::before,
    &::after {
      width: 37px;
      height: 5px;
      background-color: #FFF;
      border-radius: 4px;
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
      -webkit-transform: translateY(-8px);
    }
    &:after {
      transform: translateY(8px);
    }
  }
}
</style>
