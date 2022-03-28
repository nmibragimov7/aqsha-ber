<template>
  <div :class="['input__wrap']" :style='{width: width + "%"}'>
    <label>
      <span v-if='label' class='input__label'>{{ label }}</span>
      <input
        v-mask='mask'
        :type='visibility'
        :placeholder='placeholder'
        :style='{color, backgroundColor: bg}'
        :class="['input',
          `${classes}`,
          {'input__promo': isPromo,
          'input__footer': isFooter,
          'input__password': isPassword,
          'input__register': isRegister}]"
        :value='value'
        :readonly='readonly'
        @input="$emit('input', $event.target.value)"
      />
      <img v-if='icon'
           class='input__icon'
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
      // this.visibility === 'text' ? this.visibility = 'password' : this.visibility = 'text'
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

  &__register {
    text-align: center;
  }

  &__password {
    color: #afafc0;
    font-size: 26px;
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
