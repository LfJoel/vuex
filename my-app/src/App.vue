<template>
  <div id="app">
    <products-store></products-store>
  </div>
</template>

<script>
import products from './components/products.vue';
export default {
  components: {
    "products-store": products
  },
  name: 'app',
  data() {
    return {

    }
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
</style>
