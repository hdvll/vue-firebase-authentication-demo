<template>
  <div id="app">
    <Header />
    <router-view class="component"></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Header
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,700,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
}

.component {
  padding: 1rem;
}
</style>
