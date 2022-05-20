<template>
  <component :is='currentComponent'
             :is-auth='!!isAuth'
             :is-desktop='isDesktop'
             :code='form.code'
             :phone='form.phone'
             :city='form.city'
             :street='form.street'
             :home='form.home'
             :apartment='form.apartment'
             :place-of-work='form.placeOfWork'
             :relative-name="form.relativeName"
             :friend-name="form.friendName"
             :friend-number="form.friendNumber"
             :relative-number="form.relativeNumber"
             :front-doc-file='form.frontDocFile'
             :back-doc-file='form.backDocFile'
             :avatar-file='form.avatarFile'
             :is-loaded-file='isLoadedFile'
             @inputHandler='inputHandler'
             @stepHandler='stepHandler'
             @goBack='goBack'
             @pickFile='pickFile'
             @confirm='confirm'></component>
</template>

<script>
import FirstStep from '../../components/common/RegisterSteps/FirstStep'
import SecondStep from '../../components/common/RegisterSteps/SecondStep'
import ThirdStep from '../../components/common/RegisterSteps/ThirdStep'
import FourthStep from '../../components/common/RegisterSteps/FourthStep'
import FifthStep from '../../components/common/RegisterSteps/FifthStep'
import SixthStep from '../../components/common/RegisterSteps/SixthStep'
export default {
  components: {
    FirstStep,
    SecondStep,
    ThirdStep,
    FourthStep,
    FifthStep,
    SixthStep
  },
  data() {
    return {
      form: {
        phone: '',
        code: '',
        city: '',
        street: '',
        home: '',
        apartment: '',
        position: "",
        frontDocFile: null,
        backDocFile: null,
        avatarFile: null,
        relativeName:"",
        relativeNumber:"",
        friendName:"",
        friendNumber:""

      },
      isLoadedFile: false,
      isDesktop: false,
      currentComponent: 'FirstStep'
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters['auth/isAuth']
    }
  },
  mounted() {
    if(!this.$store.state.auth.userData.iin){
      this.$router.push('/');
    } else if(this.isAuth) {
      this.currentComponent = 'SecondStep'
    }
    this.contentDisplay === 'desktop' ? this.isDesktop = true : this.isDesktop = false
  },
  methods: {
    inputHandler(name, value) {
      this.form[name] = value
    },
    stepHandler(componentName) {
      componentName === 'SecondStep' && this.$modal.hide('sendCode')
      if(componentName === 'ThirdStep' || componentName === 'FourthStep' || componentName === 'FifthStep') {
        this.isLoadedFile = false
      }
      if(componentName === 'FifthStep' && this.isAuth) {
        this.$router.replace('/approved')
        return
      }
      this.currentComponent = componentName
    },
    goBack(fileName) {
      this.form[fileName] = null
      this.isLoadedFile = false
    },
    pickFile(fileName, file) {
      this.form[fileName] = file
      this.isLoadedFile = !!file
    },
    confirm() {
      this.$modal.show('processed')
      setTimeout(() => {
        this.$modal.hide('processed')
        this.$router.push('/approved')
      }, 5000)
    }
  }
}
</script>

<style scoped>

</style>
