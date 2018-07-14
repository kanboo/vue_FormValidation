<script>
import { mapMutations } from 'vuex'

export default {
  name: 'formGeneralInformation',
  components: {},
  data() {
    return {
      GeneralInformation: {
        name: '',
        phone: '',
        birthdate: '',
        address: {
          city: '',
          dist: '',
          detail: ''
        }
      }
    }
  },
  methods: {
    ...mapMutations(['SETCURRSTEP', 'SETFORMDATA']),
    submit() {
      this.$validator.validate().then(result => {
        if (result) {
          this.SETCURRSTEP(3)
          this.SETFORMDATA({
            name: 'GeneralInformation',
            value: this.GeneralInformation
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
