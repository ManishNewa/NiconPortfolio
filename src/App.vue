<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/layouts/NavBar.vue'
</script>

<template>
  <header>
    <NavBar></NavBar>
  </header>

  <RouterView />
</template>

<style scoped></style>
