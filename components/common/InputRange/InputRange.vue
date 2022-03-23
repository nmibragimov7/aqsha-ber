<template>
  <div ref="rangeWrap" class="range__wrap d-flex align-items-center justify-content-between">
    <div v-for="dot in 16" :key="dot" class="range__dot" :ref="`dot_${dot}`" :class="{'mr-1':dot<16}"/>
    <input ref="range" type="range" class="range__range" min="0" :step="2000" :max="max" @input="changeHandler($event)">
    <!--      <div ref="left_dot" class="range__dot range__dot-left"/>-->
    <!--      <div ref="right_dot" class="range__dot range__dot-right"/>-->
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    }
  },
  watch: {
    value: {
      handler() {
        this.calculateDotPositions()
      },
    }
  },
  mounted() {
    // this.calculateDotPositions()
  },
  methods: {
    changeHandler(event) {
      this.$emit("input", parseInt(event.target.value))
    },
    calculateDotPositions() {
      const percent = this.value / this.max * 100
      const fullWidthWrap = this.$refs.rangeWrap.offsetWidth
      // const fullWidth = this.$refs.rangeWrap.offsetWidth
      const offSetRange = (percent * fullWidthWrap / 100)
      for (let i = 0; i <= 16; i++) {
        if (this.$refs[`dot_${i}`]) {
          this.$refs[`dot_${i}`][0].style.width = `16px`
          this.$refs[`dot_${i}`][0].style.height = `16px`
          const offsetLeftDot = this.$refs[`dot_${i}`][0].offsetLeft
          if (this.isBig(offsetLeftDot, offSetRange)) {
            this.$refs[`dot_${i}`][0].style.width = `20px`
            this.$refs[`dot_${i}`][0].style.height = `20px`
          }

        }
      }
    },
    isBig(offsetDot, offSetRange) {
      const fullWidth = offsetDot+16
      if(offSetRange >offsetDot && fullWidth<offSetRange){
        console.log(offSetRange,offsetDot,fullWidth)
        return true
      }
    }
  },

}
</script>
<style lang="scss" scoped>

.range {
  &__wrap {
    position: relative;
  }

  &__range {
    position: absolute;
    left: 32px;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    background: transparent;
    border: none;
    margin: 0;
    //border-top: 2px solid black;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 32px;
      width: 32px;
      @extend .range__dot-bg;
    }
  }

  &__dot-bg {
    border-radius: 50%;
    background: linear-gradient(226.59deg, #FFDF11 27.08%, #FF8D65 112.49%);
    cursor: ew-resize;
    transition: background .3s ease-in-out;
  }

  &__dot {
    background: linear-gradient(269.47deg, #FF8D65 0%, #FFDF11 100%);
    width: 16px;
    height: 16px;
    border-radius: 100%;
    //&::before {
    //  @extend .range__dot-bg;
    //  position: absolute;
    //  transform: translateY(-50%);
    //  top: 50%;
    //  width:22px;
    //  height: 22px;
    //}
    &-left, &-right {
      content: "";
      width: 22px;
      height: 22px;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);

      //&::before {
      //  left: -28px;
      //}
    }

    &-left {
      background: black;
    }

    &-right {
      left: 57%;
    }
  }
}
</style>
