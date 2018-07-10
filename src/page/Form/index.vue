<script>
import FormCreateAccount from '@/components/FormCreateAccount'
import FormGeneralInfomation from '@/components/FormGeneralInfomation'
import FormUpdateProfilePicture from '@/components/FormUpdateProfilePicture'
import FormPaymentMethod from '@/components/FormPaymentMethod'

export default {
  name: 'Form',
  components: {
    FormCreateAccount,
    FormGeneralInfomation,
    FormUpdateProfilePicture,
    FormPaymentMethod
  },
  data() {
    return {
      currStep: 1,
      validationSteps: [
        {
          title: 'Create Account',
          desc: 'Glad to see you here!',
          data: 'CreateAccount',
          component: 'FormCreateAccount'
        },
        {
          title: 'General Infomation',
          desc: 'Tell us who you are!',
          data: 'GeneralInfomation',
          component: 'FormGeneralInfomation'
        },
        {
          title: 'Update Profile Picture',
          desc: 'We wanna know you more!',
          data: 'ProfilePicture',
          component: 'FormUpdateProfilePicture'
        },
        {
          title: 'Payment Method',
          desc: 'Add your credit card infomation! ',
          PaymentMethod: 'CreateAccount',
          component: 'FormPaymentMethod'
        }
      ],
      formData: {
        CreateAccount: {
          email: '',
          password: '',
          comfirmpassword: ''
        },
        GeneralInfomation: {
          name: '',
          phone: '',
          birthdate: '',
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
  },
  methods: {
    next() {
      this.currStep = this.currStep + 1
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
