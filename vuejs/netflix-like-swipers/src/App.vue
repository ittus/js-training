<template>
  <div id="app">
    <h1>{{ swiperType }}</h1>
    <HomePage/>
  </div>
</template>

<script>
import HomePage from './components/HomePage'
export default {
  name: 'App',
  components: {
    HomePage
  },
  data() {
    return {
      swiperType : 'Awesome swipper'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
h1{
  color: #ffffff;
}
