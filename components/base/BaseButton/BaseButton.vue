<template>
  <div :style='{width: width + "%"}' class='mx-auto'>
    <button v-if='!icon'
            :class="['button', classes, { normal, uppercase, prev, next, history, small, disabled}]"
            :style='{color: color, backgroundColor: bg}'
            :disabled='disabled || isLoading'
            v-on='$listeners'>
      <slot></slot>
    </button>
    <button v-if='icon'
            :class="['button button__icon-wrap',
              classes,
              { normal, uppercase, small, disabled}]"
            :style='{color: color, backgroundColor: bg}'
            :disabled='disabled || isLoading'
            v-on='$listeners'>
      <span class='button__icon'>
        <img class='w-100'
             :src='icon.includes(".") ? require(`@/assets/images/${icon}`) : require(`@/assets/images/${icon}.svg`)'
             :alt='icon'/>
      </span>
      <span class='button__text'>
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
    small: {
      type: Boolean,
      default: false
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
    },
    prev: {
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    },
    history: {
      type: Boolean,
      default: false
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
  font-family: inherit;
  font-size: 0.9rem;
  padding: 12px 10px;
  border-radius: 42px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    padding: 14px 12px;
  }

  &.small {
    padding: 9px;
    font-size: 15px;
  }

  &.uppercase {
    text-transform: uppercase;
  }

  &.disabled {
    opacity: 0.5;
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

  &__icon {
    display: inline-flex;
    align-items: center;
    max-width: 20px;
  }

  &__text {
    text-align: left;
    min-width: 93px;
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

  &.prev {
    box-shadow: none;
    border: 1px solid rgba(162, 162, 201, 0.47);
    font-size: 14px;
    background: rgba(162, 162, 201, 0.06);
  }

  &.next {
    background: #3A2784;
    color: #FFF;
    border-radius: 42px;
  }

  &.history {
    font-size: 11px;
    padding-top: 7px;
    padding-bottom: 7px;
  }
}
</style>
