<script>
import { mapState } from 'vuex'
import FormCreateAccount from '@/components/FormCreateAccount'
import FormGeneralInformation from '@/components/FormGeneralInformation'
import FormUpdateProfilePicture from '@/components/FormUpdateProfilePicture'
import FormPaymentMethod from '@/components/FormPaymentMethod'
import FormCongratulations from '@/components/FormCongratulations'

export default {
  name: 'Form',
  components: {
    FormCreateAccount,
    FormGeneralInformation,
    FormUpdateProfilePicture,
    FormPaymentMethod,
    FormCongratulations
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['currStep', 'validationSteps'])
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
