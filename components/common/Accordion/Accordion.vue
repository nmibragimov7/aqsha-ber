<template>
  <div class='mb-2' style='max-width: 595px; margin: 0 auto'>
    <div class='accordion__question d-flex align-items-center'
         @click='$emit("faqHandler", index)'>
      <img src='~/assets/images/arrow.svg'
           class='accordion__img'
           :class='[{"accordion__img--active": activeIndex === index}]' alt=""/>
      <img src='~/assets/images/arrow-large.svg'
           class='accordion__img--large'
           :class='[{"accordion__img--active": activeIndex === index}]' alt=""/>
      <p class='m-0'>{{ question }}</p>
    </div>
    <div v-if='activeIndex === index && answer.length' class='accordion__answer'>
      <p v-for='(item, idx) in answer'
         :key='idx'
         class='m-0 mb-2'>{{ item }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    question: {
      type: String,
      default: ""
    },
    answer: {
      type: Array,
      default() {
        return []
      }
    },
    activeIndex: {
      default: null,
      type:[String,Number]
    },
    index: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang='scss' scoped>
.accordion {

  &__question,
  &__answer {
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  &__question {
    position: relative;
    padding: 20px 70px 20px 30px;
    font-weight: 700;
    height: 80px;
    line-height: 150%;

    @media (min-width: 900px) {
      padding: 35px 70px;
    }
  }

  &__img {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    transition: all 0.4s;

    @media (min-width: 900px) {
      right: 40px;
      display: none;
    }

    &--active {
      transform: translateY(-50%) rotate(180deg) !important;
    }

    &--large {
      display: none;
      @media (min-width: 900px) {
        transition: all 0.4s;
        display: block;
        position: absolute;
        top: 50%;
        right: 70px;
        transform: translateY(-50%);
      }
    }
  }

  &__answer {
    padding: 20px 40px;
  }
}
</style>
