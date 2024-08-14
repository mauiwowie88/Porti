<script setup>
import { ref } from "vue";
defineProps({
  msg: String,
});
let count = ref(0);
</script>

<template>
  <div>
    <h1>{{ msg }} : {{ count }}</h1>
    <button @click="count++">+</button>
  </div>
</template>

<style scoped></style>
