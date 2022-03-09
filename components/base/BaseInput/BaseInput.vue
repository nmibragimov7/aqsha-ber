<template>
  <div class='input__wrap'>
    <label>
      <span class='input__label'>{{ label }}</span>
      <input
        :type="type"
        :placeholder="placeholder"
        :class="['input', `${classes}__input`]"
        :value="value"
        :readonly="readonly"
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
      default: null
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    readonly: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang='scss' scoped>
.header__input {
  background: inherit !important;
  border: 2px solid #FFF !important;
  padding-left: 90px !important;
}
.footer__input {
  border: 0 !important;
  border-radius: 0px !important;
  border-bottom: 2px solid #FFF !important;
  background: transparent !important;
  text-align: center;
}
.input {
  background: #FFFFFF;
  border: 1px solid #E1EDF7;
  border-radius: 10px;
  padding: 15px 15px;
  outline: none;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: #FFF;
  width: 100%;
  &::placeholder {
    color: #FFF;
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
