<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/layouts/NavBar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar></NavBar>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
