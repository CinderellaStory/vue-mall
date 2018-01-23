<template>
  <div id="app">
   <NavBottom></NavBottom>
    <router-view/>
  </div>
</template>

<script>
import './assets/js/viewport'
import NavBottom from './components/NavBottom'

export default {
  name: 'App',
  components:{
    NavBottom
  }
}
</script>

<style>
@import './assets/css/index.css';
@import './assets/css/common.css';
@import './assets/css/reset.css';
</style>
