<script>
import { mapMutations } from 'vuex'

export default {
  name: 'formPaymentMethod',
  components: {},
  data() {
    return {
      PaymentMethod: {
        cardNumber: '',
        cardholderName: '',
        bankName: '',
        cvv: '',
        expireMonth: '',
        expireDay: ''
      }
    }
  },
  methods: {
    ...mapMutations(['SETCURRSTEP', 'SETFORMDATA']),
    submit() {
      console.log('1111111')

      this.$validator.validate().then(result => {
        if (result) {
          this.SETCURRSTEP(5)
          this.SETFORMDATA({
            name: 'PaymentMethod',
            value: this.PaymentMethod
          })
        } else {
          // do stuff if not valid.
          console.log('Error')
        }
      })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
