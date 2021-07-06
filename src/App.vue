<template>
  <div id="app">
    <time-show/>
    <Add/>
    <Show/>
    <div id="app2">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <page-1 msg="this is page1"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Page1 from './components/Page1.vue'
import Add from './components/todo/Add.vue'
import Show from './components/todo/Show.vue'
import TimeShow from './components/TimeShow.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Page1,
    Add,
    Show,
    TimeShow
  }
}
</script>

<style>
#app2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
