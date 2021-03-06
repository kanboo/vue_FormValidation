// 參考範本：https://github.com/milkmidi/2017_vue_vuex_hello_world
/* eslint no-shadow:0, no-param-reassign:0 */
import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  currStep: 1,
  validationSteps: [
    {
      title: 'Create Account',
      desc: 'Glad to see you here!',
      data: 'CreateAccount',
      component: 'FormCreateAccount'
    },
    {
      title: 'General Information',
      desc: 'Tell us who you are!',
      data: 'GeneralInformation',
      component: 'FormGeneralInformation'
    },
    {
      title: 'Update Profile Picture',
      desc: 'We wanna know you more!',
      data: 'ProfilePicture',
      component: 'FormUpdateProfilePicture'
    },
    {
      title: 'Payment Method',
      desc: 'Add your credit card information!',
      data: 'PaymentMethod',
      component: 'FormPaymentMethod'
    },
    {
      title: 'Congratulations',
      desc: 'Now you’re one of us!',
      component: 'formCongratulations'
    }
  ],
  formData: {
    CreateAccount: {
      email: '',
      password: '',
      comfirmpassword: ''
    },
    GeneralInformation: {
      name: '',
      phone: '',
      birthDate: '',
      address: {
        city: '',
        dist: '',
        detail: ''
      }
    },
    ProfilePicture: {
      file: []
    },
    PaymentMethod: {
      cardNumber: '',
      cardholderName: '',
      bankName: '',
      cvv: '',
      expireMonth: '',
      expireDay: ''
    }
  }
}

/*
vue 裡用
import { mapGetters } from 'vuex'
// 方法1(不推)
this.$store.state.showLoading
// 方法2(建議)
computed: {
  ...mapGetters(['showLoading', 'isLogin', 'userName', 'formData'])
},
 */
const getters = {
  currStep: state => state.currStep,
  formData: state => state.formData
}

/*
vue 裡用
import { mapMutations } from 'vuex'
// 方法1(不推)
this.$store.commit('SHOWLOADING', true)
// 方法2(建議)
methods: {
  ...mapMutations(['SHOWLOADING', 'ISLOGIN', 'FORMDATA'])
}

mutation 必須是「同步」函數, 很重要
*/
const mutations = {
  SETCURRSTEP(state, value) {
    state.currStep = value
  },
  SETFORMDATA(state, { name, value }) {
    state.formData[name] = value
  },
  RESETFORMDATA(state, value) {
    state.formData = {
      CreateAccount: {
        email: '',
        password: '',
        comfirmpassword: ''
      },
      GeneralInformation: {
        name: '',
        phone: '',
        birthDate: '',
        address: {
          city: '',
          dist: '',
          detail: ''
        }
      },
      ProfilePicture: {
        file: []
      },
      PaymentMethod: {
        cardNumber: '',
        cardholderName: '',
        bankName: '',
        cvv: '',
        expireMonth: '',
        expireDay: ''
      }
    }
  }
}

/*
vue 裡用
import { mapActions } from 'vuex'
// 方法1(不推)
this.$store.dispatch('loading', true)
// 方法2(建議)
methods: {
  ...mapActions(['loading','login']),
}

Action 類似於 mutation，不同在於：
Action 提交的是 mutation，而不是直接變更狀態。
Action 可以包含任意異步操作。
Action 可以非同步，但一定只能 return Promise
*/
const actions = {
  loading({ commit }, value) {
    commit('SHOWLOADING', value)
  },
  login({ commit }, { email, password }) {
    return new Promise(resolve => {
      commit('SHOWLOADING', true)
      console.log('action login', email, password)
      setTimeout(async () => {
        const { data } = await axios.get('api.txt')
        if (data.status === 'ok') {
          commit('USERNAME', data.name)
          // action 不應該直接修改 state 的值,
          // 要使用 commit 的方式呼叫 mutations 去改值
          // 以下寫法在嚴格模式會發生錯誤
          // state.isLogin = true;
          commit('ISLOGIN', true)
        }
        resolve(data)
        commit('SHOWLOADING', false)
      }, 1000)
    })
  }
}

// https://vuex.vuejs.org/en/plugins.html
// Plugins
const myPlugin = store => {
  // called when the store is initialized
  store.subscribe(mutation => {
    // called after every mutation.
    console.log(mutation)
    // The mutation comes in the format of { type, payload }.
  })
}

export default new Vuex.Store({
  plugins: [myPlugin],
  state,
  getters,
  actions,
  mutations,
  strict: true // 嚴格模式
})
