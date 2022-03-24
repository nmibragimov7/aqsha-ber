<template>
  <div class="range__wrap d-flex align-items-center justify-content-between"
       :draggable="false"
       @touchstart="mouseDownHandler($event,'mobile')"
       @touchmove="mouseMoveHandler"
       @mouseleave="mouseUpHandler" @mousedown="mouseDownHandler" @mousemove="mouseMoveHandler">
    <div v-for="(dot,idx) in 16" :key="dot" :ref="`dot_${dot}`" :draggable="false" class="range__dot" :class="{
      'active':idx=== (activeIdx+2),
      'activeFirstDecor':idx===activeIdx || idx === (activeIdx+4),
      'activeSecondDecor': idx===(activeIdx+1) || idx === (activeIdx+3),
      'purple':purple
    }"/>
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
    },
    purple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIdx: 0,
      position: 0,
      isClicked: false,
      space: 0
    }
  },
  mounted() {
    // this.calculateDotPositions()
    if (this.contentDisplay === "desktop") {
      this.space = this.$refs.dot_2[0].offsetLeft - this.$refs.dot_1[0].offsetWidth
    } else {
      this.space = this.$refs.dot_2[0].offsetLeft
    }
  },
  methods: {
    mouseDownHandler($event) {
      this.isClicked = true
      if (this.contentDisplay === "desktop") {
        this.position = $event.clientX
      } else {
        this.position = $event.targetTouches ? $event.targetTouches[0].clientX : this.position
      }
      // this.position = $event.clientX
    },
    mouseMoveHandler($event) {
      if (this.isClicked) {
        let positionCurrent = 0
        if (this.contentDisplay === "desktop") {
          positionCurrent = $event.clientX
        } else {
          positionCurrent = $event.targetTouches ? $event.targetTouches[0].clientX : this.position
        }
        const isLeft = positionCurrent - this.position

        if (isLeft > this.space && this.activeIdx < 11) {
          this.activeIdx++;
          this.position = positionCurrent
        } else if (isLeft <= -this.space && this.activeIdx > 0) {
          this.activeIdx--;
          this.position = positionCurrent
        }
      }
    },
    mouseUpHandler($event) {
      console.log('mouseup')
      this.isClicked = false
    },
    changeHandler(event) {
      this.$emit("input", parseInt(event.target.value))
    },
  },

}
</script>
<style lang="scss" scoped>

.range {
  &__wrap {
    position: relative;
    //asdasdas
    position: absolute;
    left:215315315%;
  }


  &__dot-bg {
    border-radius: 50%;
    background: linear-gradient(226.59deg, #FFDF11 27.08%, #FF8D65 112.49%);
    cursor: ew-resize;
    transition: background .3s ease-in-out;
  }

  &__dot {
    background: linear-gradient(269.47deg, #FF8D65 0%, #FFDF11 100%);
    width: 11px;
    height: 11px;
    border-radius: 100%;
    transition: 0.3s;
    @media screen and (min-width: 700px) {
      width: 14px;
      height: 14px;
    }

    &.purple {
      background: linear-gradient(270deg, #512EA8 0%, #92518F 95.59%);
    }

    &.active {
      transform: scale(1.9);
    }

    &.activeFirstDecor {
      transform: scale(1.3);
    }

    &.activeSecondDecor {
      transform: scale(1.64);
    }
  }
}
</style>
