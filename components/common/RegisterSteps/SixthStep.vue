<template>
  <div class='page'>
    <Header logo-small />
    <div class='container page__wrap'>
      <div class='page__body px-4'>
        <p class='text-center page__step m-0 mb-2'>Шаг 6 из 6</p>
        <p class='text-center page__text m-0 mb-2'>Дополнительные сведения</p>
        <div class='steps d-flex align-items-center justify-content-between mb-3'>
          <div v-for='num in 6'
               :key='num'
               class='steps__dot'
               :class='[{"steps__dot--active": num === 6}]'></div>
        </div>
        <div class='page__form d-flex flex-column mt-4'>
          <div class='page__form--wrap'>
            <div class='mb-4 mt-3'>
              <BaseInput :value='placeOfWork'
                         label='Место работы (название)'
                         @input='value => $emit("inputHandler", "placeOfWork", value)' />
            </div>
            <p class="text-center my-3">Доверительные контакты</p>
            <div class='mb-4'>
              <BaseInput :value='relativeName'
                         label='Имя родственника'
                         @input='value => $emit("inputHandler", "relativeName", value)' />
            </div>
            <div class='mb-4'>
              <BaseInput :value='relativeNumber'
                         label='Номер телефона'
                         mask='+7 (# # #) # # # - # # - # #'
                         :hasError='$v.relativeNumber.$error'
                         @input='value => $emit("inputHandler", "relativeNumber", value)' />
            </div>
            <div class='mb-4'>
              <BaseInput :value='friendName'
                         label='Имя друга или коллеги'
                         @input='value => $emit("inputHandler", "friendName", value)' />
            </div>
            <div class='mb-4'>
              <BaseInput :value='friendNumber'
                         label='Номер телефона'
                         mask='+7 (# # #) # # # - # # - # #'
                         :hasError='$v.friendNumber.$error'
                         @input='value => $emit("inputHandler", "friendNumber", value)' />
            </div>
            <BaseButton v-if='isDesktop'
                        uppercase
                        next
                        classes='mt-4'
                        :disabled='$v.relativeNumber.$error || $v.friendNumber.$error'
                        @click='confirm'>подтвердить
            </BaseButton>
          </div>
        </div>
        <BaseButton v-if='!isDesktop'
                    uppercase
                    next
                    classes='mt-4'
                    :disabled='$v.relativeNumber.$error || $v.friendNumber.$error'
                    @click='confirm'>подтвердить
        </BaseButton>
      </div>
    </div>
    <ProcessedModal />
  </div>
</template>

<script>
import { maxLength, minLength, required } from 'vuelidate/lib/validators'

import ProcessedModal from '../modal/ProcessedModal/ProcessedModal'
import BaseButton from '../../base/BaseButton/BaseButton'
import BaseInput from '../../base/BaseInput/BaseInput'
import Header from '../../layout/Header/Header'
import {cleanNumber} from "~/helpers/maskUtils";
import {tokenRegister} from "@/assets/js/ls";

export default {
  components: { Header, BaseInput, BaseButton, ProcessedModal },
  props: {
    isDesktop: {
      type: Boolean,
      default: false
    },
    placeOfWork: {
      type: String,
      default: ''
    },
    friendName: {
      type: String,
      default: ''
    },
    friendNumber: {
      type: String,
      default: ''
    },
    relativeNumber: {
      type: String,
      default: ''
    },
    relativeName: {
      type: String,
      default: ''
    }
  },
  validations: {
    friendNumber: {
      required,
      minLength: minLength(28),
      maxLength: maxLength(28)
    },
    relativeNumber: {
      required,
      minLength: minLength(28),
      maxLength: maxLength(28)
    }
  },
  methods:{
    confirm(){
      this.$v.friendNumber.$touch()
      this.$v.relativeNumber.$touch()
      if (!this.$v.friendNumber.$error && !this.$v.relativeNumber.$error) {
        const onSuccess = (response)=>{
          if(response.data.Success){
            this.$emit("confirm")
          }
        }
        const state = this.$store.getters["auth/userData"]
        const phones = []
        if(this.relativeName && this.relativeNumber){
          phones.push({
            name:this.relativeName,
            phone:cleanNumber(this.relativeNumber)
          })
        }
        if(this.friendName && this.friendNumber){
          phones.push({
            name:this.friendName,
            phone:cleanNumber(this.friendNumber)
          })
        }
        this.$requests.uploadAdditionalData({
          options:{
            headers:{
              "Authorization":`Bearer ${tokenRegister.get()}`
            }
          },
          body:{
            "Address": state.Address,
            "WorkCompany": this.placeOfWork,
            "Email":"te@m.ru",
            "Phones":phones
          },
          onSuccess
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.page {
  background: linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
  min-height: 40vh;
  border-radius: 0 0 20px 20px;

  @media (min-width: 900px) {
    background: url("assets/images/promo_icon.png") no-repeat 0 0/20%,
    url("assets/images/promo_icon_2.png") no-repeat 10% 100%/15%,
    url("assets/images/promo_icon_3.png") no-repeat 100% 70%/15%,
    linear-gradient(45deg, #8055A1, #6C83F3, #AE6E9C);
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
    padding: 20px 30px;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 10px;

    &--wrap {
      width: 100%;

      @media (min-width: 900px) {
        width: 45%;
        margin: 0 auto;
      }
    }
  }
}
</style>
