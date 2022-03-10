<template>
  <div class="page">
    <div class="page__bg pb-3">
      <Header/>
      <div class="container">
        <h1 class="text-center page__title my-2">Отказано</h1>
        <p class="text-center page__description">
          К сожалению, мы не можем одобрить микрокредит.
        </p>
      </div>
    </div>
    <div class="container">
      <div class="d-flex justify-content-center px-5 mt-4">
        <img src="@/assets/images/warning.png" class="w-100" alt="">
      </div>
      <BaseButton bg="#3A2784" color="#fff" classes="mt-2" @click="goToMain">
        На главную
      </BaseButton>
    </div>
  </div>
</template>


<script>
import Header from "@/components/layout/Header/Header";

export default {
  components:{
    Header
  },
  mounted() {
    if(!this.$route.query.denied){
      console.log('kek')
    }
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
  &__bg{
    background-image: linear-gradient(45deg, #8055A1, #6C83F3,#AE6E9C);
    border-radius: 0 0 20px 20px;
  }

  &__body{
    position: absolute;
    right:0;
    top:0;
    left:0;
  }
  &__title {
    color: #fff;
    font-size: 40px;
    font-weight: 600;
    text-shadow: 0 4px 9px rgba(0, 0, 0, 0.25);
  }
  &__description{
    color:#fff;
  }
}
</style>
