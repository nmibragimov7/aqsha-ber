<template>
  <div class="wrap" :class="{open:isOpen}">
    <div class="wrap__purple"/>
    <div class="wrap__video-wrap">
      <video ref="videoRefBg" width="100%" height="100%"></video>
      <video ref="videoRef" width="100%" style="display: none" height="100%"></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "CapturePhoto",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isOpen: {
      async handler(value) {
        if (value) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: false,
              video: {
                width:"300px",
                height:'1000px'
              }
            })
            this.$refs.videoRefBg.srcObject = stream
            this.$refs.videoRef.srcObject = stream
            this.$refs.videoRefBg.play()
            this.$refs.videoRef.play()
          } catch (e) {
            console.log(e)
            this.$emit("close", "Закрыли доступ к камере")
          }
        } else {
          this.$refs.videoRef.pause();
          this.$emit("close", "Отмена")
        }
      },
    }
  }
}
</script>


<style lang="scss" scoped>
.wrap {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  &__purple {
    //background: rgba(117, 122, 226, 0.87);
    background: radial-gradient(circle at center, transparent 0 50%, rgba(117, 122, 226, 0.87) 51% 100%);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  &__video-wrap {
    flex-grow: 1;
  }
}
</style>
