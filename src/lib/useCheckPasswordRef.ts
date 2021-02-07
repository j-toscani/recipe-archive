import { customRef } from 'vue';

function useCheckPasswordRef(value: any) {
  const password = 'wurst';
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        console.log(password, value === password);
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
