<template>
  <div class="page">
    <Header/>
    <div class="container page__wrap">
      <div class="page__body px-4">
        <div class="text-center page__info">
          <slot name="header">
            <h1 class="page__title mb-0">{{ title }}</h1>
            <p v-if="subtitle" class="mt-1">
              {{ subtitle }}
            </p>
          </slot>
        </div>
        <div class="page__content">
          <slot></slot>
        </div>
        <slot name="page__footer">
          <BaseButton bg="#3A2784" color="#fff" classes="mt-3" @click="goToMain">
            На главную
          </BaseButton>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/layout/Header/Header.vue";

export default {
  components: {
    Header,
  },
  props: {
    title: {
      type: String,
      default: "Подписание договора"
    },
    subtitle: {
      type: String
    }
  },
  methods: {
    goToMain() {
      this.$router.push("/")
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  background-image: linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
  min-height: 30vh;
  border-radius: 0 0 20px 20px;

  &__wrap {
    position: relative;
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

  &__content {
    background: #fff;
    border-radius: 15px;
    color: #322443;
    font-size: 18px;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
  }
}

</style>
