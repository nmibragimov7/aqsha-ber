<template>
  <div>
    <div v-if='isDesktop' class='row align-items-stretch'>
      <div v-for='(block, index) in items'
           :key='index'
           :class='{"col-12": items.length === 1}'
           class='col-6 mb-4'>
        <div class='page__form'>
          <div class='row'>
            <div class='col-4 d-flex justify-content-center align-items-start'>
              <img :src='"~/assets/images/" + block.img + ".svg"'
                   :alt='block.img' />
            </div>
            <div class='col-8'>
              <p v-for='(t, idx) in block.text'
                 :key='idx'
                 :class='{"mb-3": !idx}'
                 class='m-0'>{{ t }}</p>
            </div>
          </div>
          <div v-if='isFourthStep' class='page__buttons'>
            <BaseButton :icon='icon' classes='mb-2' @click='openCamera'>{{ text }}</BaseButton>
<!--            <BasePickFile name='load-document'-->
<!--                          text='Загрузить'-->
<!--                          @pickFile='pickFile' />-->
          </div>
        </div>
      </div>
      <div v-if='!isFourthStep' class='page__buttons'>
        <BaseButton :icon='icon' classes='mb-2' @click='openCamera'>{{ text }}</BaseButton>
<!--        <BasePickFile name='load-document'-->
<!--                      text='Загрузить'-->
<!--                      @pickFile='pickFile' />-->
      </div>
    </div>
    <div v-else class='page__form'>
      <div v-for='(block, index) in items'
           :key='index'
           class='row mb-3 d-flex align-items-center'>
        <div class='col-3'>
          <div class='d-flex justify-content-center'>
            <img :src='"~/assets/images/" + block.img + ".svg"'
                 :alt='block.img' />
          </div>
        </div>
        <div class='col-9'>
          <div class="pl-1">
            <p v-for='(t, idx) in block.text'
               :key='idx'
               class='m-0 text-small'>{{ t }}</p>
          </div>
        </div>
      </div>
      <BaseButton :icon='icon' classes='mb-2' @click='openCamera'>{{ text }}</BaseButton>
      <BasePickFile v-if="isDesktop" name='load-document'
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
            text: ['Подготовьте документ: вам нужно будет отсканировать сначала лицевую, затем обратную сторону удостоврения личности'],
          },
          {
            img: 'photo',
            text: ['Наведите камеру на удостоверение. Расположите документ так, чтобы весь документ попадал в кадр и убедитесь что фокус камеры наведён на текст'],
          }
        ]
      }
    }
  },
  data() {
    return {
      step: 1,
      cameraIsOpen: false,
      isDesktop: false,
      items: [...this.blocks]
    }
  },
  mounted() {
    this.contentDisplay === 'desktop' ? this.isDesktop = true : this.isDesktop = false
    if(this.isDesktop && this.text === 'Сканировать') {
      const items = [...this.items]
      this.items = items.map((item, idx) => {
        if(idx === 0) {
          return {
            img: item.img,
            text: ['Отсканируйте обе стороны удостоверения: сначала лицевую, затем оборотную.']
          }
        }
        if(idx === 1) {
          return {
            img: 'photo_2',
            text: [
              'Как сканировать документ:',
              '1.  наведите камеру на удостоверение личности',
              '2.  расположите документ так, чтобы он попадал в рамку',
              '3.  убедитесь, что фокус камеры наведен на текст'
            ]
          }
        }
        return item
      })
    }
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
    padding: 50px 35px;
    background: #FFFFFF;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    height: 100%;
    line-height: 150%;

    @media (min-width: 900px) {
      padding: 40px 30px;
    }
  }

  &__buttons {
    max-width: 315px;
    min-width: 315px;
    margin: 0 auto;
  }
}
.text-small{
  font-size: 0.8rem;
  line-height: 1.3rem;
}
</style>
