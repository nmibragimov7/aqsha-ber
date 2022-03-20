<template>
  <div :style='{width: width + "%"}'>
    <button :class="['button', classes]"
            :style="{color:color,backgroundColor:bg}"
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
    },
    bg: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang='scss' scoped>
.button {
  width: 100%;
  font-weight: 600;
  text-align: center;
  background: #FFDF11;
  box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.25);
  color: #000;
  border: none;
  cursor: pointer;
  padding: 13px;
  font-size: 20px;
  border-radius: 42px;
  text-transform: uppercase;

  &:focus,
  &:hover,
  &:active {
    outline: none;
  }
}
</style>
