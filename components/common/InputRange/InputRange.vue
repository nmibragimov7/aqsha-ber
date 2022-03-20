<template>
  <div ref="range" class="range">
    <input type="range" min="1" :value="value" :max="max" step="1" @input="changeHandler">
    <div ref="left_dot" class="range__dot range__dot-bg range__dot-left"></div>
    <div ref="right_dot" class="range__dot range__dot-bg range__dot-right"></div>
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
  methods: {
    changeHandler(event) {
      this.$emit("input", parseInt(event.target.value))
    },
    calculateDotPositions() {
      const percent = this.value / this.max * 90
      const fullWidth = this.$refs.range.offsetWidth
      const offSet = (percent * fullWidth / 100)
      console.log(offSet)
      this.$refs.left_dot.style.left = `${offSet - 34}px`
      this.$refs.right_dot.style.left = `${percent + 12}%`
    }
  },
  mounted() {
    this.calculateDotPositions()
  }
}
</script>
<style lang="scss" scoped>

.range {
  position: relative;
  overflow: hidden;
  line-height: 0;

  &__dot-bg {
    border-radius: 50%;
    background: linear-gradient(226.59deg, #FFDF11 27.08%, #FF8D65 112.49%);
    cursor: ew-resize;
    transition: background .3s ease-in-out;
  }

  &__dot {
    width: 26px;
    height: 26px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: linear-gradient(269.47deg, #FF8D65 0%, #FFDF11 100%);
    &::before {
      content: "";
      @extend .range__dot-bg;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      width:22px;
      height: 22px;
    }
    &-left {
      left: 35%;

      &::before {
        left: -28px;
      }
    }

    &-right {
      left: 57%;
      &::before {
        right:-28px;
      }
    }
  }

  & > input {
    width: 100%;
    height: 100%;
    margin: 0;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    border: none;
    //border-top: 2px solid black;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 34px;
      width: 34px;
      @extend .range__dot-bg;
    }
  }
}
</style>
