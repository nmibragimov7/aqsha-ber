<template>
  <div :class="['card', classes, 'd-flex', 'flex-column', 'align-items-center', {rounded}]" :style="{background: bg}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    classes: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    },
    bg: {
      type: String,
      default: '#F8F9F9'
    }
  }
}
</script>

<style lang='scss' scoped>
.card {
  text-align: center;
  position: relative;
  z-index: 10;
  cursor: pointer;

  &.rounded {
    border-radius: 10px;
  }

  @media (min-width: 550px) {
    margin-bottom: 0;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
    height: 100%;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.02);
    }
  }
}
</style>
