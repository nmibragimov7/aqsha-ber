<template>
  <div class='page'>
    <Header logo-small/>
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p v-if='!isAuth' class='text-center page__step m-0 mb-3'>Шаг 4 из 6</p>
        <p class='text-center page__text m-0 mb-3'>Сделайте селфи</p>
        <div v-if='!isAuth' class='steps d-flex align-items-center justify-content-between'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 4}]'></div>
        </div>
        <ScanDocForm v-if='!isLoadedFile'
                     classes='mb-2'
                     :blocks='blocks'
                     icon='self-icon'
                     text='Открыть камеру'
                     is-fourth-step
                     @pickFile='(file) => $emit("pickFile", "avatarFile", file)'/>
        <PickDocResult v-else
                       :file='avatarFile'
                       @stepHandler='uploadSelfi'
                       @goBack='$emit("goBack", "avatarFile")'/>
      </div>
      <ProcessedModal/>
    </div>
  </div>
</template>

<script>

import Header from "../../layout/Header/Header"
import ScanDocForm from "../ScanDocForm/ScanDocForm"
import PickDocResult from "../PickDocResult/PickDocResult"
import ProcessedModal from "@/components/common/modal/ProcessedModal/ProcessedModal"
import {tokenRegister} from "@/assets/js/ls";

export default {
  components: {PickDocResult, ScanDocForm, Header, ProcessedModal},
  props: {
    isDesktop: {
      type: Boolean,
      default: false
    },
    avatarFile: {
      default: null
    },
    isLoadedFile: {
      type: Boolean,
      default: false
    },
    isAuth: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      blocks: [
        {
          img: "selfi_get",
          text: ["Сделайте селфи. Снимите головной убор и очки, убедитесь, что лицо хорошо освещено и попадает в рамку."]
        }
      ]
    }
  },
  methods: {
    uploadSelfi() {
      if (this.avatarFile) {
        const _this = this;
        const multiForm = new FormData();
        _this.$modal.show("processed")
        multiForm.append("file", this.avatarFile)
        _this.$requests.uploadSelfie({
          options:{
            headers: {
              "content-type": "multipart/form-data",
              "Authorization": `Bearer ${tokenRegister.get()}`
            }
          },
          body: multiForm,
          onSuccess(response) {
            if (response.data.Success) {
              _this.$emit("stepHandler", "FifthStep")
              _this.$modal.hide("processed");
            }
          },
          onError() {
            alert("Ошибка")
          }
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.page {
  background: linear-gradient(45deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
  min-height: 40vh;
  border-radius: 0 0 20px 20px;

  @media (min-width: 900px) {
    background: url("assets/images/promo_icon.png") no-repeat 0 0/20%,
                url("assets/images/promo_icon_2.png") no-repeat 10% 100%/15%,
                url("assets/images/promo_icon_3.png") no-repeat 100% 70%/15%,
                linear-gradient(45deg, #F17C85 0%, #A267C3 27.08%, #5D54AB 49.32%, #8799F2 85.59%);
    min-height: 50vh;
  }

  &__wrap {
    position: relative;

    @media (min-width: 900px) {
      max-width: 800px;
    }
  }

  &__body {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
  }

  &__text,
  &__step {
    color: #FFF;
  }

  &__step {
    font-size: 24px;
    font-weight: 700;
  }

  &__form {
    padding: 50px 40px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  &__avatar {
    width: 100%;
    height: 100%;
    background: url("assets/images/circle.svg") no-repeat 50% 32px, url("assets/images/avatar-icon.png") no-repeat center;
  }
}
</style>
