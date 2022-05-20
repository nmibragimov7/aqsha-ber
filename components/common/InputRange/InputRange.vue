<template>
  <div>
    <div v-if="false">
      <div class='range__wrap d-flex align-items-center justify-content-between'
           :draggable='false'
           @touchstart="mouseDownHandler($event,'mobile')"
           @touchmove='mouseMoveHandler'
           @mouseleave='mouseUpHandler' @mousedown='mouseDownHandler' @mousemove='mouseMoveHandler'>
        <div v-for='(dot,idx) in 16' :key='dot' :ref='`dot_${dot}`' :draggable='false' class='range__dot' :class="[{
      'active': idx === (activeIdx+2),
      'activeFirstDecor': idx===activeIdx || idx === (activeIdx+4),
      'activeSecondDecor': idx===(activeIdx+1) || idx === (activeIdx+3),
      'purple': purple
    }]" />
      </div>
    </div>
    <div>
      <input class="range__default" type="range" :class="{purple}" :min="min" :step="step" :max="max" @input="changeHandler">
    </div>
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
    min:{
      type:Number,
      default:0
    },
    step:{
      type:Number,
      default:1
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
    // if (this.contentDisplay === 'desktop') {
    //   this.space = this.$refs.dot_2[0].offsetLeft - this.$refs.dot_1[0].offsetWidth
    // } else {
    //   this.space = this.$refs.dot_2[0].offsetLeft
    // }
    // this.changeHandler()
  },
  methods: {
    mouseDownHandler($event) {
      this.isClicked = true
      if (this.contentDisplay === 'desktop') {
        this.position = $event.clientX
      } else {
        this.position = $event.targetTouches ? $event.targetTouches[0].clientX : this.position
      }
      // this.position = $event.clientX
    },
    mouseMoveHandler($event) {
      if (this.isClicked) {
        let positionCurrent = 0
        if (this.contentDisplay === 'desktop') {
          positionCurrent = $event.clientX
        } else {
          positionCurrent = $event.targetTouches ? $event.targetTouches[0].clientX : this.position
        }
        const isLeft = positionCurrent - this.position

        if (isLeft > this.space && this.activeIdx < 11) {
          this.activeIdx++
          this.position = positionCurrent
        } else if (isLeft <= -this.space && this.activeIdx > 0) {
          this.activeIdx--
          this.position = positionCurrent
        }

        this.changeHandler()
      }
    },
    mouseUpHandler($event) {
      this.isClicked = false
    },
    changeHandler($event) {
      console.log('kek')
      // this.$emit('input', Math.round(this.max / 11 * this.activeIdx))
      this.$emit('input', parseInt($event.target.value))
    }
  }

}
</script>
<style lang='scss' scoped>
.range__default{
  width: 100%;
  -webkit-appearance: none;
  vertical-align: middle;
  outline: none;
  border: none;
  padding: 0;
  background: none;
  &::-webkit-slider-runnable-track {
    background-color: rgba(255, 141, 101, 0.5);
    background-image: linear-gradient(269.47deg, rgba(255, 141, 101, 0.5) 0%, rgba(255, 223, 17, 0.5) 100%);
    height: 6px;
    border-radius: 6px;
    border: 1px solid transparent;

  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    border-radius: 100%;
    background-color: #FF8D65;
    height: 25px;
    width: 25px;
    cursor: pointer;
    margin-top: -12px;
    background-image: linear-gradient(269.47deg, #FF8D65 0%, #FFDF11 100%);
  }
  &.purple{
    &::-webkit-slider-thumb {
      background-color: #512EA8;
      background: linear-gradient(270deg, #512EA8 0%, #92518F 95.59%);
    }
    &::-webkit-slider-runnable-track {
      background-image: linear-gradient(270deg, rgba(81, 46, 168, 0.5) 0%, rgba(146, 81, 143, 0.5) 95.59%);

    }
  }
}
.range {
  &__wrap {
    position: relative;

  }


  &__dot {
    background: linear-gradient(269.47deg, #FF8D65 0%, #FFDF11 100%);
    width: 11px;
    // вася ворк
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
