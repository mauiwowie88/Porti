<template>
  <section class="skills-section">
    <h1>Tech Stack</h1>
    <div class="grid-container">
      <div v-for="(tech, index) in techStack" :key="index" class="grid-item">
        <span>{{ tech }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { techStack } from "../state";
</script>

<style scoped>
.skills-section {
  padding: 20px;
  background-color: #f9fafb;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}

.grid-item {
  background-color: #e0f7fa;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  font-size: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
