<template>
  <div class="home">
    <h1>Image du Jour</h1>
    <div v-if="data">
      <img :src="data.url" :alt="data.title" />
      <h2>{{ data.title }}</h2>
      <p>{{ data.explanation }}</p>
    </div>
    <div v-else>
      <p>Chargement...</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const data = ref(null);

    onMounted(async () => {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`);
      data.value = await res.json();
    });

    return { data };
  },
};
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
