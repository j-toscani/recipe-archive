<template>
  <div>
    <h2>What do you want to create?</h2>
    <div>
      <router-link to="/new/recipe">New Recipe</router-link>
      <router-link to="/new/document"> New Document</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Create',
});
</script>
