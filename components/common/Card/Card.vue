<template>
  <div :class="['card', classes]">
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
    height: {
      type: Number
    }
  }
}
</script>

<style lang='scss' scoped>
.card {
  background: #F8F9F9;
  box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
  border-radius: 30px;
}
</style>
