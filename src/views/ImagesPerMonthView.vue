<template>
  <div>
    <h1>Images par Mois</h1>
    <input type="month" v-model="selectedMonth" @change="fetchImages" />
    <div class="grid">
      <div v-for="image in images" :key="image.date" class="image-card">
        <img :src="image.url" :alt="image.title" />
        <p>{{ image.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const selectedMonth = ref('');
    const images = ref([]);

    const fetchImages = async () => {
      const month = selectedMonth.value.split('-');
      const startDate = `${month[0]}-${month[1]}-01`;
      const endDate = `${month[0]}-${month[1]}-31`;

      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=${startDate}&end_date=${endDate}`
      );
      images.value = await res.json();
    };

    return { selectedMonth, images, fetchImages };
  },
};
</script>

<style scoped>
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.image-card {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  width: 150px; /* Limite la largeur de chaque image */
}
img {
  max-width: 100%;
  height: auto;
  border-radius: 5px; /* Optionnel : ajoute des coins arrondis */
  max-height: 100px; /* Limite la hauteur des images */
  object-fit: cover; /* Coupe les images si nécessaire pour garder la taille */
}
</style>
