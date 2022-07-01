<template>
  <div class="page">
    <Header logo-small/>
    <div class="container page__wrap">
      <div class="page__body px-4">
        <h1 class="text-center page__title mb-4">Документы</h1>
        <div class="bg-white p-3 page__content mb-4">
          <ul class="page__list p-0 m-0">
            <li class="py-1">Правила предоставления микрокредитов</li>
            <li class="py-1">Политика обработки данных</li>
            <li class="py-1">Политика информационной безопасности</li>
            <li class="py-1">Лицензия</li>
            <li class="py-1">Договор о предоставлении микрокредита</li>
            <li class="py-1">Реквизиты ТОО МФО «Взаймы»</li>
          </ul>
        </div>
        <div class='mt-30 mw-360 w-100 mx-auto' :class='{"mt-50": isDesktop}'>
          <BaseButton uppercase bg="#3A2784" color="#fff" @click="goToMain">
            На главную
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/layout/Header/Header";

export default {
  components: {
    Header
  },
  data() {
    return {
      isDesktop: null
    }
  },
  layout: "withFooter",
  mounted() {
    this.isDesktop = this.contentDisplay === "desktop"
  },
  methods: {
    goToMain() {
      this.$router.push("/")
    }
  }
}
</script>
<style scoped lang="scss">
.mw-360 {
  max-width: 360px;
}

.mt-50 {
  margin-top: 50px;
}

.mt-30 {
  margin-top: 30px;
}

.page {
  background-image: linear-gradient(120deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  @media screen and (min-width: 600px) {
    background: url("/images/bg-on-anotherpage.png") no-repeat center / cover;
    min-height: 40vh;
  }
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
    max-width: 678px;
    width: 100%;
    margin: 0 auto;
  }

  &__title {
    margin-top: 0;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
  }

  &__content {
    border-radius: 15px;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
    color: #322443;
  }

  &__list {
    width: 50%;
    margin: 0 auto;
    list-style: none;

    & > li {
      text-decoration: underline;
    }
  }
}
</style>
