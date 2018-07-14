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
    ...mapMutations(['SETCURRSTEP', 'SETFORMDATA']),
    submit() {
      this.$validator.validate().then(result => {
        if (result) {
          this.SETCURRSTEP(2)
          this.SETFORMDATA({
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
