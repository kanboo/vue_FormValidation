<script>
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
    submit() {
      this.$validator.validate().then(result => {
        if (result) {
          this.$emit('submitSub', this.CreateAccount)
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
