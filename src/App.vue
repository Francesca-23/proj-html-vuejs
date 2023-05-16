<script>

import HeaderComp from './components/HeaderComp.vue'
import Maincomp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: "App",
  components: {
    HeaderComp,
    Maincomp,
    FooterComp
  },
}

</script>

<template>
  <div>
    <div>
      <HeaderComp />
      <Maincomp />
      <FooterComp />
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

.text-grey {
  color: #8E989F;
  font-size: 0.9rem;
  line-height: 1.5rem;
}

.btn {
  background-color: #377DFF;
  color: white;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
}

button:hover {
  background-color: #1E1E1E !important;
  color: white !important;
}
</style>
