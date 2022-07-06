<template>
  <div :class="['input__wrap']" :style='{width: width + "%"}'>
    <label>
      <span v-if='label'
            class='input__label'
            :class="{'input__label--error': hasError,
                     'input__label--success': validations && validations.$dirty && !validations.$error}">{{ label }}</span>
      <input
        v-mask='mask'
        :type='visibility'
        :masked="false"
        :placeholder='placeholder'
        :style='{color, backgroundColor: bg}'
        :class="['input',
          `${classes}`,
          {'input--error': hasError,
          'input--success': validations && validations.$dirty && !validations.$error,
          'input__promo': isPromo,
          'input__footer': isFooter,
          'input__password': isPassword,
          'input__register': isRegister}]"
        :value='value'
        :readonly='readonly'
        @input="$emit('input', $event.target.value)"
      />
      <small v-if='validations && validations.$dirty && ("isValidPromoCode" in validations) && !validations.isValidPromoCode'
             class='input__message input__message--error'>Проверьте правильность написания</small>
      <small v-if='validations && validations.$dirty && ("isValidPromoCode" in validations) && validations.isValidPromoCode'
             class='input__message input__message--success'>Промокод активирован</small>
      <small v-if='validations && validations.$dirty && ("isValidPassword" in validations) && !validations.isValidPassword'
             class='input__message input__message--error'>не валидный пароль</small>
      <small v-if='validations && validations.$dirty && ("isValidIin" in validations) && !validations.isValidIin'
             class='input__message input__message--error'>не валидный ИИН</small>
      <small v-if='validations && validations.$dirty && ("required" in validations) && !validations.required'
             class='input__message input__message--error'>обязательное поле</small>
      <small v-if='validations && validations.$dirty && ("minLength" in validations) && !validations.minLength'
             class='input__message input__message--error'>минимальное количество {{validations.$params.minLength.min}}</small>
      <small v-if='validations && validations.$dirty && ("maxLength" in validations) && !validations.maxLength'
             class='input__message input__message--error'>максимальное количество {{validations.$params.maxLength.max}}</small>
      <img v-if='icon'
           class='input__icon'
           :style='{left: left, right: right}'
           :src='require(`@/assets/images/${icon}.svg`)' />
      <img v-if='type === "password"'
           draggable="false"
           class='input__password--icon'
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
    width: {
      type: Number,
      default: 100
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
    bg: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ''
    },
    mask: {
      type: String,
      required: false,
      default: ''
    },
    isPromo: {
      type: Boolean,
      default: false
    },
    isFooter: {
      type: Boolean,
      default: false
    },
    isPassword: {
      type: Boolean,
      default: false
    },
    isRegister: {
      type: Boolean,
      default: false
    },
    hasError: {
      type: Boolean,
      default: false
    },
    validations: {
      default: null
    },
    left: {
      type: String,
      default: '20px'
    },
    right: {
      type: String,
      default: 'auto'
    }
  },
  data() {
    return {
      visibility: this.type
    }
  },
  methods: {
    passwordHandler(type) {
      this.visibility = type
    }
  }
}
</script>

<style lang='scss' scoped>
.input {
  background: #FFFFFF;
  border: 1px solid rgba(162, 162, 201, 0.47);;
  border-radius: 10px;
  padding: 15px 15px;
  outline: none;
  font-family: inherit;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  color: #322443;
  width: 100%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
    font-size: 22px;
  }

  &__value {

    &--error {
      color: #ED6E6E !important;
    }

    &--success {
      color: #81C688 !important;
    }
  }

  &--error {
    border-color: #ED6E6E !important;
  }

  &--success {
    border-color: #81C688 !important;
  }

  &__label {
    position: absolute;
    font-size: 12px;
    top: -9px;
    left: 10px;
    background: #FFF;
    padding: 3px;
    color: rgba(50, 36, 67, 0.5);
    line-height: 100%;

    &--error {
      color: #ED6E6E !important;
    }

    &--success {
      color: #81C688 !important;
    }
  }

  &__message {
    font-size: 12px;
    position: absolute;
    right: 0;
    bottom: -20px;
    left: 0;

    &--error {
      color: #ED6E6E !important;
    }

    &--success {
      color: #81C688 !important;
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &__wrap {
    position: relative;
  }

  &__register {
    text-align: center;
  }

  &__password {
    color: #afafc0;
    //font-size: 26px;
    padding: 12px 60px 12px 15px;

    &--icon {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);

      &--hidden {
        transform: translateY(0);
      }
    }
  }

  &__promo {
    border: 2px solid #FFF;

    &::placeholder {
      color: #FFF;
    }
  }

  &__footer {
    border: 0;
    border-radius: 0px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);
    background: transparent;
    text-align: center;

    &:focus {
      border-bottom: 2px solid rgb(255, 255, 255);

      &::placeholder {
        color: rgb(255, 255, 255);
      }
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>
