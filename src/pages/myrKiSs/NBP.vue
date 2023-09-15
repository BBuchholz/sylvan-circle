<script setup>
import { getCardFor } from './allCards'

const thisCard
  = getCardFor('BOOK') // TODO: <--CHANGE THIS LINE TO
// BE THE BOOK CODE WHERE "BOOK" IS

const sortedCards = ref([
  getCardFor('BOOK'),
])
</script>

<template>
  <div class="book-detail flex-container">
    <div class="flex-child">
      <!-- TODO: THESE SHOULD POPULATE FROM thisCard -->
      <a :href="thisCard.book_link">
        <p>Title: {{ thisCard.book_title }} </p>
        <p>Author: {{ thisCard.book_author }} </p>
      </a>
    </div>
    <div class="flex-child">
      <img :src="thisCard.book_cover_url">
    </div>
  </div>
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
  }

  .book-detail {
    margin: 80px;
  }
  .card {
    border: 5px;
    border-color: white;
    border-style: solid;
    border-radius: 1%;
  }
</style>
