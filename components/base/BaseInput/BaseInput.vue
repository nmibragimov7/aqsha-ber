<template>
  <div :class="['input__wrap', `${wrapClasses}`]">
    <label>
      <span class='input__label'>{{ label }}</span>
      <input
        v-mask='mask'
        :type='type'
        :placeholder='placeholder'
        :class="['input', `${classes}__input`]"
        :value='value'
        :readonly='readonly'
        @input="$emit('input', $event.target.value)"
      />
      <img v-if='icon'
           class='input__icon'
           :src='require(`@/assets/images/${icon}.svg`)'/>
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
      default: ""
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
  border-bottom: 2px solid #FFF !important;
  background: transparent !important;
  text-align: center;

  &::placeholder {
    color: #FFF !important;
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
  font-size: 22px;
  color: rgba(0, 0, 0, 0.5);
  width: 100%;

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
    //text-align: center;
    font-size: 22px;
  }

  &__label {
    position: absolute;
    font-size: 12px;
  }

  &__icon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  &__wrap {
    position: relative;

    & label {
      position: relative;
    }
  }
}
</style>
