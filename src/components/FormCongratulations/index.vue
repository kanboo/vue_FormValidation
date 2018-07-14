<script>
import { mapMutations } from 'vuex'

export default {
  name: 'formCongratulations',
  components: {},
  data() {
    return {
      title: 'Vue - Porject'
    }
  },
  methods: {
    ...mapMutations(['SETCURRSTEP', 'RESETFORMDATA']),
    submit() {
      this.SETCURRSTEP(1)
      this.RESETFORMDATA()
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
