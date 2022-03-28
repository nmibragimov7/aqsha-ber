<template>
  <div>
    <div v-if='isDesktop' class='row align-items-stretch'>
      <div v-for='(block, index) in blocks'
           :key='index'
           :class='{"col-12": blocks.length === 1}'
           class='col-6 mb-4'>
        <div class='page__form'>
          <div class='row'>
            <div class='col-4 d-flex justify-content-center'>
              <img :src='"~/assets/images/" + block.img + ".svg"'
                   :alt='block.img' />
            </div>
            <div class='col-8'>
              <p v-for='(text, index) in block.text'
                 :key='index'
                 :class='{"mb-3": !index}'
                 class='m-0'>{{ text }}</p>
            </div>
          </div>
          <div v-if='isFourthStep' class='page__buttons'>
            <BaseButton :icon='icon' classes='mb-2' @click='openCamera'>{{ text }}</BaseButton>
            <BasePickFile name='load-document'
                          text='Загрузить'
                          @pickFile='pickFile' />
          </div>
        </div>
      </div>
      <div v-if='!isFourthStep' class='page__buttons'>
        <BaseButton :icon='icon' classes='mb-2' @click='openCamera'>{{ text }}</BaseButton>
        <BasePickFile name='load-document'
                      text='Загрузить'
                      @pickFile='pickFile' />
      </div>
    </div>
    <div v-else class='page__form'>
      <div v-for='(block, index) in blocks'
           :key='index'
           class='row mb-3 d-flex align-items-center'>
        <div class='col-4'>
          <div class='d-flex justify-content-center'>
            <img :src='"~/assets/images/" + block.img + ".svg"'
                 :alt='block.img' />
          </div>
        </div>
        <div class='col-8'>
          <p class='m-0' v-for='(text, index) in block.text' :key='index'>{{ text }}</p>
        </div>
      </div>
      <BaseButton :icon='icon' classes='mb-2' @click='openCamera'>{{ text }}</BaseButton>
      <BasePickFile name='load-document'
                    text='Загрузить'
                    @pickFile='pickFile' />
    </div>
    <CapturePhoto :is-open='cameraIsOpen' @close='closeCamera' />
    <input ref='fileInput'
           type='file'
           style='display: none'
           accept='image/*'
           capture='environment'
           @change='fileInputHandler'>
  </div>
</template>

<script>
import BaseButton from '../../base/BaseButton/BaseButton'
import BasePickFile from '../../base/BasePickFile/BasePickFile'
import CapturePhoto from '@/components/common/CapturePhoto/CapturePhoto.vue'
import { dataUrlToFile } from '@/assets/js/dataURLtoFile'

export default {
  name: 'ScanDocForm',
  components: { BasePickFile, BaseButton, CapturePhoto },
  mixins: ['watchWindow'],
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    isFourthStep: {
      type: Boolean,
      default: false
    },
    blocks: {
      type: Array,
      default() {
        return [
          {
            img: 'scan',
            text: this.contentDisplay === 'desktop' ? ['Отсканируйте обе стороны удостоверения: сначала лицевую, затем оборотную.'] :
              ['Сделайте фото лицевой стороны удостоверения личности или загрузите готовое фото. Оборотную сторону удостоверения нужно будет отсканировать.'],
          },
          {
            img: this.contentDisplay === 'desktop' ? 'photo_2' : 'photo',
            text: this.contentDisplay === 'desktop' ? [
              'Как сканировать документ:',
              '1.  наведите камеру на удостоверение личности',
              '2.  расположите документ так, чтобы он попадал в рамку',
              '3.  убедитесь, что фокус камеры наведен на текст'
            ] : ['Наведите камеру на удостоверение. Расположите документ так, чтобы он попадал в рамку и убедитесь, что весь текст считывается.'],
          }
        ]
      }
    }
  },
  data() {
    return {
      step: 1,
      cameraIsOpen: false,
      isDesktop: false
    }
  },
  mounted() {
    this.contentDisplay === 'desktop' ? this.isDesktop = true : this.isDesktop = false
  },
  methods: {
    pickFile(file) {
      this.$emit('pickFile', file)
    },
    openCamera() {
      if (this.contentDisplay === 'mobile') {
        this.$refs.fileInput.click()
      } else {
        this.cameraIsOpen = true
      }
    },
    fileInputHandler(event) {
      if (event.target.files.length) {
        this.$emit('pickFile', event.target.files[0])
      } else {
        this.$emit('pickFile', null)
      }
    },
    closeCamera(data) {
      if (data.file) {
        this.$emit('pickFile', dataUrlToFile(data.file, 'udv.png'))
      }
      this.cameraIsOpen = false
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
    height: 100%;

    @media (min-width: 900px) {
      padding: 50px 80px;
    }
  }

  &__buttons {
    max-width: 315px;
    min-width: 315px;
    margin: 0 auto;
  }
}
</style>
