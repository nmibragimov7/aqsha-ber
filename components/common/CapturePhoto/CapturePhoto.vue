<template>
  <div class="wrap" :class="{open:isOpen}">
    <div class="wrap__video-wrap">
      <video ref="videoRef" class="wrap__video"></video>
      <p v-if="isLoading" class="text-center">Грузится</p>
      <div class="wrap__footer">
        <BaseButton bg="#3A2784" color="#fff" classes="mb-3" @click="snapShot">Сделать фото</BaseButton>
        <BaseButton prev @click="closeCamera">Отмена</BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton/BaseButton";

export default {
  name: "CapturePhoto",
  components: {
    BaseButton
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isLoading: true
    }
  },
  watch: {
    isOpen: {
      async handler(value) {
        if (value) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({
              audio: false,
              video: true
            })
            this.$refs.videoRef.srcObject = stream
            this.$refs.videoRef.oncanplay = () => {
              this.isLoading = false
            }
            this.$refs.videoRef.play()
          } catch (e) {
            this.closeCamera({message: "Закрыли доступ к камере"})
          }
        } else {
          this.closeCamera()
        }
      },
    }
  },
  methods: {
    snapShot() {
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      // const ratio = this.$refs.videoRef.offsetWidth/this.$refs.videoRef.offsetHeight;
      // const w = this.$refs.videoRef.offsetWidth-100;
      // const h = parseInt(w/ratio,10);
      canvas.width = this.$refs.videoRef.offsetWidth
      canvas.height = this.$refs.videoRef.offsetHeight
      ctx.drawImage(this.$refs.videoRef, 0, 0, this.$refs.videoRef.offsetWidth, this.$refs.videoRef.offsetHeight)
      const base64 = canvas.toDataURL("image/png");
      this.closeCamera({
        file: base64
      })
    },
    closeCamera(data = {message: "Отмена"}) {
      this.$refs.videoRef.pause();
      this.$emit("close", data)
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
  background: rgba(0, 0, 0, 0.35);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  &__video-wrap {
    overflow: hidden;
    padding: 20px;
    max-width: 450px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 30px;
  }

  &__video {
    max-height: 450px;
    width: 100%;
  }
}
</style>
