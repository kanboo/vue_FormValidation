<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div class="container">
      <router-view/>
    </div>

    <TheFooter/>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: {
    TheFooter
  }
}
</script>

<style lang="scss" src="./sass/all.scss"></style>
