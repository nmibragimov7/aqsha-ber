<template>
  <PageWrap title='Личный кабинет'>
    <div class='page__header p-4'>
      <div class='row mb-2'>
        <div class='col-6 col-lg-4 mb-3'>
          <div class='profile__image h-100 w-100'></div>
        </div>
        <div class='col-6 col-lg-8 d-flex flex-column justify-content-between' :class='{"p-0": !isDesktop}'>
          <p class='m-0'>{{ user.Surname }}</p>
          <p class='m-0'>{{ user.Name }}</p>
          <p v-if="user.MiddleName" class='m-0'>{{ user.MiddleName }}</p>
          <p class='m-0'>№ 21312421</p>
          <p class='m-0'>ИИН 000 302 500 679</p>
        </div>
      </div>
      <div class='row mb-0'>
        <div class='col-6 col-lg-4 my-1'>
          <p class='m-0'><b>Дата рождения:</b></p>
          <p class='m-0'>{{ new Date(user.BirthDate) | date("dd.MM.yyyy") }}</p>
        </div>
        <div class='col-6 col-lg-8' :class='{"p-0": !isDesktop}'>
          <p class='m-0'><b>Пол:</b></p>
          <p class='m-0'>{{ user.Gender === 0 ? "Мужской" : "Женский" }}</p>
        </div>
        <div class='col-6 col-lg-4'>
          <p class='m-0'><b>Телефон:</b></p>
          <p class='m-0'>+7 {{ user.Phone | VMask("(###)-###-##-##") }}</p>
        </div>
        <div class='col-6 col-lg-8' :class='{"p-0": !isDesktop}'>
          <p class='m-0'><b>E-mail:</b></p>
          <p class='m-0'>ten@mail.ru</p>
        </div>
      </div>
    </div>
    <template #page__footer>
      <div class='page__action'>
        <BaseButton bg='#3A2784' color='#fff' classes='mt-4'>
          <span class="uppercase">+ новый микрокредит</span>
        </BaseButton>
      </div>
      <CreditHistory :history="history"/>
      <div class='profile__block p-4 mt-4'>
        <div class='profile__block--wrap'>
          <BaseInput v-model='password'
                     class='mb-3'
                     type='password'
                     is-paassword
                     :hasError='$v.password && $v.password.$dirty && $v.password.$error'
                     :validations='$v.password'
                     :placeholder='isPassExist ? "Старый пароль": "Пароль"'/>
          <BaseInput v-if='isPassExist'
                     :value='newPassword'
                     @input='value => inputHandler(value)'
                     class='mb-3'
                     type='password'
                     is-password
                     :hasError='$v.newPassword && $v.newPassword.$dirty && $v.newPassword.$error'
                     :validations='$v.newPassword'
                     placeholder='Новый пароль'/>
          <div v-if='newPassword'
               class='d-flex justify-content-between'>
            <div v-for='num in 4'
                 :key='num'
                 :class='["profile__level" ,
                          {"mr-2": num < 4, "opacity": num > reliability}]'/>
          </div>
          <span v-if='reliability === 1' class='profile__level-hint mb-3'>Ненадежный</span>
          <span v-if='reliability === 2' class='profile__level-hint mb-3'>Слабо надежный</span>
          <span v-if='reliability === 3' class='profile__level-hint mb-3'>Надежный</span>
          <span v-if='reliability === 4' class='profile__level-hint mb-3'>Очень надежный</span>
          <p class='m-0 mb-3 text-center profile__description'>
            Должен состоять минимум из 8 символов и содержать
            хотя бы одну цифру, символ и заглавную букву.
            <br>
            <span class='profile__description--red'>Не используйте пробелы и кириллицу.</span>
          </p>
          <div class='profile__line mb-3'/>
          <p class='m-0 mb-3 text-center profile__description text-black'>
            Мы отправим код подтверждения смены пароля смс-сообщением.
          </p>
          <BaseButton classes='profile__button--blue'
                      :disabled='$v.password.$error || $v.newPassword.$error'
                      next
                      @click="changePassword">Изменить</BaseButton>
        </div>
      </div>
      <div style="height: 300px" class="px-3 mt-4">
        <BaseButton uppercase @click="goDocuments">Документы</BaseButton>
      </div>
    </template>
  </PageWrap>
</template>
<script>
import { required } from 'vuelidate/lib/validators'

import PageWrap from "@/components/common/PageWrap.vue"
import BaseInput from "@/components/base/BaseInput/BaseInput"
import BaseButton from "@/components/base/BaseButton/BaseButton"
import CreditHistory from "@/components/common/CreditHistory/CreditHistory"

