<script>

import HeaderComp from './components/HeaderComp.vue'
import Maincomp from './components/MainComp.vue'

export default {
  name: "App",
  components: {
    HeaderComp,
    Maincomp,
  },
}

</script>

<template>
  <div>
    <div>
      <HeaderComp />
      <Maincomp />
    </div>
  </div>
</template>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

* {
  font-family: sans-serif;
}

a {
  text-decoration: none;
}
</style>
