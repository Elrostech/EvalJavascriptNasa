<template>
    <div>
      <h1>{{ apod.title }}</h1>
      <img :src="apod.url" :alt="apod.title" />
      <p>{{ apod.explanation }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        apod: null,
      };
    },
    async created() {
      const apiKey = 'G93bg6xJbn5YxaJejK7C03OALahpCvWjM0RnQdh5';
      const date = this.$route.params.date;
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
      );
      this.apod = response.data;
    },
  };
  </script>
  