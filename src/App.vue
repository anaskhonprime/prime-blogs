<template>
  <router-view :category ="category"></router-view>
</template>

<script>


import firebase from 'firebase/compat/app'; 

import Data from './data/categories.js';

export default {
  name: 'App',
  data() {
    return {
      category :  Data,
    }
  },
  components: {    
  },
}
</script>

<style>

</style>
