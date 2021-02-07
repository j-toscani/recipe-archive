<template>
  <div>
    <h2>What do you want to create?</h2>
    <div class="new__tabs-container">
      <router-link to="/new/recipe">New Recipe</router-link>
      <router-link to="/new/document"> New Document</router-link>
    </div>
    <router-view class="child__page-content"></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Create',
});
</script>

<style scoped>
.new__tabs-container {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
}

.child__page-content {
  padding: 2rem 0;
  display: flex;
  flex-flow: column;
}
</style>
