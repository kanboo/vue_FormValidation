<script>
import { mapMutations } from 'vuex'

export default {
  name: 'formCreateAccount',
  components: {},
  data() {
    return {
      CreateAccount: {
        email: '',
        password: '',
        password2: ''
      }
    }
  },
  methods: {
    ...mapMutations(['CURRSTEP', 'FORMDATA']),
    submit() {
      this.$validator.validate().then(result => {
        if (result) {
          // this.$emit('submitSub', this.CreateAccount)
          this.CURRSTEP(2)
          this.FORMDATA({
            name: 'CreateAccount',
            value: this.CreateAccount
          })
        } else {
          // do stuff if not valid.
        }
      })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
