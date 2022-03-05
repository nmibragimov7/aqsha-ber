<template>
  <div :class="['card', classes, 'd-flex', 'flex-column', 'align-items-center']">
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
    }
  }
}
</script>

<style lang='scss' scoped>
.card {
  background: #F8F9F9;
  text-align: center;
  margin-bottom: 30px;
  cursor: pointer;
  @media (min-width: 900px) {
    margin-bottom: 0;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);
    border-radius: 30px;
    padding: 15px 40px;
    height: 100%;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
