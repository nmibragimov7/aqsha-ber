<template>
  <div class='page'>
    <Header logo-small/>
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <div class='text-center page__info'>
          <slot name='header'>
            <h1 class='page__title mb-4'>{{ title }}</h1>
            <p v-if='subtitle' class='mt-1'>
              {{ subtitle }}
            </p>
          </slot>
        </div>
        <div class='page__content' :class="{'bg':!bgTransparent}">
          <slot></slot>
        </div>
        <slot name='page__footer'>
          <BaseButton bg='#3A2784' color='#fff' classes='mt-3' @click='goToMain'>
            На главную
          </BaseButton>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/layout/Header/Header.vue'

export default {
  components: {
    Header
  },
  props: {
    title: {
      type: String,
      default: 'Подписание договора'
    },
    bgTransparent: {
      type: Boolean,
      default: false
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    goToMain() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang='scss' scoped>
.page {
  background-image: linear-gradient(120deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  min-height: 25vh !important;
  border-radius: 0 0 20px 20px;
  @media screen and (min-width: 600px) {
    background: url("/images/bg-on-anotherpage.png") no-repeat center / cover;
    min-height: 50vh;
  }

  &__wrap {
    position: relative;

    @media (min-width: 900px) {
      max-width: 900px;
      margin: 0 auto;
    }
  }

  &__body {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
  }

  &__title {
    margin-top: 0;
    color: #fff;
    font-size: 24px;
    font-weight: 500;

    @media (min-width: 900px) {
      font-size: 46px;
    }
  }

  &__info {
    color: #fff;
  }

  &__content {
    border-radius: 15px;
    color: #322443;
    font-size: 18px;
    &.bg{
      box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
      background-color: white;
    }
  }
}

</style>
