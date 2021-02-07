<template>
  <div>
    <h3 class="child__headline">Here you will be able to create a recipe!</h3>
    <form @submit.prevent="handleFormSubmit">
      <div class="input__container">
        <label for="" class="input__label">Input 1</label>
        <input type="text" />
      </div>
      <div class="input__container">
        <label for="" class="input__label">Input 1</label>
        <input type="text" />
      </div>
      <div class="input__container">
        <label for="" class="input__label">Input 1</label>
        <input type="text" />
      </div>
      <div class="input__container">
        <label for="" class="input__label">Input 1</label>
        <input type="text" />
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CreateRecipe',
});
</script>

<style scoped>
.child__headline {
  text-align: center;
  margin-bottom: 3rem;
}

form {
  margin: 0 auto;
}

.input__label {
  display: block;
}

.input__label::after {
  content: ':';
}

.input__container {
  margin: 0.5rem auto;
}

.input__container:last-of-type {
  margin-bottom: 2rem;
}
</style>
