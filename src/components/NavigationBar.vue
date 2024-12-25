<template>
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/images-per-month">Images par Mois</router-link>
      <router-link to="/calendar">Calendrier</router-link>
    </nav>
  </template>
  
  <style scoped>
  .navbar {
    display: flex;
    gap: 20px;
    padding: 10px;
    background-color: #333;
    color: white;
  }
  .navbar a {
    color: white;
    text-decoration: none;
  }
  .navbar a:hover {
    text-decoration: underline;
  }
  </style>
  