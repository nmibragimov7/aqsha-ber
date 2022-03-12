<template>
  <div>
    <input class="btn__input" type="radio" :name="name"
           style="display: none" @change="$emit('input',val)">
    <span class="btn__btn"></span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    val: {
      type: String,
      default: ""
    }
  }
}
</script>
<style lang="scss" scoped>
.btn {
  &__input:checked ~ &__btn {
    &::after {
      opacity: 1;
    }
  }

  &__btn {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    border: 2px solid #A0A0C5;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: "";
      width: 17px;
      height: 17px;
      background-color: #A0A0C5;
      display: inline-block;
      transition: 0.2s;
      border-radius: 50%;
      opacity: 0;
    }
  }
}
</style>
