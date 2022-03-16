<template>
  <div>
    <label :for='name' :style='{width: width + "%"}'>
      <div class='file__label d-flex align-items-center justify-content-center' :class='[{[`${classes}`]: classes}]'>
        <img :src='"~/assets/images/" + icon + ".svg"' class='mr-1' />
        <span>{{ text }}</span>
      </div>
    </label>
    <input
      ref='fileInput'
      @input='pickFile'
      type='file'
      :id='name'
      hidden
    >
  </div>
</template>

<script>
export default {
  name: 'BasePickFile',
  props: {
    name: {
      type: String,
      default: 'file'
    },
    width: {
      type: Number,
      default: 100
    },
    text: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    pickFile() {
      const file = this.$refs.fileInput.files[0]
      this.$emit('pickFile', file)
    }
  }
}
</script>

<style lang='scss' scoped>
.file {

  &__label {
    width: 100%;
    font-weight: 800;
    font-size: 14px;
    text-align: center;
    background: rgba(162, 162, 201, 0.06);
    border: 1px solid rgba(162, 162, 201, 0.47);
    cursor: pointer;
    padding: 7px;
    border-radius: 42px;
    position: relative;

    & > img {
      position: absolute;
      top: 50%;
      left: 19%;
      transform: translateY(-50%);
    }
  }
}
</style>
