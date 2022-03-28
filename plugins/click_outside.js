import Vue from 'vue'

const directives = {
  bind(el, value) {
    document.addEventListener(
      'click',
      directives.listener.bind(null, el, value.value)
    )
  },
  unbind(_, value) {
    document.removeEventListener('click', value.listener)
  },
  listener(el, handler) {
    document.addEventListener('click', (e) => {
      const target = e.target
      if (el.contains(target)) return
      handler()
    })
  },
}

Vue.directive('click-outside', directives)
