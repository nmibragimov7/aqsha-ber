<template>
  <div :style='{width: width + "%"}'>
    <button :class="['button', classes]"
            :style='{color: color ? color : "#000"}'
            :disabled='disabled || isLoading'
            v-on="$listeners">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    width: {
      type: Number,
      default: 100
    },
    classes: {
      type: String,
      default: ''
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang='scss' scoped>
.button {
  width: 100%;
  height: 50px;
  font-weight: 600;
  text-align: center;
  background: #FFDF11;
  color: #000;
  border: none;
  cursor: pointer;
  padding: 15px 20px;
  border-radius: 42px;
  &:focus,
  &:hover,
  &:active {
    outline: none;
  }
}
</style>
