<template>
  <div :style='{width: width + "%"}'>
    <button v-if="!icon" :class="['button', classes, {normal, uppercase}]"
            :style="{color: color, backgroundColor: bg}"
            :disabled='disabled || isLoading'
            v-on="$listeners">
      <slot></slot>
    </button>
    <button v-if="icon" :class="['button button__icon-wrap', classes, {normal, uppercase}]"
            :style="{color: color, backgroundColor: bg}"
            :disabled='disabled || isLoading'
            v-on="$listeners">
      <span class="button__icon">
        <img class="w-100" :src='icon.includes(".") ? require(`@/assets/images/${icon}`) : require(`@/assets/images/${icon}.svg`)' :alt='icon'/>
      </span>
      <span class="button__text">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    width: {
      type: Number,
      default: 100
    },
    classes: {
      type: String,
      default: ""
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
      default: ""
    },
    bg: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    normal: {
      type: Boolean,
      default: false
    },
    uppercase: {
      type: Boolean,
      default: false
    }
  },
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
  padding: 15px;
  font-size: 20px;
  border-radius: 42px;

  &.uppercase {
    text-transform: uppercase;
  }

  &__icon-wrap {
    background: rgba(162, 162, 201, 0.06);
    border: 1px solid rgba(162, 162, 201, 0.47);
    box-sizing: border-box;
    box-shadow: none;
    padding: 11px;
    font-size: 16px;
    border-radius: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &__icon{
    display: inline-flex;
    align-items: center;
    max-width: 20px;
  }
  &__text{
    text-align: left;
    min-width: 120px;
    margin-left: 10px;
  }

  &:focus,
  &:hover,
  &:active {
    outline: none;
  }

  &.normal {
    font-size: 15px;
    text-transform: none;
  }
}
</style>
