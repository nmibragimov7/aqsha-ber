<template>
  <div class='code'>
    <img src='~/assets/images/close.svg'
         alt='Close'
         class='code--close'
         @click='close' />
    <p class='text-center m-0 mb-3 code__title'>Введите код из СМС</p>
    <div class='code__input--wrap'>
      <div class='position__absolute'>
        <div class='d-flex align-items-center justify-content-between mb-3'>
          <div v-for='idx of codeLength' :key='idx'>
            <input
              :ref='`input_${idx}`'
              type='text'
              @keydown='onKeyDown($event, idx)'
              class='code__input'
              @input='inputHandler($event, idx)'>
          </div>
        </div>
        <BaseButton classes='code__button' @click='sendCode'>{{ btnText }}</BaseButton>
        <p class='text-center code__text'>Отправить еще раз</p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../../base/BaseButton/BaseButton'

export default {
  name: 'SendCode',
  props: {
    name: {
      type: String,
      default: ''
    },
    code: {
      type: String
    },
    btnText: {
      type: String,
      default: ''
    }
  },
  components: { BaseButton },
  data() {
    return {
      data: '',
      codeLength: 4
    }
  },
  methods: {
    inputHandler(event, idx) {
      if (event.inputType === 'insertFromPaste') {
        const letters = event.target.value.trim().split('')
        let idx = 1
        for (const letter of letters) {
          if (letter.trim().length) {
            this.$refs[`input_${idx}`][0].value = letter
            idx++
            if (idx > this.codeLength) {
              idx = 1
            }
          }
        }
      } else {
        if (event.target.value.length > 1) {
          event.target.value = event.target.value.slice(1)
        }
        if (event.inputType !== 'deleteContentBackward') {
          if (idx === this.codeLength) {
            this.$refs.input_1[0].focus()
          } else {
            this.$refs[`input_${idx + 1}`][0].focus()
          }
        }
      }

      this.data = ''
      for(let index = 1; index <= this.codeLength; index++) {
        if(this.$refs[`input_${index}`][0].value) {
          this.data += `${this.$refs[`input_${index}`][0].value}`
        }
      }
      this.$emit('inputHandler', this.data)
    },
    onKeyDown(event, idx) {
      if (event.key === 'Backspace' && idx !== 1) {
        if (!event.target.value.length) {
          const input = this.$refs[`input_${idx - 1}`][0]
          input.focus()
        }
      }
    },
    sendCode() {
      switch (this.name) {
        case 'signIn':
          this.$emit('sendCode')
          break
        case 'sendCode':
          this.$emit('stepHandler')
          break
      }
    },
    close() {
      switch (this.name) {
        case 'signIn':
          this.$modal.hide('signIn')
          break
        case 'sendCode':
          this.$modal.hide('sendCode')
          break
      }
    }
  }
}
</script>

<style lang='scss'>
.position {

  &__absolute {
    position: absolute;
  }
}

.code {
  position: relative;

  &__title {
    font-weight: 800;
  }

  &__button {
    background: #3A2784 !important;
    color: #FFF !important;
  }

  &__input {
    height: 125px;
    color: #7080A9;
    font-weight: 800;
    font-size: 72px;
    border: 1px solid rgba(162, 162, 201, 0.47);
    border-radius: 10px;
    border: 1px solid #A2A2C9;
    margin: 0 5px;
    box-sizing: border-box;
    width: 70px;
    padding: 15px 10px;
    text-align: center;
    outline: none;

    &--wrap {
      position: relative;
      width: 320px;
      height: 284px;
    }

    &--hidden {
      width: 100%;
      height: 125px;
      color: #7080A9;
      font-size: 72px;
      font-weight: 800;
      padding: 0 20px;
      border: none;
      background: inherit;

      &:focus {
        border: none;
        outline: none;
      }
    }
  }

  &__text {
    font-weight: 700;
  }

  &--close {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
