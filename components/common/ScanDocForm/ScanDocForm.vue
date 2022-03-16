<template>
  <div class='page__form'>
    <div class='row mb-3'
         v-for='(block, index) in blocks'
         :key='index'>
      <div class='col-4'>
        <img :src='"~/assets/images/" + block.img + ".svg"' alt='Scan' />
      </div>
      <div class='col-8'>
        <p class='m-0'>{{ block.text }}</p>
      </div>
    </div>
    <BaseButton :classes='classes'>{{text}}</BaseButton>
    <BasePickFile name='load-document'
                  icon='load-icon'
                  text='Загрузить'
                  @pickFile='pickFile' />
  </div>
</template>

<script>
import BaseButton from '../../base/BaseButton/BaseButton'
import BasePickFile from '../../base/BasePickFile/BasePickFile'

export default {
  name: 'ScanDocForm',
  props: {
    classes: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  },
  components: { BasePickFile, BaseButton },
  data() {
    return {
      blocks: [
        {
          img: 'scan',
          text: 'Отсканируйте обе стороны удостоверения: сначала лицевую, затем оборотную.'
        },
        {
          img: 'photo',
          text: 'Наведите камеру на удостоверение. Расположите документ так, чтобы он попадал в рамку и убедитесь, что весь текст считывается.'
        }
      ],
      step: 1
    }
  },
  methods: {
    pickFile(file) {
      this.$emit('pickFile', file)
    }
  }
}
</script>

<style lang='scss'>
.page {

  &__form {
    padding: 50px 40px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  &__button {

    &--scan,
    &--load {
      border: 1px solid rgba(162, 162, 201, 0.47) !important;
      border-radius: 24.5px !important;
      text-transform: capitalize !important;
    }

    &--scan {
      padding: 16px !important;
      text-transform: capitalize !important;
      box-shadow: none !important;
      font-size: 14px !important;
      background: url("assets/images/scan-icon.png") no-repeat 20% 50%, rgba(162, 162, 201, 0.06) !important;
    }
  }
}
</style>
