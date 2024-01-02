<script setup>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import { RouterView } from 'vue-router';


</script>

<template>
  <Header></Header>
  <Sidebar />
  <RouterView></RouterView>

</template>

