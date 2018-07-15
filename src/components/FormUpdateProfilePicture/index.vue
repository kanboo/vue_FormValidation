<script>
import { mapMutations } from 'vuex'

export default {
  name: 'formUpdateProfilePicture',
  components: {},
  data() {
    return {
      ProfilePicture: {
        file: []
      }
    }
  },
  methods: {
    ...mapMutations(['SETCURRSTEP', 'SETFORMDATA']),
    fileSelected(e) {
      if (this.ProfilePicture.file.length === 3) {
        this.$notify({
          title: '警告',
          message: '最多三張圖片',
          type: 'warning'
        })
      } else {
        if (e.target.files.length === 0) return
        const file = e.target.files.item(0)
        // console.log(e.target.files)

        if (!file.type.match(/jpe?g|png/)) {
          this.$notify({
            title: '警告',
            message: '只能選擇圖片(jpeg/png)',
            type: 'warning'
          })
          return false
        }
        if (file.size / 1024 > 800) {
          this.$notify({
            title: '警告',
            message: 'File size over 800kb',
            type: 'warning'
          })
          return false
        }
        const reader = new FileReader()
        reader.addEventListener('load', this.imageLoaded)
        reader.readAsDataURL(file)
      }
    },
    imageLoaded(e) {
      console.log(e.target)
      this.ProfilePicture.file.push(e.target.result)
    },
    submit() {
      if (this.ProfilePicture.file.length !== 3) {
        this.$notify({
          title: '警告',
          message: '需選擇三張圖片',
          type: 'warning'
        })
        return
      }

      this.SETCURRSTEP(4)
      this.SETFORMDATA({
        name: 'ProfilePicture',
        value: this.ProfilePicture
      })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
