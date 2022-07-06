<template>
  <modal name='sendCode' :shift-y="0.4" :width='370' height='auto' :styles="{borderRadius:'17px'}">
    <div class='modal-getMoney d-flex flex-column align-items-center'>
      <SendCode name='sendCode'
                :code='code'
                :btn-text='text'
                @stepHandler='(value, index) => $emit("stepHandler", value, index)'
                @inputHandler='value => $emit("inputHandler", value)' />
    </div>
  </modal>
</template>

<script>
import SendCode from '../../SendCode/SendCode'

export default {
  name: 'SendCodeModal',
  props: {
    code: {
      type: String,
      default:""
    },
    text: {
      type: String,
      default: 'ДАЛЕЕ'
    }
  },
  components: { SendCode }
}
</script>

<style lang='scss' scoped>

.modal-getMoney {
  padding: 20px 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
}
</style>
