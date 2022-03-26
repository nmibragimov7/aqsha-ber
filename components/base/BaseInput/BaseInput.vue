<template>
  <div :class="['input__wrap', `${wrapClasses}`]">
    <label>
      <span v-if='label' class='input__label'>{{ label }}</span>
      <input
        v-mask='mask'
        :type='visibility'
        :placeholder='placeholder'
        :style='{color}'
        :class="['input', `${classes}`]"
        :value='value'
        :readonly='readonly'
        @input="$emit('input', $event.target.value)"
      />
      <img v-if='icon'
           class='input__icon'
           :src='require(`@/assets/images/${icon}.svg`)' />
      <img v-if='type === "password"'
           draggable="false"
           class='input__password'
           :class='[{ "input__password--hidden": visibility === "password" }]'
           :src='visibility !== "password" ? require(`@/assets/images/shown.svg`) : require(`@/assets/images/hidden.svg`)'
           @mousedown='passwordHandler("text")'
           @mouseup="passwordHandler('password')"
           @mouseleave="passwordHandler('password')"
           @touchstart="passwordHandler('text')"
           @touchcancel="passwordHandler('password')" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#000'
    },
    wrapClasses: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    mask: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      visibility: this.type
    }
  },
  methods: {
    passwordHandler(type) {
      console.log('kek')
      this.visibility = type
      // this.visibility === 'text' ? this.visibility = 'password' : this.visibility = 'text'
    }
  }
}
</script>

<style lang='scss' scoped>
.username__input {
  color: #322443 !important;

  &::placeholder {
    color: #A59FAC !important;
  }
}

.header__input {
  background: inherit !important;
  border: 2px solid #FFF !important;
  padding-left: 80px !important;
  color: #FFF !important;

  &::placeholder {
    color: #FFF !important;
  }
}
.footer__input {
  border: 0 !important;
  border-radius: 0px !important;
  border-bottom: 2px solid rgba(255, 255, 255, 0.4) !important;
  background: transparent !important;
  text-align: center;

  &:focus {
    border-bottom: 2px solid rgb(255, 255, 255) !important;

    &::placeholder {
      color: rgb(255, 255, 255) !important;
    }
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4) !important;
  }
}

.input {
  background: #FFFFFF;
  border: 1px solid rgba(162, 162, 201, 0.47);;
  border-radius: 10px;
  padding: 15px 15px;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  color: #322443;
  width: 100%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
    font-size: 22px;
  }

  &__label {
    position: absolute;
    font-size: 12px;
    top: -9px;
    left: 15px;
    background: #FFF;
    padding: 3px;
    color: rgba(50, 36, 67, 0.5);
    line-height: 100%;
  }

  &__icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__wrap {
    position: relative;
  }

  &__password {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);

    &--hidden {
      transform: translateY(0);
    }
  }
}
.change__password{
  &__input{
    color: #afafc0 !important;
    font-size: 26px !important;
    padding: 12px 60px 12px 15px;
  }
}
</style>
