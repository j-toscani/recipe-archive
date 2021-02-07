<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/search"> Search</router-link>
      <router-link to="/create"> Create</router-link>
    </nav>
    <router-view> </router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>
