<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <NewChat msg="Welcome to Your Vue.js App"/>
</template>

<script>
import NewChat from './components/NewChat.vue'

export default {
  name: 'app',
  components: {
    NewChat
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


  @import './assets/chat.css';


</style>
