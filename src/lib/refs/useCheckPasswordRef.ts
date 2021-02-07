import { customRef, Ref } from 'vue';

function useCheckPasswordRef(value: any): Ref<string | boolean> {
  const password = 'wurst';
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value === password;
      },
      set(newValue) {
        value = newValue;
        trigger();
      },
    };
  });
}

export default useCheckPasswordRef;
