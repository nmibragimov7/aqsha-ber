<template>
  <div>
    <BaseButton icon='load-icon' @click="$refs.fileInput.click()">Загрузить</BaseButton>
    <input
      :id='name'
      ref='fileInput'
      accept='image/*'
      type='file'
      hidden
      @input='pickFile'
    >
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton/BaseButton"

export default {
  name: 'BasePickFile',
  components:{
    BaseButton
  },
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

