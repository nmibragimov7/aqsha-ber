<template>
  <div class='page__form'>
    <div v-for='(block, index) in blocks'
         :key='index'
         class='row mb-3 d-flex align-items-center'>
      <div class='col-4'>
        <div class='d-flex justify-content-center'>
          <img :src='"~/assets/images/" + block.img + ".svg"'
               :alt='block.img'/>
        </div>
      </div>
      <div class='col-8'>
        <p class='m-0'>{{ block.text }}</p>
      </div>
    </div>
    <BaseButton :icon="icon" classes="mb-2" @click="openCamera">{{ text }}</BaseButton>
    <BasePickFile name='load-document'
                  text='Загрузить'
                  @pickFile='pickFile'/>
    <CapturePhoto :is-open="cameraIsOpen" @close="closeCamera"/>
    <input ref="fileInput"
           type="file"
           style="display: none"
           accept="image/*"
           capture="environment"
           @change="fileInputHandler">
  </div>
</template>

<script>
import BaseButton from "../../base/BaseButton/BaseButton"
import BasePickFile from "../../base/BasePickFile/BasePickFile"
import CapturePhoto from "@/components/common/CapturePhoto/CapturePhoto.vue";
import {dataUrlToFile} from "@/assets/js/dataURLtoFile";

export default {
  name: "ScanDocForm",
  components: {BasePickFile, BaseButton, CapturePhoto},
  mixins: ["watchWindow"],
  props: {
    text: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    blocks: {
      type: Array,
      default() {
        return [
          {
            img: "scan",
            text: "Отсканируйте обе стороны удостоверения: сначала лицевую, затем оборотную."
          },
          {
            img: "photo",
            text: "Наведите камеру на удостоверение. Расположите документ так, чтобы он попадал в рамку и убедитесь, что весь текст считывается."
          }
        ]
      }
    }
  },
  data() {
    return {
      step: 1,
      cameraIsOpen: false
    }
  },
  methods: {
    pickFile(file) {
      this.$emit("pickFile", file)
    },
    openCamera() {
      if (this.contentDisplay === "mobile") {
        this.$refs.fileInput.click()
      } else {
        this.cameraIsOpen = true
      }
    },
    fileInputHandler(event) {
      if (event.target.files.length) {
        this.$emit("pickFile", event.target.files[0])
      } else {
        this.$emit("pickFile", null)
      }
    },
    closeCamera(data) {
      if(data.file){
        this.$emit("pickFile", dataUrlToFile(data.file,"udv.png"))
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
  }
}
</style>
