<template>
  <div class="landing__wrapper container">
    <div class="landing__container">
      <h1>Landing!</h1>
      <form id="authenticate" @submit="checkPassword">
        <input v-model="password" type="text" />
        <button type="submit" form="authenticate">Enter</button>
      </form>
      <span>{{ feedback }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { injectUseIsAuthenticated } from '../lib/hooks/useIsAuthenticated';
import useTimeoutRef from '../lib/refs/useTimeoutRef';

export default defineComponent({
  name: 'Landing',
  setup() {
    const feedback = useTimeoutRef('', '', 3000);
    const password = ref('');
    const { isAuthenticated, setIsAuthenticated } = injectUseIsAuthenticated();

    function checkPassword() {
      setIsAuthenticated(password.value);

      if (isAuthenticated.value) {
        feedback.value = 'Password is correct';
      } else {
        feedback.value = 'Password is wrong';
      }
    }

    return {
      feedback,
      password,
      checkPassword,
      isAuthenticated,
    };
  },
});
</script>

<style scoped>
.landing__wrapper {
  height: 100%;
  width: 100%;
  display: flex;
}

.landing__container {
  width: 80%;
  margin: auto;
}
</style>
