<template>
  <modal name='sendCode' :width='370' height='auto'>
    <div class='modal-getMoney d-flex flex-column align-items-center'>
      <SendCode name='sendCode'
                :code='code'
                btnText='ДАЛЕЕ'
                @stepHandler='(value, index) => $emit("stepHandler", value, index)'
                @inputHandler='(value, index) => $emit("inputHandler", value)' />
    </div>
  </modal>
</template>

<script>
import SendCode from '../../SendCode/SendCode'

export default {
  name: 'SendCodeModal',
  props: {
    code: {
      type: String
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
