import Vue from 'vue';

const watchWindow = {
  install(Vue) {
    Vue.mixin( {
      data: () => ({
        contentDisplay: null,
        windowWidth: window.innerWidth,
      }),
      watch: {
        windowWidth: {
          handler (value) {
            this.contentDisplay = this.updateWidth(value)
          },
          immediate: true
        }
      },
      mounted() {
        this.$nextTick(() => {
          window.addEventListener('resize', this.onResize)
        })
      },
      methods: {
        onResize() {
          this.windowWidth = window.innerWidth;
        },
        updateWidth(value) {
          if(value < 500) {
            return 'mobile';
          } else if(value < 950) {
            return 'tab';
          } else {
            return 'desktop'
          }
        }
      }
    })
  }
}

Vue.use(watchWindow);
