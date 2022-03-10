<template>
  <div class="page">
    <Header/>
    <div class="container page__body">
      <Nuxt/>
      <BaseButton @click="goToMain" bg="#3A2784" color="#fff">
        На главную
      </BaseButton>
    </div>
  </div>
</template>
<script>
import Header from '@/components/layout/Header/Header'

export default {
  components: {
    Header
  },
  methods:{
    goToMain(){
      this.$router.push("/")
    }
  }
}
</script>
<style lang="scss" scoped>
.page {
  background-color: lighten(#BCBCBC,18);
  //background-image: linear-gradient(45deg, #8055A1, #6C83F3);

  min-height: 100vh;
  border-radius: 0 0 33px 33px;
  &__body{
  }
}
</style>
