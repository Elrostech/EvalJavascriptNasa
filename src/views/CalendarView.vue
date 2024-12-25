<template>
    <div>
      <h1>Calendrier</h1>
      <p>Sélectionnez une date pour afficher l'image correspondante.</p>
      <input type="date" v-model="selectedDate" @change="fetchImage" />
      <div v-if="data">
        <img :src="data.url" :alt="data.title" />
        <h2>{{ data.title }}</h2>
        <p>{{ data.explanation }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const selectedDate = ref('');
      const data = ref(null);
  
      const fetchImage = async () => {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${selectedDate.value}`
        );
        data.value = await res.json();
      };
  
      return { selectedDate, data, fetchImage };
    },
  };
  </script>
  
  <style scoped>
  img {
    max-width: 100%;
    height: auto;
  }
  </style>
  