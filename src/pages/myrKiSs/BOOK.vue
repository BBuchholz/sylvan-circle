<script setup>
import { getCardFor } from './allCards'

const sortedCards = ref([
  getCardFor('BOOK'),
])
</script>

<!-- <template>
  <div>
    <a href="https://shepton-transmission-services.netlify.app/" target="_blank">
      <img class="card" src="https://madamadam.s3.us-east-2.amazonaws.com/SCA_BOOK_TMPLT_CARD.png">
    </a>
  </div>
</template> -->

<template>
  <div v-for="aCard in sortedCards" :key="aCard" class="zhone flex-container">
    <div class="card flex-child">
      <img :src="aCard.image" class="card">
    </div>
    <div class="flex-child content">
      <a :href="aCard.siteUrl">
        {{ aCard.siteName }}
      </a> - {{ aCard.siteDesc }}
    </div>
  </div>
</template>

<style scoped>
  a {
      color: aqua;
  }

  .zhone {
      margin: 40px;
  }
  .flex-container {
      display: flex;
  }

  .flex-child {
      flex: 1;
  }

  .flex-child:first-child {
      margin-right: 20px;
  }`

  .card {
    border: 5px;
    border-color: white;
    border-style: solid;
    border-radius: 1%;
  }
</style>