export default {
  components: {CreditHistory, BaseButton, BaseInput, PageWrap},
  data() {
    return {
      password: null,
      newPassword: null,
      isPassExist: true,
      isDesktop: false,
      history: [],
      reliability: 0,
      user: {
        BirthDate: "2001-06-27T00:00:00",
        Email: null,
        MiddleName: null,
        Gender: 0,
        Name: "Anonim",
        Phone: "7024829563",
        Surname: "Anonim"
      }
    }
  },
  validations: {
    password: {
      isValidPassword(value) {
        if(!value) {
          return true
        }
        return this.isValidPassword(value)
      },
      required
    },
    newPassword: {
      isValidPassword(value) {
        if(!value) {
          return true
        }
        return this.isValidPassword(value)
      },
      required
    }
  },
  mounted() {
    this.contentDisplay === "desktop" ? this.isDesktop = true : this.isDesktop = false
    this.getClientInfo();
    this.getHistory()
  },
  methods: {
    isValidPassword(value) {
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
    },
    inputHandler(value) {
      this.newPassword = value
      if(!value) {
        this.reliability = 0
      }
      // первый уровень минимум 1 строчная и 1 заглавная буква
      if(/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{2,}$/.test(value)) {
        this.reliability = 1
      }
      // второй уровень минимум 1 строчная, 1 заглавная буква и одна цифра
      if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{3,}$/.test(value)) {
        this.reliability = 2
      }
      // третий уровень минимум 1 строчная, 1 заглавная буква, одна цифра и 1 спец символ
      if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/.test(value)) {
        this.reliability = 3
      }
      // четвертый уровень минимум 1 строчная, 1 заглавная буква, одна цифра, 1 спец символ и минимум 8 символов
      if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)) {
        this.reliability = 4
      }
    },
    getClientInfo() {
      const _this = this
      this.$requests.getClientInfo({
        onSuccess(response) {
          if (response.data.Success) {
            _this.user = response.data.Data
          }
        }
      })
    },
    goDocuments(){
      this.$router.push("/documents")
    },
    getHistory() {
      const _this = this
      this.$requests.getLoanHistory({
        onSuccess(response) {
          if (response.data.Success) {
            _this.history = response.data.Data
          }
        }
      })
    },
    changePassword() {
      this.$v.password.$touch()
      this.$v.newPassword.$touch()
      if (!this.$v.password.$error && !this.$v.newPassword.$error) {
        const oldPassword = this.password;
        const password = this.newPassword;
        this.$requests.changePassword({
          body: {
            oldPassword,
            password
          },
          onSuccess(res) {
            console.log(res)
          }
        })
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.opacity {
  opacity: 0;
}

.text-black {
  width: 60%;
  margin: 0 auto;
  color: #322443 !important;
}

.page {
  &__header {
    font-size: 16px;

    @media (min-width: 900px) {
      padding: 25px 100px !important;
    }
  }

  &__action {
    max-width: 325px;
    margin: 0 auto;
  }
}

.profile {

  &__line {
    border: 1px solid #D3D3E6;
  }

  &__image {
    background-color: #C4C4C4;
    max-width: 135px;
    min-height: 157px;
  }

  &__block {
    background: #fff;
    border-radius: 15px;
    color: #322443;
    font-size: 18px;
    box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.05), -7px -7px 13px rgba(0, 0, 0, 0.07);

    @media (min-width: 900px) {
      padding: 25px 100px !important;
    }

    &--wrap {
      @media (min-width: 900px) {
        max-width: 325px;
        margin: 0 auto;
      }
    }
  }

  &__title {
    font-size: 26px;
    font-weight: 600;
  }

  &__line {
    border: 1px solid #D3D3E6;
  }

  &__text {
    font-size: 14px;
  }

  &__level {
    background: linear-gradient(89.77deg, #FF8D65 23.04%, #974ECD 99.94%);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    height: 6px;
    flex-grow: 1;

    &:nth-child(1) {
      background: linear-gradient(90.12deg, #FF8D65 60%, #974ECD 85.86%);
    }

    &:nth-child(2) {
      background: linear-gradient(90.12deg, #FF8D65 30%, #974ECD 85.86%);
    }

    &:nth-of-type(3) {
      background: linear-gradient(90.12deg, #FF8D65 5%, #974ECD 85.86%);
    }

    &:nth-of-type(4) {
      background: linear-gradient(90.12deg, #FF8D65 0%, #974ECD 85.86%);
    }

    &-hint {
      font-size: 9px;
      color: #EB5757;
    }
  }

  &__description {
    font-size: 12px;
    line-height: 150%;
    color: #6F6FB0;

    &--red {
      color: #EB5757;
    }
  }
}
</style>
