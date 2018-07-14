<script>
import { mapMutations } from 'vuex'

export default {
  name: 'formUpdateProfilePicture',
  components: {},
  data() {
    return {
      title: 'Vue - Porject',
      ProfilePicture: {
        file: []
      },
      fileList2: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['SETCURRSTEP', 'SETFORMDATA']),
    submit() {
      this.$validator.validate().then(result => {
        if (result) {
          this.SETCURRSTEP(4)
          this.SETFORMDATA({
            name: 'ProfilePicture',
            value: this.ProfilePicture
          })
        } else {
          // do stuff if not valid.
        }
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
