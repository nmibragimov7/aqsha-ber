<template>
  <div class='page'>
    <Header logo-small/>
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p class='text-center page__step m-0 mb-2'>Шаг 6 из 6</p>
        <p class='text-center page__text m-0 mb-2'>Сведения о работе</p>
        <div class='steps d-flex align-items-center justify-content-between mb-3'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 6}]'></div>
        </div>
        <div class='page__form d-flex flex-column mt-4'>
          <h5 class='text-center text-bold m-0 mb-4'>Сведения о работе</h5>
          <div class='page__form--wrap'>
            <div class='mb-4'>
              <BaseInput v-model='form.placeOfWork' label='Место работы (название)'/>
            </div>
            <div class='mb-4'>
              <BaseInput v-model='form.position' label='Должность'/>
            </div>
            <div class="row justify-content-between">
              <div class='col-6'>
                <BaseInput v-model='form.income' label='Ежемес. доходы'/>
              </div>
              <div class='col-6'>
                <BaseInput v-model='form.expenses' label='Ежемес. расходы'/>
              </div>
            </div>
            <BaseButton v-if='isDesktop'
                        uppercase
                        next
                        classes='mt-4'
                        @click='confirm'>подтвердить</BaseButton>
          </div>
        </div>
        <BaseButton v-if='!isDesktop'
                    uppercase
                    next
                    classes='mt-4'
                    @click='confirm'>подтвердить</BaseButton>
      </div>
    </div>
    <ProcessedModal/>
  </div>
</template>

<script>
import Header from "../../components/layout/Header/Header"
import BaseInput from "../../components/base/BaseInput/BaseInput"
import BaseButton from "../../components/base/BaseButton/BaseButton"
import ProcessedModal from '../../components/common/modal/ProcessedModal/ProcessedModal'

export default {
  components: { ProcessedModal, BaseButton, BaseInput, Header},
  data() {
    return {
      form: {
        placeOfWork: "",
        position: "",
        income: "",
        expenses: "",
      },
      isDesktop: false
    }
  },
  mounted() {
    this.contentDisplay === 'desktop' ? this.isDesktop = true : this.isDesktop = false
  },
  methods: {
    confirm() {
      this.$modal.show('processed')
      setTimeout(() => {
        this.$modal.hide('processed')
        this.$router.push('/approved')
      }, 5000)
    }
  }
}
</script>

<style lang='scss' scoped>
.page {
  background: linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
  min-height: 40vh;
  border-radius: 0 0 20px 20px;

  @media (min-width: 900px) {
    background: url("assets/images/promo_icon.png") no-repeat 0 0/20%,
    url("assets/images/promo_icon_2.png") no-repeat 10% 100%/15%,
    url("assets/images/promo_icon_3.png") no-repeat 100% 70%/15%,
    linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
    min-height: 50vh;
  }

  &__wrap {
    position: relative;

    @media (min-width: 900px) {
      max-width: 800px;
    }
  }

  &__body {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
  }

  &__text,
  &__step {
    color: #FFF;
  }

  &__step {
    font-size: 24px;
    font-weight: 700;
  }

  &__form {
    padding: 20px 30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    &--wrap {
      width: 100%;

      @media (min-width: 900px) {
        width: 45%;
        margin: 0 auto;
      }
    }
  }
}
</style>
