<template>
  <div>Landing!</div>
  <input v-model="password" type="text" />
  <button @click="checkPassword">Enter</button>
  <span>{{ feedback }}</span>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue';
import useTimeoutRef from '../lib/useTimeoutRef';

export default defineComponent({
  name: 'Landing',
  setup() {
    const feedback = useTimeoutRef('', '', 3000);
    const password = ref('');
    const isAuthenticated = inject('isAuthenticated');
    const updateIsAuthenticated = inject('updateIsAuthenticated');

    function checkPassword() {
      updateIsAuthenticated(password.value);

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
