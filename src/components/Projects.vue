<template>
  <div>
    <h1>Projects</h1>
    <section class="grid-container">
      <div v-for="(project, index) in projects" :key="index" class="grid-item">
        <h2>{{ project.name }}</h2>

        <h3>Tech Stack</h3>
        <ul>
          <li v-for="(tech, techIndex) in project.stack" :key="techIndex">
            {{ tech }}
          </li>
        </ul>
        <p>{{ project.description }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { projects } from "../state"; // Adjust the path to where your state is located
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.grid-item {
  background-color: #f0f4f8;
  padding: 15px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 10px;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

a {
  display: inline-block;
  margin-top: 15px;
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
