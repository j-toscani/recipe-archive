<template>
  <div>
    <div class="search__top">
      <h2>Search!</h2>
      <form id="search" class="search__form">
        <input type="text" />
        <button form="search">Start Search</button>
      </form>
    </div>
    <ul class="search__recipe-list">
      <li v-for="element in recipes" :key="element" class="search__recipe-item">{{ element }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'Search',
  setup() {
    const dummyArray = Array.from(new Array(10), (_e, i) => {
      return i + 1;
    });
    const recipes = reactive(dummyArray);
    return {
      recipes,
    };
  },
});
</script>

<style scoped>
.search__top {
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid black;
}

.search__recipe-list {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
}

.search__recipe-item {
  list-style: none;
  height: 100px;
  border: 1px solid black;
  flex-basis: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search__form {
  display: flex;
  flex-flow: row;
  gap: 1rem;
}
</style>
